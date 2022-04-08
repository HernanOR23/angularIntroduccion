import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent{

  heroes: string []= ['spider','hulk','thor','capi'] 
  heroeBorrado:string  ='';

  borrarHeroes(){
    this.heroeBorrado= this.heroes.shift()||'';
    
}
}
