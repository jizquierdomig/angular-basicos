import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {
  heroes:string[]=['Spiderman','Troman','Hulk','Thor'];
  heroeBorrado:string='';

  borrarHeroe(){
    console.log("Borrando...");
    //this.heroes =[];
    this.heroeBorrado=this.heroes.shift() || '';
  }
}
