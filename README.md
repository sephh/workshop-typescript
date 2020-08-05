# Decorators

Decorator é uma feature sensacional que serve para modificar o comportamento de classes e métodos, por exemplo.

Para quem usa Angular isso faz parte do dia a dia, mesmo que muitos não percebam. 

O Angular usa decorators para receber alguns metadatas que auxiliam na construção dos seus componentes, o @Component. Esse é só um exemplo, mas ainda temos o @NgModule, o @Injectable e etc.

Então vamos falar dessa funcionalidade incrível, mas subutilizada.

#### Config

Para utilizar `decorators` precisamos atualizar nosso `tsconfig.json` e inserir a propriedade `"experimentalDecorators": true`, no `compilerOptions`.

#### Métodos

```
const MethodDecorator = () => {
    console.log("MethodDecorator evaluated");

    return function(target, name: string, descriptor: PropertyDescriptor) {
        const method = descriptor.value

        descriptor.value =  (...args) => {
            console.log('MethodDecorator called: ', name);
            return method.apply(target, args);
        }
    };
}

class MyClass {
    @MethodDecorator()
    myMethod(picles) {
        console.log(picles);
    }
}
```

#### Classes

```
@ClassDecorator({jesus: 'OMG'})
class MyClass {
    jesus;

    @MethodDecorator()
    myMethod(picles) {
        console.log(this.jesus, picles);
    }
}
```





