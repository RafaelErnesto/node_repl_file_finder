const fs = require('fs/promises')
const path = require('path')

const getFolderContents = async (currentFolder) => {
    const folders = await fs.readdir(currentFolder, { withFileTypes: true })
    console.log(folders);
}

const filterDirectories = (result) => {
    return result.filter(item => item.isDirectory())
}

const filterFiles = (result) => {
    return result.filter(item => !item.isDirectory())
}

const lookForFile = (fileName, files) => {
    const searchResult = files.filter((file) => file === filename)
    return searhForFile.length > 0 ? searhForFile[0] : undefined
}

const search = (fileName) => {

}

module.exports.search = search
