import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
    });
  }

  abrirUrl(url: string) {
    window.open(url, '_blank').focus();
  }
  whats() {
    this.abrirUrl('https://api.whatsapp.com/send?phone=5521994074268&text=');
  }

  enviar() {
    console.log('Enviar');
  }
}
