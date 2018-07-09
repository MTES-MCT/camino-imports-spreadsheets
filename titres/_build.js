const build = require('../build')

module.exports = (spreadsheetId, type) => {
  const titresCb = json =>
    json.map(j =>
      Object.keys(j).reduce((res, cur) => {
        res[cur] = cur === 'references' ? JSON.parse(j[cur]) : j[cur]
        return res
      }, {})
    )

  const tables = [
    { name: '', cb: titresCb },
    { name: '_demarches', cb: null },
    { name: '_etapes', cb: null },
    { name: '_points', cb: null },
    { name: '_substances', cb: null },
    { name: '_titulaires', cb: null },
    { name: '_amodiataires', cb: null },
    { name: '_utilisateurs', cb: null },
    { name: '_emprises', cb: null },
    { name: '_verifications', cb: null }
  ]

  tables.forEach(t =>
    build(spreadsheetId, `titres_${type}${t.name}`, `titres${t.name}`, t.cb)
  )
}
