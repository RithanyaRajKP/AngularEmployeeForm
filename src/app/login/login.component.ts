import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({});
  constructor(private _auth:AuthService,private router:Router, private formBuilder: FormBuilder ) { }

    ngOnInit(): void {
      this.loginInForm();
    }

    loginInForm(){
      this.loginForm = this.formBuilder.group({
        userName : ['',Validators.required],
        password : ['',[
          Validators.required,
          Validators.minLength(8)
        ],
        ],
      });

      
    }

    onSubmit(){

      let params = {
        username: this.loginForm.value.userName,
        password: this.loginForm.value.password
      }

      this._auth.loginterUser(params).subscribe((res) =>{

        if(res.success==true){
          this.router.navigateByUrl("/welcome");
          alert(res.message)
        }else if(res.success==false){
          alert(res.message)
        }else{
          alert("Not a valid user")
        }
      });

    }

}
