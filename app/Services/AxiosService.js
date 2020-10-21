export const pokeApi = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon",
    timeout: 11000
})

export const sandboxApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/monroe/pokemon",
    timeout: 10000
  })