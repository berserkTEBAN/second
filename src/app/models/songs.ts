export class Songs {
    constructor(
        public id: string, // Cambia el tipo de 'id' a string
        public title: string,
        public artist: string,
        public album: string,
        public releaseYear: number,
        public description: string,
        public genre: number
    ) {}
}
