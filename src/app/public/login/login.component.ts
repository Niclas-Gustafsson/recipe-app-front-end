import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';
import {Router} from "@angular/router";
import {PublicService} from "../public.service";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;


  constructor(private fb: FormBuilder, private router: Router, public publicService: PublicService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: '',
      password: ''
    });
  }
  submit() {
    const formData = this.form.getRawValue();
    const data = {
      email: formData.email,
      password: formData.password,
    }
    this.publicService.login(data).subscribe((res: any) => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('id', res.data.id);

      this.router.navigate(['/']);

    });

  }

}
