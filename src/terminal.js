const inquirer = require('inquirer');

const questions = [
    {
    type: 'input',
    name: 'file_name',
    message: "What's the file that you are looking for?",
    },
    {
        type: 'input',
        name: 'keep_running',
        message: "Do you want to search for another file?",
        choices: ['yes', 'no'],
        default() {
            return 'yes'
        }
    }]

const init = (callback) => {
    inquirer
        .prompt(questions)
        .then((answers) => {
           await callback(answers);

            if(answers.keep_running === 'yes') {
                return init();
            }
        })
        .catch((error) => {
            if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            } else {
            // Something else went wrong
            }
        });
}

module.exports = init

