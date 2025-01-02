const { urlToHttpOptions } = require('url')

const DRIVE = class
{
  #root = __dirname
  
  #config = require (`${this.#root}/config.json`)
  
  #CONTAINER = require (`${this.#root}${this.#config.C.path}`)
  #JSON = require (`${this.#root}${this.#config.JSON.path}`)
  #JS = require (`${this.#root}${this.#config.JS.path}`)
  #FILE = require (`${this.#root}${this.#config.F.path}`)

  DATA = null

  constructor (prop)
  {
    if (prop)
    {
      this.DATA = {}
      if (prop.tag) this.DATA.TAG = prop.tag
      if (prop.monitor) this.DATA.MONITOR = prop.monitor
      if (prop.path) this.map (prop.path)
    }

    if (this.DATA == null) delete this.DATA
  }

  map (path)
  {
    const fsMod = require ('fs')
    const pathMod = require ('path')

    if (path) this.setData (path)
  }

  setData (path)
  {
    
  }
}
module.exports = DRIVE
