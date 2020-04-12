import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';


import { GuessTheNumberComponent } from './guess-the-number/guess-the-number.component';
import { AppRootComponent } from './app-root/app-root.component';
import { GuessFormComponent } from './guess-form/guess-form.component';
import { GuessService } from './guessService.service';
import { GuessListComponent } from './guess-list/guess-list.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [ GuessTheNumberComponent, AppRootComponent, GuessFormComponent, GuessListComponent ],
    bootstrap:    [ AppRootComponent ],
    providers: [GuessService]
})

export class AppModule { }