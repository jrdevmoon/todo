const DIRECTORYMAP = class
{
//default data
  #root = __dirname

  #config = require (`${this.#root}/config.json`)

  #Storage = require (`${this.#root}${this.#config.S.path}`)

//drive mapper
  map (prop)
  {
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
        if (!(this.STORAGE)) this.STORAGE = []
        this.STORAGE.push  (new this.#Storage (temp))

        if (!(this.COUNT)) this.COUNT = 0
        this.COUNT ++
      }
      
      if (temp.path == null) this.log ("Error: No path was provided to be mapped.")
    }
    
    if (!(prop)) this.log ("Error: No information entered into the map function of the Directory Mapper Module.")
  }
//error handler
  log (data)
  {
    if (!(this.ERRORS)) this.ERRORS = []
    
    this.ERRORS.push (data)
  }
  
}
module.exports = DIRECTORYMAP
