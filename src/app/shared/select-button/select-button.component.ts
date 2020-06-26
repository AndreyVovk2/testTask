import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.scss']
})
export class SelectButtonComponent implements OnInit {
  @Input() title: string;
  @Output() index = new EventEmitter;
  options: any = [
    {text: 'Ні'},
    {text: 'Так'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

  submitIndex(i) {
    this.index.emit(i);
  }
}
