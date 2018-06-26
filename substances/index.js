const build = require('../build')
const spreadsheetId = '1-79DUlhFr608AJab-EouZUTk3NlWUstt6BY1mHZ3ub8'

const cb = json =>
  json.map(j =>
    Object.keys(j).reduce((res, cur) => {
      res[cur] = cur === 'alias' ? j[cur].split(' ; ') : j[cur]
      return res
    }, {})
  )

build(spreadsheetId, '', 'substances', cb)
build(spreadsheetId, '', 'substances_legals')
