import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', "This is simply a test", "https://www.cucchiaio.it/content/cucchiaio/it/ricette/2016/03/pancake-con-il-bimby/jcr:content/imagePreview.img10.jpg/1458722940545.jpg"),
    new Recipe('','',''),
    new Recipe('','',''),
    new Recipe('','',''),
    new Recipe('','',''),
    new Recipe('','',''),
    new Recipe('','',''),
    new Recipe('','',''),
    new Recipe('','',''),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
