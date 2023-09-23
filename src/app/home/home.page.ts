import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor( private pkService:PokemonService) {}

  ngOnInit():void{
    this.pkService.getCharacters().subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

}
