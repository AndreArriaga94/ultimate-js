class Restaurants{
    #timetable;

    constructor(name){
        this.name = name;
    }

    get timetable(){
        return this.#timetable;
    }

    set timetable(value){
        let date = new Date(value); 
        let time = date.getTime();
        if (Number.isNaN(time)){
            throw new Error('fecha invalida');
        }
        this.#timetable = date;
    }
}

const r = new Restaurants('BBQ');

// r.setTimetable('1 feb 1986');