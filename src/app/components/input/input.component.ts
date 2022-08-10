import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() name: string;
  @Input() type: string;
  @Input() value?: any;
  constructor() { }

  ngOnInit(): void {
  }

  getValue() {
    return this.value;
  }


  inputChange(event: any) {
    if (this.type == "checkbox") {
      this.value = event.target.checked;
      console.log(this.value);
    } else if (this.type == "text") {
      this.value = event.target.value;
      console.log(this.value);
    }
    
  }

}
