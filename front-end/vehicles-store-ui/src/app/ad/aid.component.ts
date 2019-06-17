import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Validators} from '@angular/forms';
import {CustomerSellerService} from "../services/customer-seller.service";
import {VehiclesAdsService} from '../services/vehicles-ads.service';
import {Router} from "@angular/router";
import {FileUploader, FileSelectDirective} from 'ng2-file-upload/ng2-file-upload';


@Component({
  selector: 'app-aid',
  templateUrl: './aid.component.html',
  styleUrls: ['./aid.component.css']
})
export class AidComponent implements OnInit {
  private base64textString: String = "";
  image: string | ArrayBuffer;
  categories = ['bus', 'car', 'trailer', 'van', 'sedan'];
  transmission = ['manual', 'automatic', 'other'];
  private addForm: FormGroup;
  submitted: boolean;
  // public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });

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
      year: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      title: ['', Validators.required],
      images: [[]]
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.addForm.value);
    if (!this.addForm.valid) {
      console.log('valid form');
      this.vehiclesAdsService.addVehicleAd(this.addForm.value)
        .subscribe(data => {
          console.log(data);
          // this.router.navigate(['']);
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

    // console.log(btoa(binaryString));
    this.addForm.value.images.push(btoa(binaryString));
    console.log(this.addForm.value);
    console.log(typeof this.addForm.value);
  }


}

