import { Component, OnInit, ViewChild, ElementRef, Input, Output } from '@angular/core';
import { Options, ChangeContext, PointerType } from 'ng5-slider';
import { FormControl } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { VehiclesAd } from './models/VehiclesAd';
import { EventEmitter } from '@angular/core';



@Component({
  selector: 'app-search-bar',
  template: `

  <div class="row search-bar"> 
            <label for="" class="price-label">Price: </label>
                <ng5-slider [(value)]="minValue"
                [(highValue)]="maxValue"
                [options]="options" 
                (userChangeEnd)="onUserChangeEnd($event)">
                </ng5-slider>  
  
        <input type="text" class="form-control model" placeholder="Model" #modelInput>

        <input type="text" class="form-control brand" placeholder="Brand" #brandInput> 
      

        <select class="form-control" id="year" #year (change)="filterByYear()"> 
            <option value="">Year</option>
            <option *ngFor="let year of years" [value]="year">{{year}}</option>
        </select>
 
  </div>

  <div class="loading" *ngIf="isSearching">
        <div class="col-12 text-center">

            <h4>Searching ... </h4>

        </div>
    </div>

  <hr />
  `,
  styles: [`
       
      .loading{ 
          width: 120px;
          height: 120px; 
          display: block;
          background: url("/img/loader.svg") no-repeat center;
          position: absolute;
          left: 50%;
          top: 50%;
          margin: -60px 0 0 -60px;
          -webkit-animation: loader 2.5s linear 0s infinite;
          animation: loader 2.5s linear 0s infinite;
      }
     
      .price-label{
        margin-right:15px;padding-top: 20px;
      }
      .model{ margin-left:10px;}
      .model, .brand {
        margin-top: 15px;
        float: left;
        max-width: 200px;
        margin-right:10px;
      }
      .ng5-slider, .ng5-slider-bar-wrapper {  
        width: 250px !important;
      }

      #year
      {
        max-width:200px !important;
        margin-top: 15px;
      }

       
    .filter-group { margin-top: 10px; margin-left: 15px; } 
     .btn-outline-dark:hover {  background-color: rgb(11, 35, 84) !important; border-color:rgb(11, 35, 84) !important; }
     .search-bar{ margin-left: 50px;margin-top:20px; }
     .search-bar button { margin-right:20px; margin-top:5px;} `]
})
export class SearchBarComponent implements OnInit {
  sliderControl: FormControl = new FormControl(100);

  isSearching: boolean = false;

  optionsYear: Options = {
    floor: 1990,
    ceil: 2020
  };;
  minValue: number = 1;
  maxValue: number = 15000;
  options: Options = {
    floor: 0,
    ceil: 15000
  };
  years: number[] = [2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991];

  @ViewChild('brandInput', { static: false }) brandInput: ElementRef;
  @ViewChild('modelInput', { static: false }) modelInput: ElementRef;
  @ViewChild('year', { static: false }) year: ElementRef;

  @Input() vehicles: VehiclesAd[];
  @Output() newVehicle = new EventEmitter();
  initialVehicles: VehiclesAd[];


  constructor() { }

  ngOnInit() {
    this.initialVehicles = this.vehicles;

  }

  ngDoCheck() {

  }

  ngAfterViewInit() {

    fromEvent(this.brandInput.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value;
      })
      , distinctUntilChanged()
    ).subscribe((text: string) => {
      this.searchVehicles(this.minValue, this.maxValue, this.year.nativeElement.value, this.brandInput.nativeElement.value, this.modelInput.nativeElement.value);
    });

    fromEvent(this.modelInput.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value;
      })
      , distinctUntilChanged()
    ).subscribe((text: string) => {
      this.searchVehicles(this.minValue, this.maxValue, this.year.nativeElement.value, this.brandInput.nativeElement.value, this.modelInput.nativeElement.value);
    });
  }

  searchVehicles(minPrice: number, maxPrice: number, year: string, brand: string, model: string) {
    this.isSearching = true;

    let vehic = [...this.initialVehicles];

    vehic = vehic.filter((v, i) => {
      return (parseInt(v.price) >= minPrice && parseInt(v.price) <= maxPrice);
    });

    vehic = vehic.filter((v, i) => {
      return v.model.toLowerCase().includes(model.toLowerCase())
    });

    vehic = vehic.filter((v, i) => {
      return v.brand.toLowerCase().includes(brand.toLowerCase());
    });

    if (year != "") {
      vehic = vehic.filter((v, i) => {
        return v.year == parseInt(year);
      });
    }

    this.newVehicle.emit(JSON.stringify(vehic));




    this.isSearching = false;
  }



  onUserChangeEnd(changeContext: ChangeContext): void {
    this.searchVehicles(this.minValue, this.maxValue, this.year.nativeElement.value, this.brandInput.nativeElement.value, this.modelInput.nativeElement.value);
  }

  filterByYear() {
    this.searchVehicles(this.minValue, this.maxValue, this.year.nativeElement.value, this.brandInput.nativeElement.value, this.modelInput.nativeElement.value);
  }



}
