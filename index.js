const root = __dirname

const config = require (`${root}/config.json`)

const DM = require (`${root}${config.DM.path}`)

const dm = new DM

dm.map (
  {
    tag: "D:",
    path: `${root}/dirmap`,
    monitor: "yes"
  }
)

dm.map (
  {
    tag: "C:",
    path: './test/'
  }
)

console.dir (dm, {depth: 10})
