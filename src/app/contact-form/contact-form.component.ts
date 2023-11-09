// contact-form.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit{
    
  name: string = '';
  email: string = '';
  message: string = '';
  
  ngOnInit(): void {
  }

  validateForm() {
    if (this.email && this.message) {
      console.log('Formulaire valide, envoyez-le !');
      // Affichage d'une alerte avec infos remplies
      alert(`Nom: ${this.name}\nEmail: ${this.email}\nMessage: ${this.message}`)
    } else {
      console.log('Veuillez remplir les champs email et/ou message');
      alert('Veuillez remplir les champs email et/ou message');
    }
  }
}
