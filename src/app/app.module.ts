import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesNavbarComponent } from './quotes-navbar/quotes-navbar.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { DatecountPipe } from './datecount.pipe';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuotesNavbarComponent,    
    QuotesFormComponent, DatecountPipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
