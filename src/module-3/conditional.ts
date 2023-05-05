// a type is dependent on another type

// type a1 = number;

// type a2 = a1 extends string ? string : null

//*****************nested conditional type

type a1 = number;
type a2 = undefined;
type a3 = number;

type d = a1 extends null ? null : a2 extends number ? number : a3 extends null ? null : never;

type Sheikh = {
    wife1: string;
    wife2: string;
}

type CheckProperty<T, K> = K extends keyof Sheikh ? true : false;

type CheckWife1 = CheckProperty<Sheikh, 'wife2'>;

//another example

type Bandhubi = 'Monika' | 'Rachel' | 'Pheobe';

type RemoveBandhubi<T, K> = T extends K ? never : T;

type CurrentBandhubi = RemoveBandhubi<Bandhubi, "Monika">;



