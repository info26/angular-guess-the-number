import { Component, OnInit } from '@angular/core';

import { GuessService } from './../guessService.service';

@Component({
  selector: 'app-guess-list',
  templateUrl: './guess-list.component.html',
  styleUrls: ['./guess-list.component.css']
})
export class GuessListComponent implements OnInit {

  constructor(private guessService: GuessService) { }

  ngOnInit() {
  }
  guesses = this.guessService.getGuesses();

}