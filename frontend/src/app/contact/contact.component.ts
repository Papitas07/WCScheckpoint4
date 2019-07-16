import { ConnectionService } from '../connection.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any>;
  
    @HostListener('input') oninput() {
      if (this.contactForm.valid) {
        this.disabledSubmitButton = false;
      }
    }

  constructor(private fb: FormBuilder, private connectionService: ConnectionService) {
    this.contactForm = fb.group({
      'contactFormName': ['', Validators.required],
      'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
      'contactFormSubjects': ['', Validators.required],
      'contactFormMessage': ['', Validators.required],
      });
   }

  ngOnInit() {
  }

  onSubmit() {
    this.connectionService.sendMessage(this.contactForm.value).subscribe((data) => {
      console.log('Your message has been sent.');
      this.contactForm.reset();
      this.disabledSubmitButton = true;
    }, error => {
      console.log('Error', error);
    });
  }

  send() {
    this.connectionService.sendMessage(
      { name: 'Jean Bon',
  email: 'jean@debayonne.fr',
  subject: 'sandwich',
  message: 'pouet' }).subscribe( data => {
        console.log(data)
      }, (error) => {
        console.log(error)
      })
  }
}
