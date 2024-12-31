const { urlToHttpOptions } = require('url')

const DRIVE = class
{
  #root = __dirname
  #config = require (`${this.#root}/config.json`)
  #CONTAINER = require (`${this.#root}${this.#config.C.path}`)
  #FILE = require (`${this.#root}${this.#config.F.path}`)

  #fs = require ('fs')
  #path = require ('path')
  
  #drivePath

  #base
  #dir
  #rootDir

  TAG = null
  NAME
  MONITOR

  constructor (prop)
  {
    if (prop)
    {
      if (prop.tag) this.TAG = prop.tag
      if (prop.path) this.#drivePath = prop.path
      this.NAME = this.#path.parse (this.#drivePath).name
      if (prop.monitor) this.MONITOR = prop.monitor

      this.#base = this.#path.parse (this.#drivePath).base
      this.#dir = this.#path.parse (this.#drivePath).dir
      this.#rootDir = this.#path.parse (this.#drivePath).root

      if (this.TAG == null) delete this.TAG

      if (this.#fs.existsSync(this.#drivePath))
      {
        this.DIRECTORY = {
          FILES : [],
          CONTAINERS : []
        }
        
        this.#map (this.#drivePath, this.DIRECTORY)
      }
    }  
    
  }

  #map (path, array)
  {
    if (this.#fs.readdirSync (path))
    {
      const contentNames = this.#fs.readdirSync (path)
      const contentPaths = []

      for (let x in contentNames)
      {
        contentPaths.push (`${path}/${contentNames[x]}`)
        
        if (this.#fs.statSync (contentPaths[x]).isDirectory ())
        {
          this.DIRECTORY.CONTAINERS.push (new this.#CONTAINER (contentPaths[x]))
        }
        if (this.#fs.statSync (contentPaths[x]).isFile ())
          {
            this.DIRECTORY.FILES.push (new this.#FILE (contentPaths[x]))
          }
      }
    }
  }
}
module.exports = DRIVE
