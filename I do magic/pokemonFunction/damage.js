class Pokemon {
  constructor(name, type, attack, defense){
    this._attack = attack;
    this._name = name;
    this._type = type;
    this._defense = defense;
  }
  
  get name(){
    return this._name;
  }

  get type(){
    return this._type;
  }

  get attack(){
    return this._attack;
  }

  get defense(){
    return this._defense;
  }
}

function calculateMultiplier (typeAtk, typeDef) {
  if(typeAtk === typeDef){
    return 0.5;
  }
  else{
    switch(typeAtk){
      case 'fire':
        if(typeDef === 'grass'){
          return 2;
        }
        else if(typeDef === 'water'){
          return 0.5;
        }
        else if(typeDef === 'electric'){
          return 1;
        }

      case 'grass':
        if(typeDef === 'fire'){
          return 0.5;
        }
        else if(typeDef === 'water'){
          return 2;
        }
        else if(typeDef === 'electric'){
          return 1;
        }

      case 'water':
        if(typeDef === 'grass'){
          return 0.5;
        }
        else if(typeDef === 'fire'){
          return 2;
        }
        else if(typeDef === 'electric'){
          return 0.5;
        }

      case 'electric':
        if(typeDef === 'grass'){
          return 1;
        }
        else if(typeDef === 'water'){
          return 2;
        }
        else if(typeDef === 'fire'){
          return 1;
        }
    }
  }
};

const damage = (pokemonAtk, pokemonDef) =>  Math.floor((50*(pokemonAtk.attack / pokemonDef.defense) * calculateMultiplier( pokemonAtk.type, pokemonDef.type ) ) +0.5 );


const pikachu = new Pokemon('Pikachu', 'electric', 80, 120);
const charmander = new Pokemon('Charmander', 'fire', 100, 100);
const totodile = new Pokemon('Totodile', 'water', 150, 70);

console.log(damage(pikachu, totodile));
console.log(damage(totodile, pikachu));
console.log(damage(charmander, totodile));
console.log(damage(pikachu, charmander));
