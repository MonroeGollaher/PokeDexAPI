import { ProxyState } from "../AppState.js";
import { myPokemonService } from "../Services/MyPokemonService.js";

function drawMyPokemon(){

}

export default class MyPokemonController{
    constructor(){
        console.log("hello from my controller");
        ProxyState.on("myPokemon", drawMyPokemon)
    }
}