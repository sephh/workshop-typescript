/**
 * Crie a class User com os seguintes atributos
 * readonly id // Math.random().toString(36).substr(2, 9)
 * private _name:string
 * private _lastName:string
 * set name
 * set lastName
 * static Title:string
 * get fullName:string // concatene o Title com _name e _lastName
 * logFullName():void; // loga o id e o nome do usuário
 * * */

class User {

    static Title: string = 'Sr(a)';

    readonly id: string;

    private _name: string;
    private _lastName: string;

    constructor() {
        this.id = Math.random().toString(36).substr(2, 9);
    }

    set name(name: string) {
        this._name = name;
    }

    set lastName(lastName: string) {
        this._lastName = lastName;
    }

    get fullName(): string {
        return `${User.Title} ${this._name} ${this._lastName}`;
    }

    logFullName(){
        console.log(`Usuário ${this.id}: ${this.fullName}`);
    }

}
