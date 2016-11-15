import { Component, OnInit } from '@angular/core';
import { TwainService } from './twain.service';

@Component({
  selector: 'twain-quote',
  template: '<p class="twain"><i>{{quote}}</i></p>'
})
export class TwainComponent  implements OnInit {
  intervalId: number;
  quote: string = '...';
  constructor(private twainService: TwainService) { }

  ngOnInit(): void {
    this.twainService.getQuote().then((quote: string) => this.quote = quote);
  }
}
