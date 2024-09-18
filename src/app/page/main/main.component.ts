import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';
import { HttpClient } from '@angular/common/http';
import { Convert as landmarksCvt,Landmark } from '../../model/landmark.model';
import { Convert as CountryCvt,Country } from '../../model/country.model';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  landmarks = Array<Landmark>();
  countries = Array<Country>();
  constructor(private dataService:DataService,private http:HttpClient){
    http.get(dataService.apiEndpoint + "/landmark").subscribe((data:any) =>{
     this.landmarks = landmarksCvt.toLandmark(JSON.stringify(data));
     console.log(this.landmarks)
    });
    http.get(dataService.apiEndpoint + "/Country").subscribe((data:any) =>{
      this.countries = CountryCvt.toCountry(JSON.stringify(data));
      console.log(this.countries)
     });

}
}
