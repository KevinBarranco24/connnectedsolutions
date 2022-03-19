import { Component, OnInit } from '@angular/core';
import { Categoria } from '../Models/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categorias: Categoria[] = [];
  constructor() { }

  ngOnInit(): void {
    
  }
}
