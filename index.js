//data
const root = __dirname

const config = require (`${root}/config.json`)

const DM = require (`${root}${config.DM.path}`)

//directory mapper init
const dm = new DM

//directory mapper functions
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

//log
console.dir (dm, {depth: 10})
