import { Component, OnInit } from '@angular/core';
import { GuessService } from './../guessService.service';

@Component({
  selector: 'app-guess-the-number',
  templateUrl: './guess-the-number.component.html',
  styleUrls: ['./guess-the-number.component.css']
})
export class GuessTheNumberComponent {
  deviation: number;
  noOfTries: number;
  original: number;
  guess: number;

  constructor(
    private guessService: GuessService
  ) {
    this.initializeGame(0);
  }
  initializeGame(type) {
    this.noOfTries = 0;
    this.original = Math.floor((Math.random() * 1000) + 1);
    this.guess = null;
    this.deviation = null;
    if (type == 1) {
      alert("Ok! Reset the game. ");
    }
    
  }
  handleGuess($event) {
    this.deviation = this.original - $event;
    this.noOfTries = this.noOfTries + 1;
    this.guessService.addGuess($event);
  }
}