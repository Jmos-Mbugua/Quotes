export class Quotes {
    constructor(
        public id: number, public name: string, 
        public author: string, public quote: string, 
        public mdate: Date, public upvotes: number, 
        public downvotes: number ){}
}
