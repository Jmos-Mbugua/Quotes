
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';



@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes[]=[
    new Quotes(1, 'John Doe', 'Believer', 'Create the highest, grandest vision possible for your life, because you become what you believe', new Date(2019, 9, 23), 0, 0),
    new Quotes(1, 'John Doe', 'Believer', 'Create the highest, grandest vision possible for your life, because you become what you believe', new Date(2019, 6, 34), 0, 0),

  ];
  constructor() { }

  ngOnInit() {
  }
  addNewQuote(quote){
    let qouteLength = this.quotes.length;
    quote.id = qouteLength+1;
    quote.name = quote.name;
    quote.quote = quote.quote;
    quote.author = quote.author;
    quote.mdate = new Date(quote.mdate)
    this.quotes.push(quote)
  }
  thumbsUp(quote) {
    quote.upvotes = quote.upvotes + 1; 
  }
  thumbsDown(quote){
    quote.downvotes = quote.downvotes + 1;
  }

  deleteQuote(isComplete, index){
    const confirmComplete = confirm('Are you sure you want to delete this quote?');
    if(confirmComplete && isComplete  ){
      this.quotes.splice(index, 1);
    }

  }

}


