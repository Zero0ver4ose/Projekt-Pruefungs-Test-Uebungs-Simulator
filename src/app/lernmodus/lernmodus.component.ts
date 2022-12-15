import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lernmodus',
  templateUrl: './lernmodus.component.html',
  styleUrls: ['./lernmodus.component.css']
})
export class LernmodusComponent   {
  router = this.route.url
  constructor(private route:Router){}
switch = false
}
console.log(Router)

