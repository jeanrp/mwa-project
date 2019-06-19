import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Validators} from '@angular/forms';
import {CustomerSellerService} from "../services/customer-seller.service";
import {VehiclesAdsService} from '../services/vehicles-ads.service';
import {Router} from "@angular/router";
import {FileUploader, FileSelectDirective} from 'ng2-file-upload';


@Component({
  selector: 'app-aid',
  templateUrl: './aid.component.html',
  styleUrls: ['./aid.component.css']
})


export class AidComponent implements OnInit {
  private base64textString: String = "";
  years: [] = [2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991];



  public uploader: FileUploader = new FileUploader({
    url: 'http://localhost:3000/upload'
  });

  public hasBaseDropZoneOver: boolean;
  public hasAnotherDropZoneOver: boolean;

  image: string | ArrayBuffer;
  categories = ['bus', 'car', 'trailer', 'van', 'sedan'];
  transmission = ['manual', 'automatic', 'other'];
  private addForm: FormGroup;
  submitted: boolean;

  fuels = ['gas', 'diesel', 'hybrid', 'electric'];
  colors = ['black', 'blue', 'brown', 'green', 'grey', 'orange', 'purple', 'red', 'silver', 'white', 'yellow', 'custom'];
  conditions = ['new', 'line new', 'excellent', 'good', 'fair', 'salvage'];


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private vehiclesAdsService: VehiclesAdsService,
  ) {

  }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      category: ['', Validators.required],
      vin: ['', Validators.required],
      odometer: ['', Validators.required],
      model: ['', Validators.required],
      brand: ['', Validators.required],
      condition: ['', Validators.required],
      fuel: ['', Validators.required],
      color: ['', Validators.required],
      transmission: ['', Validators.required],
      year: [''],
      description: ['', Validators.required],
      price: ['', Validators.required],
      title: ['', Validators.required],
      interestType: ['seller'],
      creationDate: [''],
      images: [[]]
    });

    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('FileUpload:uploaded:', item, status, response);
    };
  }

  public findInvalidControls() {
    const invalid = [];
    const controls = this.addForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    return invalid;
  }


  onSubmit() {
    this.submitted = true;
    const today = new Date();
    this.addForm.value.creationDate = today;
    console.log(this.addForm.value);
    console.log('Valid form ' + this.addForm.valid);
    this.findInvalidControls();

    if (this.addForm.valid) {
      console.log('valid form');
      this.vehiclesAdsService.addVehicleAd(this.addForm.value)
        .subscribe(data => {
          this.router.navigate(['show-my-vehicles-ads']);
        });
      return;
    }
  }


  handleFileSelect(evt) {
    const files = evt.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    this.addForm.value.images.push('data:image/jpg;base64,' + btoa(binaryString));
    console.log(this.addForm.value);
    console.log(typeof this.addForm.value);
  }


  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }


}

