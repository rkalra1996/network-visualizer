/**
 * To return the fileName corresponding to the current date
 * 
 * @returns File Name in string
 */
var getFileName = () => {
    let currentDate = new Date();
    return `${currentDate.toDateString().replace(/ /g, '_')}.log`
}

module.exports = {getFileName}