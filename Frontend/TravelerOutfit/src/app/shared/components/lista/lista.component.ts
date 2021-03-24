 import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

 @Component({
   selector: 'app-lista',
   templateUrl: './lista.component.html',
   styleUrls: ['./lista.component.css']
 })
 export class ListaComponent implements OnInit {

   @Input() tituloLista: String
   @Input() listaBlusas: any

   @Output() modal = new EventEmitter();

   constructor() { }

   ngOnInit(): void {
   }

   openModal(id: number, genero: String) {
      this.modal.emit({id, genero})
   }

 }
