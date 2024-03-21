import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSpeciliteComponent } from './form-specilite.component';

describe('FormSpeciliteComponent', () => {
  let component: FormSpeciliteComponent;
  let fixture: ComponentFixture<FormSpeciliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormSpeciliteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormSpeciliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
