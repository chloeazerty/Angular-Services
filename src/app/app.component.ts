import { Component } from '@angular/core';
import { CocktailService } from './cocktail.service';
import { Cocktail} from './models/cocktail.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cocktail-service';


}
