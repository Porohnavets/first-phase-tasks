const { tsImportEqualsDeclaration } = require("@babel/types");

class Tree {
  constructor(name) {
    this.name = name;
  }
}

class Garden {
  constructor(arr = []) {
    this.garden = arr;
  }
}

class Gardener {
  constructor(name) {
    this.name = name;
  }

  gatherFruits(qwe) {
    return qwe.garden.map(
      (el) => `${this.name} собрал фрукты с дерева "${el.name}"`
    );
  }
}

// Измени код выше, чтобы код ниже заработал.
// Код ниже не менять :)
const myLittleGarden = new Garden([
  new Tree(`яблоня высокая`), // экземпляр класса
  new Tree(`груша`),
  new Tree(`персиковое дерево`),
]);
const gennadiy = new Gardener(`Геннадий`);
const results = gennadiy.gatherFruits(myLittleGarden);
console.log(results);

/*
  Ожидаемый результат в консоли:
  [
    ‘Геннадий собрал фрукты с дерева “яблоня высокая“‘,
    ‘Геннадий собрал фрукты с дерева “груша“‘,
    ‘Геннадий собрал фрукты с дерева “персиковое дерево“’,
  ]
*/
