const build = require('../build')
const spreadsheetId = '1SCD93SteEzJIIam1fXjLW0Do815qaJj6drpKyWd1GHg'

const tables = ['utilisateurs', 'administrations', 'entreprises']

tables.forEach(name => build(spreadsheetId, '', name))