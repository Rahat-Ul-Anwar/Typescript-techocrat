
type MandatoryInterface {
    name: string;
    age: number;
    salary: number
}


const addMeToMyCrushMind = <T extends MandatoryInterface>(myInfo: T) => {
    const crush = 'kate Winslate';
    const newData = { ...myInfo, crush };
    return newData;

}

type MyInfoType = {
    name: string,
    age: number,
    salary: number,
    wife: boolean,
    other: null
}
const myInfo :MyInfoType = {
    name: "Kate",
    age: 28,
    salary: 1000000,
    wife: true,
    other:null
}
const result5 = addMeToMyCrushMind<MyInfoType>(myInfo);
const result6 = addMeToMyCrushMind({ monerKhusi: "hashi khushi" });



console.log(result5);