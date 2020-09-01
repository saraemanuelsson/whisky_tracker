export interface Whisky {
    [key: string]: any;
    name: string;
    year: number;
    distillery: Distillery;
    tried: Boolean;
    starred: Boolean;
    inCupboard: Boolean;
    notes: string;
    person: number;
    id: number;
}

export interface Distillery {
    [key: string]: any;
    name: string;
    location: string;
    region: string;
    image: string;
    whiskies: Whisky[];
    visited: Boolean;
    starred: Boolean;
    id: number;
}

export interface Person {
    [key: string]: any;
    name: string;
    whiskies: Whisky[];
    id: number;
}