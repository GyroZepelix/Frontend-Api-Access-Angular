import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  
  @Input() name: string;
  @Output() buttonPressedEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }

  buttonPressed() {
    this.buttonPressedEvent.emit();
  }

}
