import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {

  form: FormGroup;



  constructor(
    private formBuilder: FormBuilder
  ) {}

  abrirUrl(url: string) {
    window.open(url, '_blank').focus();
  }
  whats() {
    this.abrirUrl('https://api.whatsapp.com/send?phone=5521994074268&text=');
  }
}
