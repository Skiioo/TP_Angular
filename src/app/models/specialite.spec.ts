import { Specialite } from './specialite';

describe('Specialite', () => {
  it('should create an instance', () => {
    
    const _libelle = 'UX Designer';
    const _idSpec = 1; 
   
    expect(new Specialite(_libelle, _idSpec)).toBeTruthy();
  });
});
