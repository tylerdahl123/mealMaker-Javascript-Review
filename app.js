const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    get appetizers(){

    },
    set appetizers(appetizersIn){

    },
    get mains(){

    },
    set mains(mainsIn){

    },
     get desserts(){

    },
    set desserts(dessertsIn){

    },
    get courses(){
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },
    addDishToCourse(courseName, dishName, dishPrice){

    }
    }, 

