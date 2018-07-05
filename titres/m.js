const build = require('../build')
const spreadsheetId = '1wm64Ot7QAAslHOlXYSTtws6NKOMdKsN575615QCHQiA'

const tables = [
  'titres_demarches',
  'titres_etapes',
  'titres_points',
  'titres_substances',
  'titres_titulaires',
  'titres_amodiataires',
  'titres_utilisateurs',
  'titres_emprises',
  'titres_verifications'
]

const cb = json =>
  json.map(j =>
    Object.keys(j).reduce((res, cur) => {
      res[cur] = cur === 'references' ? JSON.parse(j[cur]) : j[cur]
      return res
    }, {})
  )

build(spreadsheetId, 'titres/m/', 'titres', cb)

tables.forEach(name => build(spreadsheetId, 'titres/m/', name))