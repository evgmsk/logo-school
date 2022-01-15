import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clients = ['client partner1', 'client partner1', 'client partner1', 'client partner1', 'client partner1', 'client partner1'];
  constructor() { }

  ngOnInit() {
    // console.log(this.clients)
  }

}
