
// type NoobDeveloper = {
//     name: string;
// };

// type JuniorDeveloper = {
//     name: string,
//     expertise: string,
//     experience: number
// };

// const newDeveloper: NoobDeveloper | JuniorDeveloper = {

//     name: "Moznu Mia",
//     expertise: 'JavaScript',
//     experience: 6,

//  }
type NoobDeveloper = {
    name: string;
};
type JuniorDeveloper = NoobDeveloper & {

    expertise: string,
    experience: number
};

enum Level {
    junior = "junior",
    mid = "mid",
    senior ="senior"
    
}

type NextLavelDeveloper = JuniorDeveloper & {
    leadershipExperience: 1,
    level: Level
}


const newDeveloper: NoobDeveloper | JuniorDeveloper = {

    name: "Moznu Mia",
    expertise: 'JavaScript',
    experience: 6,

}


const developer:NextLavelDeveloper = {
    name: 'Next Bhai',
    expertise: "TypeScript",
    experience: 2,
    leadershipExperience: 1,
    level: Level.senior
}



