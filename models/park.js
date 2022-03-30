const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
}

Park.prototype.addDinosaur = function (dinosaur){
    this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur){
    const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(indexOfDinosaur, 1);
}

Park.prototype.getMostPopular = function(dinosaurs){
   let mostPopular = dinosaurs[0]
   for (let dino of dinosaurs){
       if (mostPopular.guestsAttractedPerDay < dino.guestsAttractedPerDay){
           mostPopular = dino
       }
   } return mostPopular;
}

Park.prototype.getDinoBySpecies = function(species, dinosaurs){
    let foundDinos = [];
    for (let dino of dinosaurs){
        if (species === dino.species){
            foundDinos.push(dino);
        } 
    } return foundDinos;
}

Park.prototype.getTotalVisitors = function(){
    let totalVisitors = 0;
    for (dino of this.dinosaurs){
        totalVisitors += dino.guestsAttractedPerDay;
    } return totalVisitors
};

Park.prototype.getTotalVisitorsPerYear = function(){
    let visitorsPerDay = this.getTotalVisitors();
    let visitorsPerYear = visitorsPerDay * 365;
    return visitorsPerYear;
}

Park.prototype.getAnnualRevenue = function(){
    let totalVisitors = this.getTotalVisitorsPerYear();
    let annualRevenue = totalVisitors * this.ticketPrice;
    return annualRevenue;
};

Park.prototype.removeDinosBySpecies = function(species){
    for (let i=this.dinosaurs.length-1; i >=0; i--){
        if (this.dinosaurs[i].species === species){
            this.dinosaurs.splice(i, 1);
        }
    }
};

Park.prototype.countByDiet = function(){
    let counter = {
        carnivore : 0,
        herbivore : 0,
        omnivore : 0
    };

    for (let i=0; i < this.dinosaurs.length; i++){
        if (this.dinosaurs[i].diet === 'carnivore'){
            counter.carnivore += 1;
        } else if (this.dinosaurs[i].diet === 'herbivore'){
            counter.herbivore += 1;
        } else {
            counter.omnivore += 1;
        }
    } return counter;
}




module.exports = Park;

