const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
  get appetizers(){
    return this._courses.appetizers;
  },
  get mains(){
    return this._courses.mains;
  },
  get desserts(){
    return this._courses.desserts;
  },
  set appetizers(data){
    this._courses.appetizers = data;
  },
  set mains(data){
    this._courses.mains = data;
  },
  set appetizers(data){
    this._courses.mains = data;
  },
  get courses(){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName){
  const dishes= this._courses[courseName];
  const randomIndex = Math.floor(Math.random() * dishes.length);
  return dishes[randomIndex];
  },
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}, and the total price is ${totalPrice}.`
  }
  };
  
  menu.addDishToCourse('appetizers', 'salad', 4.00);
  menu.addDishToCourse('appetizers', 'wings', 3.00);
  menu.addDishToCourse('appetizers', 'fries', 5.00);
  
  
  menu.addDishToCourse('mains', 'steak', 10.25);
  menu.addDishToCourse('mains', 'salmon', 7.25);
  menu.addDishToCourse('mains', 'tofu', 11.20);
  
  menu.addDishToCourse('desserts', 'cake', 3.00);
  menu.addDishToCourse('mains', 'coffee', 2.50);
  menu.addDishToCourse('mains', 'flan', 3.50);
  
  const meal = menu.generateRandomMeal();
  console.log(meal);
  