class A {
    // Setting this to private will cause class B to have a compile error
    public x: string = 'a';
}

class B extends A {
    // constructor(){super();}
    method():string {
        console.log(this.x);
        return this.x;
    }
}

var b:B = new B();
console.log(b.method());