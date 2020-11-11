import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {RestoService} from "../resto.service";

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  alert: boolean = false;

  updateResto = new FormGroup({  //updateResto is our form name
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  });

  constructor(private router: ActivatedRoute,private resto:RestoService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id); //we have given parameter "id" in parameterized routing
    this.resto.getCurrentResto(this.router.snapshot.params.id).subscribe((result)=>{
      // console.warn(result);
      this.updateResto = new FormGroup({  //updateResto is our form name
        name: new FormControl(result['name']),
        email: new FormControl(result['email']),
        address: new FormControl(result['address'])
      });
    });
  }
  collection(){
    console.warn("item", this.updateResto.value);
    this.resto.editResto(this.router.snapshot.params.id, this.updateResto.value).subscribe((result)=>{
      console.warn(result);
      this.alert= true;
    });
    this.updateResto.reset({});
  }
  closeAlert()
  {
    this.alert = false;
  }
}
