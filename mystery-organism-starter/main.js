// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAeqourFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      const dnaArray = this.dna;
      //console.log(dnaArray);
      const randIndex = Math.floor(Math.random() * 15);
      //console.log(randIndex);
      let baseAtIndex = dnaArray[randIndex];
      //console.log(baseAtIndex);
      let randBase = returnRandBase();
      //console.log(randBase);
      dnaArray[randIndex] = randBase;
      
      while (randBase === baseAtIndex) {
        returnRandBase();
        randBase = returnRandBase();
          //console.log(randBase);
        dnaArray[randIndex] = randBase;  
      }
      this.dna = dnaArray;
      //console.log(this.dna[randIndex]);
      return this.dna;
    },
    compareDNA(species) {
      let counter = 0;
      //console.log(this.dna);
      //console.log(species.dna);
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === species.dna[i]) {
          counter++;
        }
      }
      //console.log(counter);
      const commonPercentage = ((counter / 15) * 100).toFixed(1);
      return `Specimen ${this.specimenNum} and specimen ${species.specimenNum} have dna that is ${commonPercentage} in common.`;
    },

    willLikelySurvive() {
      //console.log(this.dna);
      let counter = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C') counter++;
        else if (this.dna[i] === 'G') counter++;
      } 
      //console.log(counter);
      if ((counter / 15 * 100) >= 60) return true; 
      else return false;
    } 

  }
}

const createSurvivors = () => {
  let survivors = [];
  let unsurvivors = [];
  let index = 1;
  
  let spec = pAeqourFactory(index, mockUpStrand());
  while (survivors.length < 30) {
    //console.log(spec);
    if (spec.willLikelySurvive() === false) {
      unsurvivors.push(spec);
    } else if (spec.willLikelySurvive() === true) {
      survivors.push(spec);
      index++
    }
    spec = pAeqourFactory(index, mockUpStrand());
  }
  return survivors;
}


console.log(createSurvivors());
// console.log(species1);
//const species2 = pAeqourFactory(2, mockUpStrand());
//console.log(species2.willLikelySurvive());
//console.log(pAeqourFactory(1, mockUpStrand()));

/* 
If you’d like to challenge yourself further, you could consider the following:

Create a .complementStrand() method to the factory function’s object that returns the complementary DNA strand. The rules are that 'A's match with 'T's and vice versa. Also, 'C's match with 'G's and vice versa. (Check the hint for more details)
Use the .compareDNA() to find the two most related instances of pAequor.
*/