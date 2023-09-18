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
    this.apiService.postData(this.parameter).subscribe(data => {
      this.user = data;
    })
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
