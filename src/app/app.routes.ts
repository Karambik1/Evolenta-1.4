import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Item } from './item/item';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Main } from './main/main';
import { ItemDetails } from "./item/item-details/item-details";
import { ItemList } from "./item/item-list/item-list";
import { QueryParams } from "./item/query-params/query-params";

export const routes: Routes = [
    {path: '', component: Main},
    {path: 'contact', component: Contact},
    {path: 'about', component: About},
    {path: 'item/:id', component: Item, children: [
      {path: 'details', component: ItemDetails},
      {path: 'list', component: ItemList, data: { list: 1, enable: true }},
      {path: 'queryparams', component: QueryParams}
    ]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule {}