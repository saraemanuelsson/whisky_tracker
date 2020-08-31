export interface Whisky {
    name: String;
    year: number;
    distillery: Distillery;
    tried: Boolean;
    starred: Boolean;
    inCupboard: Boolean;
    notes: String;
    person: number;
    id: number;
}

export interface Distillery {
    name: String;
    location: String;
    region: String;
    image: String;
    whiskies: Whisky[];
    visited: Boolean;
    starred: Boolean;
    id: number;
}

export interface Person {
    name: String;
    whiskies: Whisky[];
    id: number;
}