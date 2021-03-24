import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import AdministracaoBlusa from '../administracao/administracaoBlusa';
import { AdministracaoBlusaService } from '../administracao/administracaoBlusa.service';

@Component({
  selector: 'app-blusas-list',
  templateUrl: './blusas-list.component.html',
  styleUrls: ['./blusas-list.component.css']
})
export class BlusasListComponent implements OnInit {

  constructor(
    private administracaoBlusaService: AdministracaoBlusaService,
    private activatedRoute: ActivatedRoute,
    ) { }

  blusas: AdministracaoBlusa[] = [];
  
    genero: String

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.genero = params.genero
      this.findBlusasByGenero(params.genero)
    })
  }

  findBlusasByGenero(genero: String) {
    this.administracaoBlusaService
      .findByGenero(genero)
      .subscribe((blusas) => (this.blusas = blusas)) }

}