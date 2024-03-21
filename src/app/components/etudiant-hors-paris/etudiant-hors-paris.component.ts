import { Component } from '@angular/core';
import { IEtudiant } from '../../models/ietudiant';

@Component({
  selector: 'app-etudiant-hors-paris',
  templateUrl: './etudiant-hors-paris.component.html',
  styleUrl: './etudiant-hors-paris.component.css'
})
export class EtudiantHorsParisComponent {
  etudiants: IEtudiant[] = [
    {  
      _idCandi: 10101, 
      _nom: 'RIVAY', 
      _prenom: 'Claude', 
      _ville: 'Paris', 
      _courriel: 'no_adri1@vol.org',
      _age: 20,
      _rue: '24 rue de Moutreuil',
      _cp: '75020',
      _genre: 'Homme'
    },
    {  
      _idCandi: 10201, 
      _nom: 'BOUNAR', 
      _prenom: 'Mehdi', 
      _ville: 'Paris', 
      _courriel: 'no_adri2@vol.org',
      _age: 25,
      _rue: '12 Rue de la dame',
      _cp: '75011',
      _genre: 'Homme'
    },
    {  
      _idCandi: 11553, 
      _nom: 'RATTIER', 
      _prenom: 'Liza', 
      _ville: 'Paris', 
      _courriel: 'no_adri10@vol.org',
      _age: 19,
      _rue: '44 rue de Montreuil',
      _cp: '75020',
      _genre: 'Femme'
    },
    {  
      _idCandi: 12124, 
      _nom: 'EDME', 
      _prenom: 'Liza', 
      _ville: 'Paris', 
      _courriel: 'no_adri3@vol.org',
      _age: 21,
      _rue: '12 Rue Montreuil',
      _cp: '75020',
      _genre: 'Femme'
    },
    {  
      _idCandi: 21094, 
      _nom: 'LEE', 
      _prenom: 'Yan Fu', 
      _ville: 'Nanterre', 
      _courriel: 'no_adri4@vol.org',
      _age: 22,
      _rue: '113 Av. Gl De Gaule',
      _cp: '92000',
      _genre: 'Homme'
    },
    {  
      _idCandi: 50001, 
      _nom: 'VERIN', 
      _prenom: 'Eric', 
      _ville: 'Melun', 
      _courriel: 'no_adri5@vol.org',
      _age: 23,
      _rue: '10-Bis rue Saint Maur',
      _cp: '77100',
      _genre: 'Homme'
    },
    {  
      _idCandi: 50001, 
      _nom: 'LEROY', 
      _prenom: 'Axelle', 
      _ville: 'Meaux', 
      _courriel: 'no_adri6@vol.org',
      _age: 40,
      _rue: '11 Av.Gl De Gaulle',
      _cp: '77100',
      _genre: 'Femme'
    },
    {  
      _idCandi: 65002, 
      _nom: 'FISCHIER', 
      _prenom: 'Morgan', 
      _ville: 'Champigny Marne', 
      _courriel: 'no_adri7@vol.org',
      _age: 41,
      _rue: '5 rue de la Pierre Levée',
      _cp: '94500',
      _genre: 'Femme'
    },
    {  
      _idCandi: 11576, 
      _nom: 'BENALI', 
      _prenom: 'Mira', 
      _ville: 'Vincennes', 
      _courriel: 'no_adri8@vol.org',
      _age: 19,
      _rue: '21 rue de Valvin',
      _cp: '94300',
      _genre: 'Femme'
    },
    {  
      _idCandi: 11131, 
      _nom: 'CEZAIRE', 
      _prenom: 'Joël', 
      _ville: 'Moissy', 
      _courriel: 'no_adri9@vol.org',
      _age: 33,
      _rue: '56 rue de Liege',
      _cp: '77550',
      _genre: 'Homme'
    }
    
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
 