class hero {
    constructor(name, age, heroClass) {
        this.name = name
        this.age = age
        this.heroClass = heroClass
    }
    exibir() {
        if(this.heroClass == "maga)") {
            console.log(`A ${this.heroClass}, ${this.name} atacou usando magia.`)
        } else if(this.heroClass == "guerreiro") {
            console.log(`O ${this.heroClass}, ${this.name} atacou usando espada.`)
        }else if(this.heroClass == "monge") {
            console.log(`O ${this.heroClass}, ${this.name} atacou usando artes marciais.`)
        }else if(this.heroClass == "ninja") {
            console.log(`A ${this.heroClass}, ${this.name} atacou usando shuriken.`)
        }else {
            console.log(`${this.name} não existe nesse mundo de fantasia`)
        }
        
    }
}

let renata = new hero('Renata', 18, 'maga')
let vitor = new hero('Vitor', 20, 'guerreiro')
let guilherme = new hero('Guilherme', 15, "monge")
let elza = new hero('Elza', 25, 'ninja')

renata.exibir()
vitor.exibir()
guilherme.exibir()
elza.exibir()
