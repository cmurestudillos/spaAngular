import { Injectable } from '@angular/core';
import * as data from '../data/data.json';
import { Heroe } from '../models/heroe';

@Injectable()
export class HeroesService{

    heroes:Heroe[] = (data as any).default;

    constructor() {
        console.log("Servicio 'HeroesService' listo para usar.");
    }

    // Obtenemos Heroes
    getHeroes(){
        return this.heroes;
    }
    // Obtenemos los datos del heroe seleccionado
    getHeroe(index:string){
        return this.heroes[index];
    }

    // Funcion para el buscador
    buscarHeroes( palabra:string ){
        let heroesArray:Heroe[] = [];
        palabra = palabra.toLocaleLowerCase();

        for (let i = 0; i < this.heroes.length; i++) {
            let heroe = this.heroes[i];

            let nombre = heroe.nombre.toLocaleLowerCase();
            if(nombre.indexOf(palabra) >= 0){
                heroe.index = i;
                heroesArray.push(heroe);
            }
        }

        return heroesArray;
    }

}