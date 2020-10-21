export default class APIPokemon {
    constructor(data) {
        this.name = data.name
        this.sprite = data.sprites.front_default
        this.abilities = data.abilities
        this.weight = data.weight
        this.id = data.id
    }

    get Template() {

        return /*html*/`
        <div class="card">
            <div class="card-body">
                <img src="${this.sprite}">
                <h4 class="card-title">Name: ${this.name}</h4>
                <p class="card-text">Description : ${this.description}</p>
                <p class="card-text">Weight : ${this.weight}</p>
                <p class="card-text">ID : ${this.id}</p>
                ${this.Button}
            </div>
        </div>
        `
    }

    get Button(){

        return /*html*/`
        

        `
    }
}
