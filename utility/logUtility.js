const shell = require('shelljs');
/**
 * To return the fileName corresponding to the current date
 * 
 * @returns File Name in string
 */
var getFileName = () => {
    let currentDate = new Date();
    return `${currentDate.toDateString().replace(/ /g, '_')}.log`
}

// To check if all the directories in the given path are present, else create them
var validateDirectory = (pathToVerify) => {
    shell.mkdir('-p',pathToVerify);
}

module.exports = {
    getFileName,
    validateDirectory
}