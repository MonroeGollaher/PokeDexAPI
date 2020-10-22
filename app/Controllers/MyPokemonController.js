import { ProxyState } from "../AppState.js";
import { myPokemonService } from "../Services/MyPokemonService.js";

function drawMyPokemon(){
    let myPokemon = ProxyState.myPokemon
    let template = ""
    myPokemon.forEach(p => template += `<li onclick="app.mySpellsController.getActiveSpell('${s.name}')" class="pointer">${s.name}</li>`)
    document.getElementById("myPokemon").innerHTML = template
}

export default class MyPokemonController{
    constructor(){
        console.log("hello from my controller");
        ProxyState.on("myPokemon", drawMyPokemon)
        this.getMyPokemon()
    }

    getMyPokemon(){
        try {
            myPokemonService.getMyPokemon()
        } catch (error) {
            console.error(error)
        }
    }

    catchPokemon(){
        myPokemonService.catchPokemon()
    }

    addActivePokemon(id){
        try {
            myPokemonService.addActivePokemon(id)
        } catch (error) {
            console.error(error)
        }
    }

    removePokemon(){
        try {
           myPokemonService.removePokemon() 
        } catch (error) {
            console.error(error)
        }
    }
}