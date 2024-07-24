import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-box',
  templateUrl: './countdown-box.component.html',
  styleUrls: ['./countdown-box.component.css'],
  standalone: true,
})
export class CountdownBoxComponent implements OnInit {
  constructor() {}
  @Input() flipId: string = '';
  @Input() label: string = '';
  ngOnInit() {}
}
