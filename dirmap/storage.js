const { urlToHttpOptions } = require('url')

const DRIVE = class
{
  #root = __dirname
  #config = require (`${this.#root}/config.json`)
  #CONTAINER = require (`${this.#root}${this.#config.C.path}`)
  #JSON = require (`${this.#root}${this.#config.JSON.path}`)
  #JS = require (`${this.#root}${this.#config.JS.path}`)
  #FILE = require (`${this.#root}${this.#config.F.path}`)

  #fs = require ('fs')
  #path = require ('path')
  
  #drivePath

  #base
  #dir
  #rootDir

  DATA = {}
  CONTAINER = []
  JSON = []
  JS = []
  FILE = []

  COUNT =
  {
    
  }

  constructor (prop)
  {
    if (prop)
    {
      if (prop.tag) this.DATA.TAG = prop.tag
      if (prop.monitor) this.DATA.MONITOR = prop.monitor
      if (prop.path) this.#map (
        prop.path, 
        this.DATA, 
        this.CONTAINER,  
        this.JSON, 
        this.JS,
        this.FILE
      )
    }
  }

  #map (path, data, container, json, js, file)
  {
    if (path) 
    {
      if (this.#fs.existsSync (path)) 
      {
        data.NAME = this.#path.parse (path).name
        data.PATH = path
        data.DIR = this.#path.parse (path).dir
        data.ROOT = this.#path.parse (path).root
        data.SIZE = this.#fs.lstatSync (path).size

        this.#content (path, container, json, js, file)
      }

      if (!(this.#fs.existsSync (path))) console.log (`"${path}" does not exist.`)
    }
  }

  #content (path, container, json, js, file)
  {
    if (this.#fs.readdirSync)
    {
      const contentNames = this.#fs.readdirSync (path)

      const contentPaths = []

      for (let xx in contentNames)
      {
        contentPaths.push (`${path}/${contentNames[xx]}`)

        this.#setContent (contentPaths[xx])
      }
    }
  }

  #setContent (path)
  {
    if (this.#fs.statSync (path).isDirectory ())
    {
      this.CONTAINER.push (new this.#CONTAINER (path))
    }
    if (this.#fs.statSync (path).isFile ())
    {
      if (this.#path.parse (path).ext == ".json")
      {
        this.JSON.push (new this.#JSON (path))
      }
      else if (this.#path.parse (path).ext == ".js")
      {
        this.JS.push (new this.#JS (path))
      }
      else
      {
        this.FILE.push (new this.#FILE (path))
      }
    }
  }
}
module.exports = DRIVE
