import { SelectorContext } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
    selector : 'app-contador',
    template : `<h1>{{title}}</h1>

            <h1>la base es<strong>{{base}}</strong></h1>

            <button (click)="acomulador(base)"> +{{base}}</button>

            <span>{{numero}}</span>

            <button (click)="acomulador(-1 * base)"> -{{base}}</button>
    ` 
})

export class ContadorComponent{
    title:string = 'contador';
    numero:number=10;
  
    base:number = 5;
    acomulador(valor: number){
      this.numero = this.numero + valor;
    
    }

}