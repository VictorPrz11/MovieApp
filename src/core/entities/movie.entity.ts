
//interface contiene todos las propiedades de un objeto
export interface Movies {
    id: number,
    title: string,
    description: string,
    realeaseDate: Date,
    rating: number,
    poster: string,
    backDrop: string
}

export interface FullMovie extends Movies {
    genres: string[],
    duration: number,
    budget: number,
    originalTitle: string,
    productionCompanie: string[]
}
