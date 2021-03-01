import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import AdministracaoBlusa from '../administracaoBlusa';
import { AdministracaoBlusaService } from '../administracaoBlusa.service';

@Component({
  selector: 'app-AdministracaoBlusa-form',
  templateUrl: './AdministracaoBlusa-form.component.html',
  styleUrls: ['./AdministracaoBlusa-form.component.css']
})
export class AdministracaoBlusaFormComponent implements OnInit {

  constructor(
    private router: Router,
    private builder: FormBuilder,
    private AdministracaoBlusaService: AdministracaoBlusaService,
    private activatedRoute: ActivatedRoute
  ) { }

  administracaoBlusaForm: FormGroup;
  action: String;

  ngOnInit(): void {
    this.createForm();

    this.action = this.activatedRoute.snapshot.url[0].path
    if (this.action == 'alterar') {
      console.log('alterar')
      this.setValue();
    }
  }

  setValue() {
    const id = this.activatedRoute.snapshot.url[1].path
    this.AdministracaoBlusaService
      .findById(Number(id))
      .subscribe((response) => this.administracaoBlusaForm.patchValue(response));
  }

  createForm(): void {
    this.administracaoBlusaForm = this.builder.group({
      id: null,
      nome: [null, [Validators.required, Validators.maxLength(120)]],
      preco: [null, [Validators.required, Validators.maxLength(12)]],
      marca: [null, [Validators.required, Validators.maxLength(120)]],
      tamanho: [null, [Validators.required, Validators.maxLength(4)]],
      genero: [null, [Validators.required, Validators.maxLength(120)]],
      cor: [null, [Validators.required, Validators.maxLength(120)]],
    })
  }

  onCancel(): void {
    this.router.navigate(['administracaoBlusas'])
  }

  onSave(value: AdministracaoBlusa): void {
    console.log(value)
    this.AdministracaoBlusaService
      .save(value)
      .subscribe((response) => this.router.navigate(['administracaoBlusas']))
  }

}
