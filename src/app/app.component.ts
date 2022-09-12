import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  FormularioEntrega!: FormGroup;

  ngOnInit() {
    this.InicializacaoFormulario();
  }

  InicializacaoFormulario() {
    this.FormularioEntrega = new FormGroup({
      'EnderecoCobranca': new FormGroup({
        'PrimeiroNomeCobranca': new FormControl(),
        'SegundoNomeCobranca': new FormControl(),
        'LinhaEndereco1Cobranca': new FormControl(),
        'LinhaEndereco2Cobranca': new FormControl(),
        'DistritoCobranca': new FormControl(),
        'ProvinciaCobranca': new FormControl(),
        'PaisCobranca': new FormControl(),
        'CodigoPostalCobranca': new FormControl()
      }),
      'EnderecoCheckbox': new FormGroup({
        'checkbox': new FormControl()
      }),
      'EnderecoEntrega': new FormGroup({
        'PrimeiroNomeEntrega': new FormControl(),
        'SegundoNomeEntrega': new FormControl(),
        'LinhaEndereco1Entrega': new FormControl(),
        'LinhaEndereco2Entrega': new FormControl(),
        'DistritoEntrega': new FormControl(),
        'ProvinciaEntrega': new FormControl(),
        'PaisEntrega': new FormControl(),
        'CodigoPostalEntrega': new FormControl()
      })
    });
  }

  emSubmeter() {
    console.log(this.FormularioEntrega);
  }


}
