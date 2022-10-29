import { Component, OnInit } from '@angular/core';
import { emptyObjectsAreNotAllowedInProps } from '@ngrx/store/src/models';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  backgroundImage: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  ToggleDarkTheme(){
    document.body.classList.toggle('DarkTheme')
    this.backgroundImage = document.getElementById('themeIcon')!.style.backgroundImage;
    if(this.backgroundImage.includes('sun')) {
      document.getElementById('themeIcon')!.style.backgroundImage="url(../../../assets/icon-moon.svg)";
    } else{
      document.getElementById('themeIcon')!.style.backgroundImage="url(../../../assets/icon-sun.svg)";
    }
   }

}
