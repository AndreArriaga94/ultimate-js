class Restaurants{

    static cantidad = 12;

    constructor(name){
        this.name = name;
    }

    getTimetable(){
        console.log('horario restaurante')
    }

    static getRestaurant(id){
        return new Restaurants('BBQ');
    }
}

// const r = new Restaurants();

const r = Restaurants.getRestaurant(12);

// const arr = new Array();
// Array.isArray();
// Array.from();
// Object.assign();