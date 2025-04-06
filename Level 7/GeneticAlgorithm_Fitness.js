/*
    Description:

    In a genetic algorithm, a population is a collection of candidates that may evolve toward a better solution.

    We determine how close a chromosome is to a ideal solution by calculating its fitness. https://www.codewars.com/kata/567b468357ed7411be00004a/train You are given two parameters, the population containing all individuals and a function fitness that determines how close to the solution a chromosome is.

    Your task is to return a collection containing an object with the chromosome and the calculated fitness.

*/

/* Solution */

const mapPopulationFit = (population, fitness) => {
    let populationArray = []
    population.forEach((chromosome) => {
      populationArray.push({"chromosome": chromosome, "fitness": fitness(chromosome)})
    })
    
    return populationArray
  };