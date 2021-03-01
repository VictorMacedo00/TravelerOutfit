import { Component, OnInit } from '@angular/core';
import AdministracaoBlusa from '../administracao/administracaoBlusa';
import { AdministracaoBlusaService } from '../administracao/administracaoBlusa.service';

@Component({
  selector: 'app-blusasFemininas-list',
  templateUrl: './blusasFemininas-list.component.html',
  styleUrls: ['./blusasFemininas-list.component.css']
})
export class BlusasFemininasListComponent implements OnInit {

  constructor(private administracaoBlusaService: AdministracaoBlusaService) { }

  blusasFemininas: AdministracaoBlusa[] = []

  ngOnInit(): void {
    console.log('Teste BlusasFemininas')
    this.findAllBlusasFemininas();
  }

  findAllBlusasFemininas() {
    this.administracaoBlusaService
      .findaAll()
      .subscribe((Response) => (this.blusasFemininas = Response.filter((blusasFemininas) => {
        if (blusasFemininas.genero == 'feminino') {
          return blusasFemininas
        }
      })));
  }

  deleteByIdFemininas(id: number) {
    this.administracaoBlusaService.deleteById(id).subscribe(() => this.findAllBlusasFemininas());
  }

}
