const build = require('../build')
const spreadsheetId = '1w--hbXC00TT6AkRJOR7Q9WMsuZt1Y1G1d7GC8rsKr6E'

const tables = [
  'titres',
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

tables.forEach(name => build(spreadsheetId, 'titres/m973/', name))
