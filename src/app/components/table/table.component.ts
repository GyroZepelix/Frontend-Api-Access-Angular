import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Customer';
import { RESTserviceService } from 'src/app/services/restservice.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public customers: Customer[] = [];
  constructor(private RESTService: RESTserviceService) { }

  showFile() {
    console.log("test");
  }

  deleteCustomer () {

  }

  editCustomer() {

  }

  ngOnInit(): void {
    this.RESTService.getCustomers().subscribe((customers) => (this.customers = customers));
    console.log(this.customers);
  }

}
