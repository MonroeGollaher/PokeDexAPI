import { ProxyState } from "../AppState.js";
import { sandboxApi } from "../Services/AxiosService.js";
import APIPokemon from "../Models/APIPokemon.js"

class MyPokemonService {
    constructor(){
        console.log("hello from my pokemon service");
    }
}

export const myPokemonService = new MyPokemonService()
