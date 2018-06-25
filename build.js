const spreadSheetToJson = require('google-spreadsheet-to-json')
const credentials = require('./credentials.js')
const fileCreate = require('./_utils/file-create')

module.exports = (spreadsheetId, dir, name, cb) => {
  spreadSheetToJson({
    spreadsheetId,
    credentials,
    worksheet: name
  })
    .then(json => {
      if (cb) {
        json = cb(json)
      }
      const fileContent = JSON.stringify(json, null, 2)
      const fileName = `exports/${dir}${name}.json`

      fileCreate(fileName, fileContent)
    })
    .catch(err => {
      console.log(err.message)
      console.log(err.stack)
    })
}
