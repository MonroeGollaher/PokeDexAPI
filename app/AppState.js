import PokeDex from "./Models/APIPokemon.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import APIPokemon from "./Models/APIPokemon.js"

class AppState extends EventEmitter {
  /** @type {APIPokemon[]} */
  apiPokemon = []
  activePokemon = null
  mySpells = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
