import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unauthorized',
  template: `
  <div class="notfound">
        <div class="notfound-404">
            <h1>4<span>0</span>1</h1>
        </div>
        <h2>Access is denied due to invalid credentials</h2>   
  </div>
  
 
  `,
  styles: [` 
  
  .notfound-404 h1
  {
      font-size:100px !important;
  }
  #notfound .notfound {
      position: absolute;
      left: 60%;
      top: 50%;
      -webkit-transform: translate(-50%,-50%);
      -ms-transform: translate(-50%,-50%);
      transform: translate(-50%,-50%);
  }
  
  .notfound .notfound-404 h1>span {
      color: #00b7ff;
  }
  
  .notfound {
      max-width: 767px;
      width: 100%;
      line-height: 1.4;
      padding: 110px 40px;
      text-align: center;
      background: #fff; 
      margin-top: 3.5%;
      margin-left: 15%;
  }`]
})
export class UnauthorizedComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
