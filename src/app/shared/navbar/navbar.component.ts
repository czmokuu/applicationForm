import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


  @HostListener('window:resize', ['$event']) onResize() {

    let navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if (navbarBurgers.length > 0) {
      navbarBurgers.forEach( element => {
        element.addEventListener('click', () => {
          const target = element.dataset.target;
          const $target = document.getElementById(target);
          element.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  
  }
}
