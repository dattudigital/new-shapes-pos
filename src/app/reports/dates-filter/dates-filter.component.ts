import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'dates-filter',
  templateUrl: './dates-filter.component.html',
  styleUrls: ['./dates-filter.component.css']
})
export class DatesFilterComponent implements OnInit {
  message: string = "Hola Mundo!"

  @Output() messageEvent = new EventEmitter<string>();
  constructor() {
    console.log("********************")
   }

  ngOnInit() {
  }

  sendMessageToParent() {
    this.messageEvent.emit(this.message)
  }

}
