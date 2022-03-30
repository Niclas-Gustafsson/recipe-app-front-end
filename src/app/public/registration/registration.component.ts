import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';
import {Router} from "@angular/router";
import {PublicService} from "../public.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, public publicService: PublicService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: '',
      email: '',
      password: '',
      confirm_password: ''
    });
  }

  submit() {
    const formData = this.form.getRawValue();
    const data = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      password_confirmation: formData.confirm_password,
    }
    if(formData.password === formData.confirm_password) {
      this.publicService.register(data).subscribe((res: any) => {
        //console.log(res);
        //localStorage.setItem('token', res.data.token);
        this.router.navigate(['/login']);
      }, err => {
        console.log('error');
        console.log(err);
      });
    }


  }

}
