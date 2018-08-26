import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote'




@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:any = [
    new Quote(1,'Watch Finding Nemo','play footabll',12,5, 'eefef',new Date(2018,3,14)),
    new Quote(2,'Buy Cookies', 'watch movies', 34,34,'kbkfj fj',new Date(2018,3,14)),
  
    

]
addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id=quoteLength+1;
  quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quote)

}


  constructor() { }

  ngOnInit() {
    
    }
    getQuotes(newwQuote){
      this.quotes.push(newwQuote)
    }
    upvote(i){
      this.quotes[i].upvotes+=1
    }
    downvote(i){
      this.quotes[i].downvotes+=1
    }
    deleteQuote(i){
      if ( confirm("Are you sure you want to delete the quote?")){
          this.quotes.splice(i,1)
      }
    }
    public getVotes(i){
      return this.quotes[i].upvotes-this.quotes[i].downvotes
    }
    getHigh(){
      var highestUpvotes = this.quotes.reduce(function(l, e) {
        return e.upvotes > l.upvotes ? e : l;
    })
    return highestUpvotes.upvotes
  }
  
  }