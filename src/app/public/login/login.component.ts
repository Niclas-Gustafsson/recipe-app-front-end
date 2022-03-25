import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
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
      this.router.navigate(['/private']);
    });
    //this.http.post('http://127.0.0.1:8000/api/login', data).subscribe(
    //  (result:any) => {
    //    //console.log('result');
    //    //console.log(result.data.token);
    //    localStorage.setItem('token', result.data.token);
    //    this.router.navigate(['/private']);
     // },
    //  error => {
    //    console.log('error');
    //    console.log(error)
    //  }
    //);
  }

}
