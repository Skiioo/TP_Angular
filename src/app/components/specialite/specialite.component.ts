import { Component } from '@angular/core';
import { ISpecialite } from '../../models/ispecialite';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrl: './specialite.component.css'
})
export class SpecialiteComponent {
  specialite: ISpecialite[] = [
    {  
      _idSpec: 1, _libelle: 'DEV APP' 
     
    },
    {  
      _idSpec: 2, _libelle: 'ING RESEAU' 
     
    },
    {  
      _idSpec: 3, _libelle: 'INTEGRATEUR' 
     
    },
    {  
      _idSpec: 4, _libelle: 'CHEF DE PROJET' 
     
    },
    {  
      _idSpec: 5, _libelle: 'INFOGRAPHISTE' 
     
    },
    {  
      _idSpec: 6, _libelle: 'UX DESIGNER' 
     
    },
    {  
      _idSpec: 4, _libelle: 'DEVELOPPEUR MOBILE' 
     
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
