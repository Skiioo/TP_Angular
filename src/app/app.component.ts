import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentDate: Date;

  constructor() { 
    this.currentDate = new Date(); // Initialiser la date actuelle
  }

  ngOnInit(): void {
    setInterval(() => {
      this.currentDate = new Date(); // Mettre à jour la date actuelle toutes les secondes
    }, 1000);
  }
}