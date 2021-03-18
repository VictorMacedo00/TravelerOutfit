import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blusasCard',
  templateUrl: './blusasCard.component.html',
  styleUrls: ['./blusasCard.component.css']
})
export class BlusasCardComponent implements OnInit {

  @Input() blusas: Array<any> = []

  constructor() { }

  ngOnInit(): void {

  }

}
