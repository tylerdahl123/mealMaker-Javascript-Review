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
            const dish = {
                name: dishName,
                price: dishPrice
            };
           return this._courses[courseName].push(dish);
        },

    getRandomDishFromCourse: function (courseName){
        const dishes = this._courses[courseName]
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal: function(){
        let appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('main');
        const dessert = this.getRandomDishFromCourse('dessert');
        const totalPrice = appetizer.price + main.price;

        return ` Your meal contains ${appetizer.name}, ${main.name}, ${dessert.name} for a total price of $ ${totalPrice}`
    },
    
    };

    menu.addDishToCourse('appetizers', 'potato skins', '$4.25');
    menu.addDishToCourse('appetizers', 'salad', '$4.25');
    menu.addDishToCourse('appetizers', 'chips', '$4.25');
    menu.addDishToCourse('mains', 'borger', '$7.25');
    menu.addDishToCourse('mains', 'tacos', '$6.25');
    menu.addDishToCourse('desserts', 'peacan pie', '$3.25');

    const meal = menu.generateRandomMeal();
    console.log(meal);