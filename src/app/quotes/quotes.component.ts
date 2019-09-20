import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  pgTitle: string = 'This is my Quotes Project'

  constructor() { }

  ngOnInit() {
  }

}
