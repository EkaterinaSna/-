import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ItemsService} from '../../service/items.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent  {
  title = '';
  content = '';

  constructor(public itemsService: ItemsService, private router: Router) {}



  add(): void {
    this.itemsService.add({title: this.title, content: this.content});
    this.router.navigate(['list']);
  }
}
