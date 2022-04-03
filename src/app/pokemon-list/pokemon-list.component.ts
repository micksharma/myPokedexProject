import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { PokemonDetail } from '../models/pokemon.detail';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {

  pokemons: PokemonDetail[] = [];
  page = 1;
  totalPokemons!: number;
  classicMode: boolean = true;

  constructor(
    private dataService: DataService,
    private bottomSheet: MatBottomSheet
  ) { }

  ngOnInit() {
   this.getPokemons();
  }

  getPokemons(){
    this.dataService.getPokemons(10, this.page + 0)
    .subscribe((response: any)=>{
      this.totalPokemons = response.count;
      response.results.forEach((result: any) => {
        this.dataService.getMoreData(result.name)
         .subscribe((uniqueResponse: any)=>{
           this.pokemons.push(uniqueResponse);
           console.log(this.pokemons);
         });
      });
    })
  }

  onDetail(pokemon: PokemonDetail): void {
    this.bottomSheet.open(PokemonDetailComponent, {
      data: {pokemon, classicMode: this.classicMode}
    })
  }

}
