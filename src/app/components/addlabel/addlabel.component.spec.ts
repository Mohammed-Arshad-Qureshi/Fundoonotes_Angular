import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlabelComponent } from './addlabel.component';

describe('AddlabelComponent', () => {
  let component: AddlabelComponent;
  let fixture: ComponentFixture<AddlabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddlabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddlabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
