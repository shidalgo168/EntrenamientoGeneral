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
  const effectiveness = {
    'fire': function () {
      let defenses = {
        'grass': function () {
          return 2;
        },
        'water': function () {
          return 0.5;
        },
        'electric': function () {
          return 1;
        }
      }
      return defenses[typeDef]();
    },
    'grass':  function () {
      let defenses = {
        'water': function () {
          return 2;
        },
        'fire': function () {
          return 0.5;
        },
        'electric': function () {
          return 1;
        }
      }
      return defenses[typeDef]();
    },

    'water': function () {
      let defenses = {
        'fire': function () {
          return 2;
        },
        'grass': function () {
          return 0.5;
        },
        'electric': function () {
          return 0.5;
        }
      }
      return defenses[typeDef]();
    },
      

    'electric': function () {
      let defenses = {
        'water': function () {
          return 2;
        },
        'fire': function () {
          return 1;
        },
        'grass': function () {
          return 1;
        }
      }
      return defenses[typeDef]();
    }
  };
  return effectiveness[typeAtk]();
};

const damage = (pokemonAtk, pokemonDef) =>  Math.floor((50*(pokemonAtk.attack / pokemonDef.defense) * calculateMultiplier( pokemonAtk.type, pokemonDef.type ) ) +0.5 );


const pikachu = new Pokemon('Pikachu', 'electric', 80, 120);
const charmander = new Pokemon('Charmander', 'fire', 100, 100);
const totodile = new Pokemon('Totodile', 'water', 150, 70);
const cyndaquil = new Pokemon('Cyndaquil', 'fire', 180, 50);

console.log(damage(pikachu, totodile));
console.log(damage(totodile, pikachu));
console.log(damage(charmander, totodile));
console.log(damage(pikachu, charmander));
console.log(damage(charmander, cyndaquil));
