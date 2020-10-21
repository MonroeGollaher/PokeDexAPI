import { ProxyState } from "../AppState.js";
import { apiPokemonService } from "../Services/APIPokemonService.js";


//Private
function _drawAPIPokemon() {
 let apiPokemon = ProxyState.apiPokemon
 let template = ""

 apiPokemon.forEach(ap => template += `<li onclick="app.apiPokemonController.getActivePokemon('${ap.name}')" class="pointer">${ap.name}</li>`)
 document.getElementById("apiPokemon").innerHTML = template
}

function _drawActivePokemon(){
  if(ProxyState.activePokemon){
    document.getElementById("activePokemon").innerHTML = ProxyState.activePokemon.Template
  } else {
    document.getElementById("activePokemon").innerHTML = "";
  }
  
}

//Public
export default class APIPokemonController {
  constructor() {
    console.log("hello from controller");
    ProxyState.on("apiPokemon", _drawAPIPokemon);
    ProxyState.on("activePokemon", _drawActivePokemon)
    this.getApiPokemon()
    _drawAPIPokemon()
  }

  getApiPokemon(){
    try {
      apiPokemonService.getPokemon()
    } catch (error) {
      console.error(error)
    }
  }

  getActivePokemon(name){
    try {
      apiPokemonService.getActivePokemon(name)
    } catch (error) {
      console.error(error)
    }
  }
}
