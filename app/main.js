import APIPokemonController from "./Controllers/APIPokemonController.js";
import MyPokemonController from "./Controllers/MyPokemonController.js"

class App {
  apiPokemonController = new APIPokemonController();
  myPokemonController = new MyPokemonController(); 
}

window["app"] = new App();
