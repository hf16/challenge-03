//NOMOR 1
function Ship(draft, crew){
    this.draft = draft
    this.crew = crew

    this.hasil = function(){
        let rumusHasil = this.draft -  (this.crew *1.5)
        console.log("Total Perhitingan Draft: "+ rumusHasil)
        if (rumusHasil > 20) {
            return "Banyak Nih Muatan Kapalnya"
        } 
        
        return "Lebih Bnayak Muatan Orangnya"
        
    }
}
var emptyShip = new Ship(51, 20)
console.log(emptyShip.hasil())



//NOMOR 2
class Animal {
    constructor(name, age, legs, species, status) {
      this.name = name;
      this.age = age;
      this.legs = legs;
      this.species = species;
      this.status = status;
    }
    introduce() {
     
      return `nama ${this.name}, umur ${this.age}, kaki ${this.legs}, spesies ${this.species}, status ${this.status}`;
    }
  }
  
  class Shark extends Animal {
    constructor(name, age, status) {
      super(name, age, 0, 'shark', status);
    }
  }
  
  class Cat extends Animal {
    constructor(name, age, status) {
      super(name, age, 4, 'cat', status);
    }
  }
  
  class Dog extends Animal {
    constructor(name, age, status, master) {
      super(name, age, 4, 'dog', status);
      this.master = master;
    }
    greetMaster() {
      return `Hello ${this.master}`;
    }
  }
  
  const hiu = new Shark('Hiu', 10, 'Berenang').introduce()
  const kucing = new Cat('Kucing', 3, 'Berjalan').introduce()
  const anjing = new Dog('anjing', 5, 'berjalan','Helmi').greetMaster()
  // console.log(hiu);
 




    


