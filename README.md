# Interfaces

Javascript é muito bom em usar qualquer atributo de um objeto. 

Como podemos deixar explícito esse atributo em determinado objeto?

Interfaces ao resgate.

As interfaces são indicadas para definir os "tipos virtuais", pois quando o código é transpilado elas simplesmente são removida. 

Como Javascript não é tipado elas não fazem parte do bundle, já as classes são estruturas que existem no Javascript e fazem parte do bundle.

Por isso se você só está criando uma classe para definir quais campos existem nela, considere usar interface.

#### Sintaxe

```
interface Pickles{
    taste: string;
    calories?: number; 
    price: number;
    sell: () => void;
}
```

#### Garantindo campos em uma classe

```
class Good implements Pickles{
    taste: string;
    price: number;

    sell(){
        console.log(`Mercadoria ${this.taste} vendida por ${this.price}`)
    }
}
```

#### Usando como tipo

```
let picles: Pickles = new Good();
let picles2: Pickles = {taste: 'Delicioso', price:10, sell(){}};
```

## Type

Typescript também tem um cara esquisito que é o `type`, parece muito com interface, mas tem casos de uso limitado. 

Eu realmente uso em situações muito específicas.

Você pode usar para definir um tipo igual interface, mas a sintace é meio confusa, parece que você está setando valor e não definido um modelo.

Veja o exemplo:

```
type Pickles = {
    taste: string;
    price: number;
    sell: () => void;
}
```

Aquele "=" é meio esquisito, talvez por isso se veja pouca implementação desse jeito. Podemos utilizá-lo do mesmo jeito de uma interface.

Em quais ocasiões eu costumo usar?

#### União entre tipos

```
interface A {
    taste: string;
    price: number;
}

interface B {
    sell: () => void;
}

type Pickles = A & B;
```

Dessa forma criamos um novo tipo que tem todas as propriedades de A e B.

#### Intersecção entre tipos

```
interface A {
    taste: string;
    price: number;
}

interface B {
    taste: string;
    sell: () => void;
}

type Pickles = A | B;
```

Dessa forma criamos um novo tipo que tem apenas as propriedades comuns em A e B. Nesse caso "taste".

