import { Injectable } from '@angular/core';

@Injectable()
export class GuessService {
  guesses = [];

  addGuess(Guess) {
    this.guesses.push(Guess);
  }

  getGuesses() {
    return this.guesses;
  }

  clearGuesses() {
    this.guesses = [];
    return this.guesses;
  }

  containsGuess(guessval) {
    return this.guesses.includes(guessval)
  }
}