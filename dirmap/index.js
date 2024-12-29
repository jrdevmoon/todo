const DIRECTORYMAP = class
{
  #root = __dirname

  #config = require (`${this.#root}/config.json`)

  #Storage = require (`${this.#root}${this.#config.S.path}`)

  STORAGE = []
  COUNT = 0

  map (prop)
  {
    this.COUNT ++

    const temp = {
      tag : null,
      path : null,
      monitor : "no"
    }

    if (prop)
    {
      if (prop.tag) temp.tag = prop.tag
      if (prop.path) temp.path = prop.path
      if (prop.monitor) temp.monitor = prop.monitor
      
      if (temp.path != null)
      {
        this.STORAGE.push  (new this.#Storage (
          {
            tag : temp.tag,
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
