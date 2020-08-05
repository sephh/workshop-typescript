/**
 * Crie o decorator ExecuteFourTimes
 * Quando o método for executado, execute ele 4 vezes
 * */

const ExecuteFourTimes = (target, name: string, descriptor: PropertyDescriptor) => {
    const method = descriptor.value;

    descriptor.value = function (...args) {
        const arr = [...new Array(4)];
        arr.forEach((_, i) => {
            method.apply(this, args);
        });
    }
}


class Example {
    @ExecuteFourTimes
    log(arg) {
        console.log('Picles', arg);
    }
}

const example = new Example();

example.log('Gincobiloba');