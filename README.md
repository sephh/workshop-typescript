# Classes

Nós já implementamos algumas classes antes de chegar nesse tópico, mas vamos nos aprofundar mais no assunto.

#### Herança

Usado para reaproveitar um comportamento compartilhado entre várias outras classes.

```
class Animal {
    eat() {
        console.log('eating...');
    }
}

class Pony extends Animal {
    run() {
        console.log('running...');
    }
}

class Dog extends Animal {
    bark() {
        console.log('barking...');
    }
}
```

#### Super


```
class Animal {
    name:string;

    constructor(name:string) {
        this.name = name;
    }
    
    eat() {
        console.log('eating...');
    }
}

class Pony extends Animal {
    hasRibbon: boolean;
    
    constructor(name:string, hasRibbon:boolean) {
        super(name);
        this.hasRibbon = hasRibbon;
    }
    
    run() {
        console.log('running...');
    }
}

class Dog extends Animal {
    hasCollar: boolean;

    constructor(name:string, hasCollar:boolean) {
        super(name);
        this.hasCollar = hasCollar;
    }
    
    eat() {
        super.eat();
        console.log('like a dog...')
    }

    bark() {
        console.log('barking...');
    }
}
```

#### Private, Protected, Public e Readonly

```
class Food {
    readonly calories: number = 1000; // somente leitura, deve ser inicializada na declaração ou no construtor
    public name: string = 'Picles'; // acessado através da instância
    private price: number = 10; // acessado dentro da classe Food
    protected taste: string = 'Delicious'; // acessado dentro da classe Food e suas subclasses (quem herdar)
}

const picles = new Food();

console.log(picles.name);
console.log(picles.price); // vai dar erro
console.log(picles.taste); // vai dar erro
picles.calories = 20; // vai dar erro
```

#### Get e Set

```
class User {
    private _fullName;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(fullName: string) {
        this._fullName = `Sr(a) ${fullName}`;
    }
}

const user = new User();
user.fullName = 'Picles';
console.log(user.fullName);
```

#### Static

Propriedades `static` são membros da classe e não de sua instância, ou seja, podemos acessar seus valores sem ter que instanciar um objeto.

Por conta disso não podemos acessar membros da instância da classe.

```
class Example{
    static StaticValue = 'Picles';
}

console.log(Example.StaticValue);
```

#### Abstract

As classes abstratas servem de base para outras classes e não podem ser instanciadas. 

Elas tem um propósito muito parecido com o das interfaces, porém, podemos fazer implementações nelas.

```
abstract class BaseUser {
    name: string;
    lastName: string;

    constructor(name:string, lastName:string) {
        this.name = name;
        this.lastName = lastName;
    }

    get fullName(): string {
        return `${this.name} ${this.lastName}`
    }

    abstract logUser(): void;
}

class User extends BaseUser{
    logUser(): void {
        console.log('O nome do usuário é: ', this.fullName);
    }
}

const baseUser = new BaseUser('Picles', 'Silva'); // Cannot create an instance of an abstract class.
const user = new User('Picles', 'Silva');
user.logUser();
```