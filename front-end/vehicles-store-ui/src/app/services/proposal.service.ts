import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { ProposalModel } from '../models/ProposalModel';

@Injectable({
  providedIn: 'root'
})
export class ProposalService extends BaseService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  sendProposal(proposal: ProposalModel) {
    let user = JSON.parse(localStorage.getItem('user'));

    return this.httpClient.post(this.baseUrl + "proposals/" + user._id, proposal);
  }
}
