import { Injectable } from  '@angular/core';
import { Cocktail } from './models/cocktail.models';

@Injectable({
        providedIn:  'root'
})

export  class  CocktailService {

        constructor() { }

        public  getCocktails() {
            let cocktailList: Cocktail[] = [
                new Cocktail('Mojito', 10, 'https://www.thecocktaildb.com/images/media/drink/vqwvxr1504817077.jpg'),
                new Cocktail('Mojito2', 100, 'https://www.thecocktaildb.com/images/media/drink/vqwvxr1504817077.jpg'),
                new Cocktail('Mojito3', 1000, 'https://www.thecocktaildb.com/images/media/drink/vqwvxr1504817077.jpg'),];
           
                return cocktailList;
        }

}