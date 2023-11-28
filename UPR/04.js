function solve(input){
let movies = [];

    for(let command of input){
        if(command.includes('addMovie')){
         let filmName = command.split('addMovie ')[1];
         let movieObj = {name: filmName};
         movies.push(movieObj);

        }else if(command.includes('directedBy')){
            let [filmName, director] = command.split('directedBy');
            let movi = movies.find(movi => movi.name == filmName);

            if(movi){
             movi.director = director
            }
        }else if(command.includes('onDate')){
           let [filmName, date] = command.split(' onDate ');
           let movi = movies.find(movi => movi.name == filmName);
            if(movi){
                movi.date = date;
               }     
        }
      
    }
    for(let movie of movies){
        if(movie.name && movie.director && movie.date){
            console.log(JSON.stringify(movie));
        }
      }
}
solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
  ]
    )