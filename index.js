const root = __dirname

const config = require (`${root}/config.json`)

const DM = require (`${root}${config.DM.path}`)

const dm = new DM ()

dm.map (
  {
    driveName: "_SYSTEM",
    path: root,
    monitor: "yes"
  }
)

dm.map (
  {
    driveName : "_root",
    path: '.'
  }
)

console.log (dm)