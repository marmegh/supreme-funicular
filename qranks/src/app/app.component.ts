import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  quotes: Array<Quote>;
  new_quote: Quote;
  
  constructor(){}

  ngOnInit(){
    this.title = "Quote Ranks Assignment"
    this.quotes = [{
      text:"Insanity: Doing the same thing over and over again, expecting a different result.", 
      author: "Unknown (but definitely not any of the people you originally thought", 
      votes: 0}]
    this.new_quote = new Quote();
  }
  create_quote(new_quote: Quote){
    // this.quotes.push(new_quote);
    // new_quote = new Quote;
    console.log(new_quote);
  }
  upVote(old_quote: Quote){
    old_quote.votes++;
  }
  downVote(old_quote: Quote){
    old_quote.votes--;
  }
  delete(old_quote: Quote){
    let found = false;
    if(this.quotes.length == 1)
    {
      this.quotes.length = 0;
    }
    for(let i = 0; i < this.quotes.length -1; i++)
    {      
      if(this.quotes[i].author == old_quote.author && this.quotes[i].text == old_quote.text && this.quotes[i].votes == old_quote.votes)
      {
        found = true;
      }
      if(found = true)
      {
        this.quotes[i] = this.quotes[i+1];
      }
    }
    this.quotes.length-1;
  }
}
