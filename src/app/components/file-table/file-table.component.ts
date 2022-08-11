import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Customer';
import { RESTserviceService } from 'src/app/services/restservice.service';
import { TheFile } from 'src/app/file';

@Component({
  selector: 'app-file-table',
  templateUrl: './file-table.component.html',
  styleUrls: ['./file-table.component.css']
})
export class FileTableComponent implements OnInit {

  public fileOwner: Customer = new Customer;
  theFiles: TheFile[] = [];

  setCustomer(customer: Customer) {
    this.fileOwner = customer;
    this.rest.getFilesFromCustomer(customer.id).subscribe(files => this.theFiles = files);
  }

  constructor(private rest: RESTserviceService) { }

  ngOnInit(): void {
  }

}
