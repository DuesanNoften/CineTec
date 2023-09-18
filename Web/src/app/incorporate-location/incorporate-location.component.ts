import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-incorporate-location',
  templateUrl: './incorporate-location.component.html',
  styleUrls: ['./incorporate-location.component.css']
})
export class IncorporateLocationComponent {

  user:any; 

  parameter = {
    IdLocation : 0,
    Name: '',
    Place : '',
    NumScreens : 0
  }
  
  constructor(private apiService: APIService){ };

  Post(){
    console.log(JSON.stringify(this.parameter))
    this.apiService.postData(JSON.stringify(this.parameter)).subscribe((result) => 
    console.warn())
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
