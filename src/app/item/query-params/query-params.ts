import { Component, DoCheck } from '@angular/core';
import { ActivatedRoute, RouterModule } from "@angular/router";

@Component({
  selector: 'app-query-params',
  imports: [RouterModule],
  templateUrl: './query-params.html',
  styleUrl: './query-params.css'
})
export class QueryParams implements DoCheck {
  constructor(private activeRouter: ActivatedRoute, private route: ActivatedRoute) {}

  ngDoCheck() {
    this.route.parent?.params.subscribe(params => {console.log('Current route parameter (id):', params['id'])});
    console.log(this.activeRouter.snapshot.queryParams);
  }
}