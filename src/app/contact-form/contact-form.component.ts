// contact-form.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit{
  ngOnInit(): void {
  }
  name: string = '';
  email: string = '';
  message: string = '';

  validateForm() {
    if (this.email && this.message) {
      // Envoyer le formulaire
      console.log('Formulaire valide, envoyez-le !');
    } else {
      console.log('Veuillez remplir tous les champs.');
    }
  }


}
