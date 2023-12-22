import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {

  constructor(private router: Router) {
    setTimeout(() => {
      router.navigateByUrl('/acceuil');
    }, 2000)
  }

  ngOnInit() {
  }

}
