import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category } from '../models/Category';
import { CategoryService } from '../Services/category.service';

@Component({
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  name: string = "";
  owner: string = "";
  description: string = "";


  constructor(private http: HttpClient, private cs: CategoryService) { }
  _categories: Category[] = []

  ngOnInit(): void {
    this._categories = this.cs.GetCategories();
  }

  save(){
    this.description = this.description == "" ? "No se proporcionó una descripción." : this.description;
    if(this.name != "" && this.owner != ""){
      this._categories.push(
        {
          name: this.name,
          owner: this.owner,
          description: this.description
        }
      );
      this.name = "";
      this.owner = "";
      this.description = "";
    }
  }
}
