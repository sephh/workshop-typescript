/**
 * Crie uma interface CakeRecipe
 * flour: number;
 * chocolate: number;
 * egg: number;
 * milk: number;
 * */

interface CakeRecipe {
    flour: number;
    chocolate: number;
    egg: number;
    milk: number;
}

/**
 * Crie uma classe Cake que implementa CakeRecipe e tem um método retorna a caloria do bolo.
 * Pode inventar o cálculo das calorias com o valor dos ingredientes
 * getCalories: () => number
 * */

class Cake implements CakeRecipe {
    constructor(
        public flour: number,
        public chocolate: number,
        public egg: number,
        public milk: number
    ) {
    }

    getCalories(): number {
        return this.flour * this.chocolate * this.egg * this.milk;
    }
}

/**
 * Crie a classe CakeFactory
 * recipe: CakeRecipe
 * bakeCake: () => Cake
 * */

class CakeFactory {
    constructor(public recipe: CakeRecipe) {
    }

    bakeCake(): Cake {
        return new Cake(
            this.recipe.flour,
            this.recipe.chocolate,
            this.recipe.egg,
            this.recipe.milk,
        );
    }
}