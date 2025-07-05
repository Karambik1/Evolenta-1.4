import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private router: Router) {}

  linkToMain() {
    this.router.navigateByUrl('/');
  }
  linkToContact() {
    this.router.navigateByUrl('/contact');
  }
  linkToAbout() {
    this.router.navigateByUrl('/about');
  }
  linkToItem() {
   this.router.navigateByUrl('/item/1');
}
}