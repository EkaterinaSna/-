import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  items = [
    { id: 1, title: 'Bad test',
    content: 'Bla Bla Bla'},
    { id: 2, title: 'Mmmmm',
    content: 'Ыыыыыы'}
  ];

  add(item: any): void {
    this.items.push(item);
  }
 delete(title: any): void {
   this.items = this.items.filter(item => item.title !== title);
 }
}

