import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {
  gifArray = ['https://giphy.com/embed/edho4s1lWEawo', ]

  constructor() { }

  ngOnInit() {
  }

}
