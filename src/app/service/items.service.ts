import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  items = [
    { id: 1, title: 'Title1',
    content: 'Content1'},
    { id: 2, title: 'Title2',
    content: 'Content2'}
  ];

  add(item: any): void {
    this.items.push(item);
  }
 delete(title: any): void {
   this.items = this.items.filter(item => item.title !== title);
 }
}

