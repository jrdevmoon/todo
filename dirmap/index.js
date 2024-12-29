const DIRECTORYMAP = class
{
  #root = __dirname

  #config = require (`${this.#root}/config.json`)

  #Drive = require (`${this.#root}${this.#config.D.path}`)

  DRIVE = []
  COUNT = 0

  map (prop)
  {
    this.COUNT ++

    const temp = {
      driveName : null,
      path : null,
      monitor : "no"
    }

    if (prop)
    {
      if (prop.driveName) temp.driveName = prop.driveName 
      if (prop.path) temp.path = prop.path
      if (prop.monitor) temp.monitor = prop.monitor
      
      if (temp.path != null)
      {
        this.DRIVE.push  (new this.#Drive (
          {
            name : temp.driveName,
            path : temp.path,
            monitor : temp.monitor
          }
        ))
        
      }
      if (temp.path == null)  console.log ("Error: No path was provided to be mapped.")
    }
    else console.log ("Error: No information entered into the map function of the Directory Mapper Module.")
  }
}
module.exports = DIRECTORYMAP