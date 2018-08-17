const spreadsheetToJson = require('../spreadsheet-to-json')
const spreadsheetId = '1tcmn9UVF715FESbtsE1qdrZly_1yzzodWdgKwQsztEU'

const tables = [
  'domaines',
  'types',
  'domaines__types',
  'statuts',
  'demarches',
  'demarches_statuts',
  'demarches__types',
  'demarches__demarches_statuts',
  'etapes',
  'etapes_statuts',
  'etapes__etapes_statuts',
  'demarches__etapes',
  'emprises'
]

module.exports = () => {
  tables.forEach(name => spreadsheetToJson(spreadsheetId, name, name))
}
