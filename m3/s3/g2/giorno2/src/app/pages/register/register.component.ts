import { Component,} from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
form!:FormGroup;

generi:string[]=[
  'uomo',
  'donna'
]
  constructor( private fb: FormBuilder){}

  ngOnInit(){

    this.form = this.fb.group({
      nome: this.fb.control(null,[Validators.required]),
      cognome: this.fb.control(null,[Validators.required]),
      password: this.fb.control(null,[Validators.required]),
      confermapass: this.fb.control(null,[Validators.required]),
      genere: this.fb.control(null,[Validators.required]),
      username: this.fb.control(null,[Validators.required]),
      })
      console.log(this.form.value);
    }
    metodo(){
      console.log(this.form.value);
    }
  }

