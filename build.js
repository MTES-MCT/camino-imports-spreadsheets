const spreadSheetToJson = require('google-spreadsheet-to-json')
const credentials = require('./credentials.js')
const fileCreate = require('./_utils/file-create')

module.exports = (spreadsheetId, name) => {
  spreadSheetToJson({
    spreadsheetId,
    credentials,
    worksheet: name
  })
    .then(json => {
      console.log(json)
      const fileContent = JSON.stringify(json, null, 2)
      const fileName = `exports/metas/${name}.json`

      fileCreate(fileName, fileContent)
    })
    .catch(err => {
      console.log(err.message)
      console.log(err.stack)
    })
}
