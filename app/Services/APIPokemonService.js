import { ProxyState } from "../AppState.js";
import APIPokemon from "../Models/APIPokemon.js"
import { pokeApi } from "./AxiosService.js";

class APIPokemonService {
  constructor(){
    console.log("hello from api service");
  }

  async getActivePokemon(name){
    let res = await pokeApi.get(name)
    console.log(res);
    ProxyState.activePokemon = new APIPokemon(res.data)
  }

  async getPokemon(){
    let res = await pokeApi.get("")
    console.log(res.data.results);
    ProxyState.apiPokemon = res.data.results
  }
}

export const apiPokemonService = new APIPokemonService();

