import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() text: string | undefined;
  @Input() type: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
