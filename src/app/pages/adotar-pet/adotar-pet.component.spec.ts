import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdotarPetComponent } from './adotar-pet.component';

describe('AdotarPetComponent', () => {
  let component: AdotarPetComponent;
  let fixture: ComponentFixture<AdotarPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdotarPetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdotarPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
