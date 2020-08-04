# Tipos

Vamos falar um pouco sobre tipos.

De forma geral a sintaxe dos tipos em typescript é assim:

```
    let myVariable: MyType;
```

A seguir alguns exemplos de tipos básicos retirados da [documentação oficial](https://www.typescriptlang.org/docs/handbook/basic-types.html).

####Boolean

```
let isDone: boolean = false;
```

####Number

```
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```

####String

String podem ser escritas tanto com " " quanto com ' '.


```
let color: string = "blue";
```

####Array

```
let list: number[] = [1, 2, 3];
```

ou

```
let list: Array<number> = [1, 2, 3];
```

Eu não curto essa segunda forma de escrever Array com generic. Evitem.

####Tuple

É uma forma chique de array com posições fixa e tipos definidos.

```
let x: [string, number];

x = ["hello", 10];
```

####Enum

Na documentação é ressaltada a capacidade de associar valores com números, mas também podemos guardar valores de string.

```
enum Color {Red, Green, Blue};

console.log(Color.Red); // log 0
```

Na declaração default todos os valores são associados com números começando de 0, mas podemos especificar os valores tanto com string quanto com number.

```
enum Color {Red='red', Green='green', Blue='blue'};
console.log(Color.Red); // log 'red'
```

Nós também podemos substituir os enums por union types:

```
let color: 'red' | 'green' | 'blue';
```

Não é a mesma coisa, mas pode ser usado para um propósito semelhante.

####Any

Não deveria ser usado, representa qualquer coisa. Se você está usando provavelmente você deveria usar direto Javascript.

####Void

Representa uma variável sem retorno. Na verdade para variáveis é meio inútil, pois só pode guardar o valor null. 

É mais útil para identificar que uma função não possui retorno.

```
function warnUser(): void {
    console.log("This is my warning message");
}
```

####Generics

Em typescript nós também podemos criar classes e funções com tipo 'generic', como nos arrays e observables.

Basicamente é algo que precisa de uma "dica" de qual tipo ele lida.

```
function identity<T>(arg: T): T {
    return arg;
}

let explicit = identity<string>('Picles'); // explícito
let implicit = identity('Picles') // implícito
```

Agora vamos por a mão na massa no arquivo `app.ts`.