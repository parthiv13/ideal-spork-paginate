import { Component, OnInit, Output, EventEmitter, SimpleChanges, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-channel-tools',
  templateUrl: './channel-tools.component.html',
  styleUrls: ['./channel-tools.component.css']
})
export class ChannelToolsComponent implements OnInit {
  @Input() search: string;
  @Output() searchField = new EventEmitter<string>();

  searchFieldFM = new FormControl('', [Validators.required])

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    this.searchField.emit(this.search);
  }

}
