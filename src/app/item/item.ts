import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-item',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './item.html',
  styleUrl: './item.css'
})

export class Item {
}