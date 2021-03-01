import { Component, OnInit } from '@angular/core';
import AdministracaoBlusa from '../administracaoBlusa';
import { AdministracaoBlusaService } from '../administracaoBlusa.service';

@Component({
  selector: 'app-administracaoBlusa-list',
  templateUrl: './administracaoBlusa-list.component.html',
  styleUrls: ['./administracaoBlusa-list.component.css']
})
export class AdministracaoBlusaListComponent implements OnInit {

  constructor(private administracaoBlusaService: AdministracaoBlusaService) { }

  administracaoBlusasMasculinas: AdministracaoBlusa[] = []

  administracaoBlusasFemininas: AdministracaoBlusa[] = []

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

  deleteByIdMasculinas(id: number) {
    this.administracaoBlusaService.deleteById(id).subscribe(() => this.findAllAdministracaoBlusasMasculinas());
  }

  deleteByIdFemininas(id: number) {
    this.administracaoBlusaService.deleteById(id).subscribe(() => this.findAllAdministracaoBlusasFemininas());
  }

}
