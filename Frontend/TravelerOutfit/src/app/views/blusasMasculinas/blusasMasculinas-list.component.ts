import { Component, OnInit } from '@angular/core';
import AdministracaoBlusa from '../administracao/administracaoBlusa';
import { AdministracaoBlusaService } from '../administracao/administracaoBlusa.service';

@Component({
  selector: 'app-blusasMasculinas-list',
  templateUrl: './blusasMasculinas-list.component.html',
  styleUrls: ['./blusasMasculinas-list.component.css']
})
export class BlusasMasculinasListComponent implements OnInit {

  constructor(private administracaoBlusaService: AdministracaoBlusaService) { }

  blusasMasculinas: AdministracaoBlusa[] = []

  ngOnInit(): void {
    console.log('Teste BlusasMasculinas')
    this.findAllBlusasMasculinas();
  }

  findAllBlusasMasculinas() {
    this.administracaoBlusaService
      .findaAll()
      .subscribe((Response) => (this.blusasMasculinas = Response.filter((blusasMasculinas) => {
        if (blusasMasculinas.genero == 'masculino') {
          return blusasMasculinas
        }
      })));
  }

  deleteByIdMasculinas(id: number) {
    this.administracaoBlusaService.deleteById(id).subscribe(() => this.findAllBlusasMasculinas());
  }

}
