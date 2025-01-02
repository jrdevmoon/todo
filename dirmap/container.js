const CONTAINER = class
{
  #root = __dirname
  #config = require (`${this.#root}/config.json`)
  
  #CONTAINER = require (`${this.#root}${this.#config.C.path}`)
  #JSON = require (`${this.#root}${this.#config.JSON.path}`)
  #JS = require (`${this.#root}${this.#config.JS.path}`)
  #FILE = require (`${this.#root}${this.#config.F.path}`)

  #fs = require ('fs')
  #path = require ('path')

  DATA = {}
  CONTAINER = []
  JSON = []
  JS = []
  FILE = []
  
  constructor (path)
  {
     
    if (path) {}
  }
}
module.exports = CONTAINER