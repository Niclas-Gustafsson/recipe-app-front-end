import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {PublicService} from "../public.service";

//import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  //No need for an interface since I don't want to store sensitive data?
 // users: User[] = [];

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

      this.router.navigate(['/user/list']);

    });

  }

}
