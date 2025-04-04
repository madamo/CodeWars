/*
    Description:

    Mutation is a genetic operator used to maintain genetic diversity from one generation of a population of genetic algorithm chromosomes to the next.

    Mutation

    A mutation here may happen on zero or more positions in a chromosome. It is going to check every position and by a given probability it will decide if a mutation will occur.

    A mutation is the change from 0 to 1 or from 1 to 0.


*/

/* Solution */

const mutate = (chromosome, p) => {
    if (p === 0) {
      return chromosome;
    }
    
    let mutated = ""
  
    if (p === 1) {
      for (let i = 0; i < chromosome.length; i++) {
        if (chromosome[i] === "0") {
          mutated += "1"
        } else {
          mutated += "0"
        }
      }
      return mutated
    }
    
    for (let i = 0; i < chromosome.length; i++ ) {
      let chance = Math.random() 
      if (chance >= p) {
        if (chromosome[i] === "0") {
          mutated += "1"
        } else {
          mutated += "0"
        }
      } else if (chance <= p) {
        mutated += chromosome[i]
      }
    }
    
    return mutated
  
  };