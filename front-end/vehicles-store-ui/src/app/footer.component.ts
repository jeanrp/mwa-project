import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
       <footer>
            MUM Vehicles
       </footer>
  `,
  styles: [`footer {  background-color: rgb(11, 35, 84) !important; width:100%;font-size:12px;padding-top:4px;height:30px; position:fixed; bottom:0px;text-align:center; color:white} `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
