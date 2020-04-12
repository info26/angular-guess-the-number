import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { GuessService } from './../guessService.service';
//import { AlreadyGuessed } from './../already-guessed.directive'


function AlreadyGuessed(GuessService:GuessService)  {
  return (control: AbstractControl) => {
    console.log(control);
    if (GuessService.containsGuess(control.value)) {
      return { 'alreadyGuessed': true };
    }
    console.log(GuessService.getGuesses(), control.value)
    return null;
  }
}
@Component({
  selector: 'app-guess-form',
  templateUrl: './guess-form.component.html',
  styleUrls: ['./guess-form.component.css']
})



export class GuessFormComponent implements OnInit {
  @Output() newGuess: EventEmitter<number> = new EventEmitter();

  constructor(private guessService: GuessService) { }

  ngOnInit(): void {

  };

  guessForm = new FormGroup({
    guessControl: new FormControl("", [
      Validators.pattern("^[0-9]*$"),
      Validators.required,
      AlreadyGuessed(this.guessService)
    ])
  });
  //submitted = false;
  onSubmit() {
    if (this.guessForm.valid) {
      this.newGuess.emit(this.guessForm.controls.guessControl.value);
      this.guessForm.reset();
    } else {
      alert("that was clever, but nice try. ")
    }
    //this.submitted = true;
    //$event.preventDefault();
  }
}

