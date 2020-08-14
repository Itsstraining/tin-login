import { Component, OnInit } from '@angular/core';
import { item } from '../../models/shop.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  db: Array<item> = [
    new item("Chó bông poodle", 3000, 0 , "../../../assets/cho_bong.jpg"),
    new item("Cá sấu gai", 30000, 0, "../../../assets/casaugai.jpg"),
    new item("Mèo bông", 300000 , 0, "../../../assets/meo-bong.jpg")
 ];


  constructor() { }

  ngOnInit(): void {
  }
}


