class Animal{

    constructor(name, legs){
        this.name = name
        this.legs = legs
    }

    //funktioner som tillhör en klass kallar man metoder
    //methods = functions belonging to a class
    speech(){
        let noise = ""
        
        if (this.name == "Dog")
        {noise = "Voff voff"}
        else if (this.name == "Cat")
        {noise = "Mjau"}

        return `${this.name} makes a noise.. ${noise}`
    }

    numberOfLegs(){
        return `This animal has ${this.legs} legs`
    }
}

class Bird extends Animal{
    constructor(legs)
    {
        super(legs)
    }
    
    fly()
    {
        console.log(`the ${Bird}flies`)
    }
}

const dog = new Animal("Dog", 4)
console.log(dog.speech())
console.log(dog.legs)
console.log(dog.numberOfLegs())

const cat = new Animal("Cat",3)
console.log(cat.speech())
console.log(cat.legs)
console.log(cat.numberOfLegs())

const bird = new Bird("Bird", 2)
console.log(bird.speech())
console.log()