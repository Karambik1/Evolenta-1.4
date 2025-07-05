import { Component, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-list',
  imports: [],
  templateUrl: './item-list.html',
  styleUrl: './item-list.css'
})
export class ItemList implements DoCheck {
  constructor(private route: ActivatedRoute) { }

  ngDoCheck() {
    console.log('List parameter:', this.route.snapshot.data['list']);
    console.log('Enable parameter:', this.route.snapshot.data['enable']);
  }
  
}
