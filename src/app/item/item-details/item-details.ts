import { Component, DoCheck } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-item-details',
  imports: [],
  templateUrl: './item-details.html',
  styleUrl: './item-details.css'
})
export class ItemDetails implements DoCheck {
  constructor(private router: Router) {}

  ngDoCheck() {
    console.log(this.router.url.split('?')[0])
  }
}