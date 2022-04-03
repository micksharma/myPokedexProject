import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonDetail } from "../models/pokemon.detail";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getPokemons(limit: number, offset: number){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  }


  getMoreData(name: string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  getPokemonDetail(pokemon: number | string): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>('https://pokeapi.co/api/v2/pokemon/' + pokemon);
}
}
