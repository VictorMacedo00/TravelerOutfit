import { Component, OnInit } from '@angular/core';
import AdministracaoBlusa from '../administracaoBlusa';
import { AdministracaoBlusaService } from '../administracaoBlusa.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-administracaoBlusa-list',
  templateUrl: './administracaoBlusa-list.component.html',
  styleUrls: ['./administracaoBlusa-list.component.css']
})
export class AdministracaoBlusaListComponent implements OnInit {

  constructor(
    private administracaoBlusaService: AdministracaoBlusaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  administracaoBlusasMasculinas: AdministracaoBlusa[] = []

  administracaoBlusasFemininas: AdministracaoBlusa[] = []

  administracaoBlusas: AdministracaoBlusa[] = []

  idDelete: number = null
  generoDelete: String

  ngOnInit(): void {
     this.findAllAdministracaoBlusasMasculinas();
     this.findAllAdministracaoBlusasFemininas();
  }


   findAllAdministracaoBlusasMasculinas() {
     this.administracaoBlusaService
       .findaAll()
       .subscribe((Response) => (this.administracaoBlusasMasculinas = Response.filter((blusasMasculinas) => {
         if (blusasMasculinas.genero == 'masculino') {
           return blusasMasculinas
         }
       })));
   }

   findAllAdministracaoBlusasFemininas() {
     this.administracaoBlusaService
       .findaAll()
       .subscribe((Response) => (this.administracaoBlusasFemininas = Response.filter((blusasFemininas) => {
         if (blusasFemininas.genero == 'feminino') {
           return blusasFemininas
         }
       })));
   }

   deleteByIdMasculinas() {
     this.administracaoBlusaService.deleteById(this.idDelete).subscribe(() => this.findAllAdministracaoBlusasMasculinas());
     this.modal(null)
   }

   deleteByIdFemininas() {
     this.administracaoBlusaService.deleteById(this.idDelete).subscribe(() => this.findAllAdministracaoBlusasFemininas());
     this.modal(null)
   }

   modal(id?: number, genero?: String) {
     if(id) {
       this.idDelete = id
     }

     if(genero) {
       this.generoDelete = genero
     }

     const modalActivated = document.querySelector('.modal')
     modalActivated.classList.toggle('inactive')
   }

   deleteItem() {
    if(this.generoDelete == 'masculino') {
      this.deleteByIdMasculinas()
    } else {
      this.deleteByIdFemininas()
    }

   }

}
