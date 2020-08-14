import { Component, OnInit, Input } from '@angular/core';
import {item} from "../../models/shop.model"

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item:item;

  constructor() { }

  ngOnInit(): void {
  }

}
