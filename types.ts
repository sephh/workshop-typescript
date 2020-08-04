/**
 * Crie um Enum Genius que guarda os seguintes valores 'gincobiloba', 'lavitan' e 'opti-memory'.
 */

enum Genius {
    Gincobiloba = 'gincobiloba',
    Lavitan = 'lavitan',
    OptiMemory = 'opti-memory',
}


/**
 * Crie uma função que retorna um valor do tipo Genius.
 */

function getGincobiloba(): Genius {
    return Genius.Gincobiloba;
}

/**
 * Crie uma classe Pickles de um tipo generics com os seguintes campos
 * private x: T
 * private y: U
 * tuple: () => [T, U]
 * length: () => number // retorna o length de y que é um número
 * */

class Pickles<T, U extends { length: number }> {
    constructor(private x: T, private y: U) {
    }

    tuple(): [T, U] {
        return [this.x, this.y];
    }

    length(): number {
        return this.y.length;
    }
}

/**
 * Crie um instância de Pickles e log os resultados das funções tuple e length
 * */

const pickles = new Pickles(20, {length: 200});

console.log(pickles.tuple());
console.log(pickles.length());