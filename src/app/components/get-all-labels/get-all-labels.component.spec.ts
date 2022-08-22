import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllLabelsComponent } from './get-all-labels.component';

describe('GetAllLabelsComponent', () => {
  let component: GetAllLabelsComponent;
  let fixture: ComponentFixture<GetAllLabelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllLabelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
