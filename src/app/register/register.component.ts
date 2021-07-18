import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  registraionForm = new FormGroup({});

  constructor(private _auth:AuthService,private router:Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm();
  }

  registerForm(){
    this.registraionForm = this.formBuilder.group({

      userName : ['',Validators.required],

      password : ['',[
        Validators.required,
        Validators.minLength(8)
      ],
      ],
      empid : ['',Validators.required],
      name : ['',Validators.required],
      email : ['',[Validators.required,
        Validators.email,
      ]],
      phone : ['',[Validators.required,
        Validators.maxLength(10), Validators.minLength(5)]],
      designation : ['',Validators.required],
      address : ['',Validators.required],
    });

    
  }

  onSubmit(){

    let params = {
      username: this.registraionForm.value.userName,
      password: this.registraionForm.value.password,
      empid   : this.registraionForm.value.empid,
      name    : this.registraionForm.value.name,
      email   : this.registraionForm.value.email,
      phone   : this.registraionForm.value.phone,
      designation: this.registraionForm.value.designation,
      address : this.registraionForm.value.address
    }

    this._auth.registerUser(params).subscribe((res) =>{

      if(res.success==true){
        this.router.navigateByUrl("/login");
        alert(res.message)
      }else if(res.success==false){
        alert(res.message)
      }else{
        alert("Please try again")

      }
    });

  }
  

}
