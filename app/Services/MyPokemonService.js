import { ProxyState } from "../AppState.js";
import { sandboxApi } from "../Services/AxiosService.js";
import APIPokemon from "../Models/APIPokemon.js"

class MyPokemonService {
    constructor(){
        console.log("hello from my pokemon service");
    }

    async getMyPokemon(){
        let res = await sandboxApi.get("")
        console.log(res.data.message)
        ProxyState.myPokemon = res.data.data.map(p => new APIPokemon(p))
    }

    async catchPokemon(){
        let res = await sandboxApi.post("", ProxyState.activePokemon)
            console.log(res);
            ProxyState.myPokemon = [...ProxyState.myPokemon, new APIPokemon(res.data.data)]
        }
    
     addActivePokemon(id){
        ProxyState.activePokemon = ProxyState.myPokemon.find(p => p.id == id)
    }

    async removePokemon(){
 
    }
}

export const myPokemonService = new MyPokemonService()
