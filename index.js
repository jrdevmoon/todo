const root = __dirname

const config = require (`${root}/config.json`)

const DM = require (`${root}${config.DM.path}`)

const dm = new DM ()
/*
dm.map (
  {
    tag: "_SYSTEM",
    path: root,
    monitor: "yes"
  }
)
*/
dm.map (
  {
    path: './test'
  }
)

console.dir (dm, {depth: 10})
