import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";
import {RestoService} from "../resto.service";

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  constructor(private resto: RestoService) { }
  addResto = new FormGroup({  //addResto is our form name
  name: new FormControl(''),
  email: new FormControl(''),
  address: new FormControl('')
  });

  alert: boolean = false;
  ngOnInit(): void {
  }
  collectResto(){
    this.resto.saveResto(this.addResto.value).subscribe((result)=>{
    this.alert = true;
    });
    this.addResto.reset({});
  }
  closeAlert(){
   this.alert = false;
  }
}
