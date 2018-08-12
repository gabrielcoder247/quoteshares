export class Quote {
    
    constructor(public id:number, public name:string,public author:string,
        public upvotes:number,public downvotes:number,
        public quotestr:string,public timePosted:Date){



       this.name=''
       this.author=''
       this.quotestr=''
       this.upvotes=0
       this.downvotes=0
       this.timePosted= new Date()     

    }
}
