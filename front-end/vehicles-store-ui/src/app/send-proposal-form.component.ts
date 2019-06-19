import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './services/login.service';
import { ProposalService } from './services/proposal.service';
import { SellerInformationComponent } from './seller-information.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-proposal-form',
  template: `
  
      <form [formGroup]="proposalForm" (ngSubmit)="onSubmit()" *ngIf="isLogged">
            <div class="form-group">
            <label for="" class="control-label">Proposal:</label>
            <textarea class="form-control" [formControlName]="'description'" style="resize:none;" name="" id="" rows="5"></textarea>
            <br />
            <button type="submit" class="btn btn-primary" style="width:100%;" [disabled]="!proposalForm.valid" >Send proposal</button>
            </div>         
      </form>
    
  `,
  styles: []
})
export class SendProposalFormComponent implements OnInit {
  @Input() seller;
  proposalForm: FormGroup
  isLogged: boolean = false;
  submitted = false;

  constructor(private router: Router,
    loginService: LoginService, private formBuilder: FormBuilder, private proposalService: ProposalService) {
    this.isLogged = loginService.isUserLoggedIn();
  }

  ngOnInit() {
    this.proposalForm = this.formBuilder.group({
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.proposalForm.valid) {
      let proposal = this.proposalForm.value;
      proposal.vehicle_ads_id = this.seller.vehicles_ads[0]._id;
      proposal.customer_seller_id = this.seller._id;

      console.log(proposal); 
      this.proposalService.sendProposal(proposal)
        .subscribe(data => {
          this.router.navigate(['']);
        });
    }
  }

}
