import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from '../Models/Category';
import { CategoryService } from '../Services/category.service';

@Component({
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit, OnDestroy {
  constructor(private http: HttpClient, private cs: CategoryService) { }
  _categories: Category[] = []
  sub!: Subscription;

  ngOnInit(): void {
    this.sub = this.cs.GetCategories().subscribe(data => this._categories = data);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
