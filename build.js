const spreadSheetToJson = require('google-spreadsheet-to-json')
const credentials = require('./credentials.js')
const fileCreate = require('./_utils/file-create')

module.exports = (spreadsheetId, fileName, worksheet, cb) => {
  spreadSheetToJson({
    spreadsheetId,
    credentials,
    worksheet
  })
    .then(json => {
      if (cb) {
        json = cb(json)
      }
      const fileContent = JSON.stringify(json, null, 2)
      const filePath = `exports/${fileName}.json`

      fileCreate(filePath, fileContent)
    })
    .catch(err => {
      console.log(err.message)
      console.log(err.stack)
    })
}
