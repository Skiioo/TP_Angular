import { Etudiant } from './etudiant';

describe('Etudiant', () => {
  it('should create an instance', () => {
    const nom = 'Quentin';
    const prenom = 'Hurand';
    const rue = '123 Rue de la Rue';
    const cp = '75000';
    const ville = 'Paris';
    const courriel = 'etudiant1@example.com';
    const genre = 'Homme';
    const age = 20;
    const id = 1;

    
    expect(new Etudiant(nom, prenom, rue, cp, ville, courriel, genre, age, id)).toBeTruthy(); // Provide the required arguments for the Etudiant constructor
  });
});

