import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'generate-export',
  templateUrl: './generate-export.component.html',
  styleUrls: ['./generate-export.component.css']
})
export class GenerateExportComponent implements OnInit {
  @Output() generateEvent = new EventEmitter();
  test = 'new click test'

  constructor() { }

  ngOnInit() {
  }
  sendMessageToParent() {
    this.generateEvent.emit(this.test)
  }
}
