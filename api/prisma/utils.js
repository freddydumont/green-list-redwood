const chalk = require('chalk')
const log = console.log

function start(table) {
  log(chalk`
{bold ${table}}... [{yellow started}]
  `)
}

function end(table) {
  log(chalk`
{bold ${table}}... [{green done}]
  `)
}

function found(table, name, data) {
  log(chalk`
[${table}] {inverse ${name}} {yellow was found} in the DB:
{bold
${JSON.stringify(data, null, 2)}}`)
}

function created(table, name, data) {
  log(chalk`
[${table}] {inverse ${name}} {green was created}:
{bold
${JSON.stringify(data, null, 2)}}`)
}

function count(count) {
  log(chalk`
Found {yellow ${count.found}} records.
Created {green ${count.created}} records.
`)
}

module.exports = {
  start,
  end,
  found,
  created,
  count,
}
