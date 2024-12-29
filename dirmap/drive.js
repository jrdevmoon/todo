const DRIVE = class
{
  #root = __dirname
  #config = require (`${this.#root}/config.json`)
  #CONTAINER = require (`${this.#root}${this.#config.C.path}`)

  #fs = require ('fs')
  #path = require ('path')
  
  #driveName
  #mainDir

  constructor (prop)
  {
    if (prop)
    {
      if (prop.name) this.Name = prop.name
      if (prop.path) this.root = prop.path
      if (prop.monitor) this.monitor = prop.monitor
        
    }  
    
  }

  #map (prop)
  {
    
  }
}
module.exports = DRIVE