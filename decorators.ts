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

// example.log('Gincobiloba');

/**
 * Crie uma validação de atributos utilizando os decorators required e validate
 * */

const requiredFieldsKey = 'requiredFields';

const defineRequiredFields = (target, propName: string) => {
    if (Reflect.has(target, requiredFieldsKey)) {
        const descriptor = Object.getOwnPropertyDescriptor(target, requiredFieldsKey);

        descriptor.value[propName] = false
    } else {
        Object.defineProperty(target, requiredFieldsKey, {
            value: {
                [propName]: false
            }
        });
    }
}

const required = (target, propName: string) => {
    let value;

    defineRequiredFields(target, propName);

    Object.defineProperty(target, propName, {
        get() {
            return value;
        },
        set(v: any) {
            value = v;
            this[requiredFieldsKey][propName] = !!(value);
        },
    });
}

const validate = (target, propName: string, descriptor: PropertyDescriptor) => {
    const method = descriptor.value;

    descriptor.value = function (...args) {
        const fieldsToValidate = this[requiredFieldsKey];

        if (Object.values(fieldsToValidate).some(v => !v)) {
            const invalidFields: string[] = [];

            for (let key in fieldsToValidate) {
                !fieldsToValidate[key] && invalidFields.push(key);
            }

            console.error(`Please, fill all required fields: ${invalidFields.join(', ')}`);
        } else {
            method.apply(this, args);
        }
    }
}

class UserForm {
    @required
    name: string;

    @required
    lastName: string;

    @validate
    submit() {
        console.log('It\'s valid!!!', this.name, this.lastName);
    }
}

const form = new UserForm();
// form.name = 'Picles';
// form.lastName = 'Silva';
form.submit();