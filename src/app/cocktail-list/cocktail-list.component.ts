import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../models/cocktail.models';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {
cocktails: Cocktail[]=[];

constructor(public cocktailService: CocktailService){
    
  }

ngOnInit(): void {
    this.cocktails = this.cocktailService.getCocktails();
  }

}
