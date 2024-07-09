const xlsx = require('xlsx');

module.exports = function (excelFile) {
    const file = xlsx.readFile(excelFile);
    let data = [];
    for (let i = 0; i < file.SheetNames.length; i++) {
        data = xlsx.utils.sheet_to_json(file.Sheets[file.SheetNames[i]])
    }

    return data
}