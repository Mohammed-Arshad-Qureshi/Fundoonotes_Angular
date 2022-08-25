import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNotebyidComponent } from './get-notebyid.component';

describe('GetNotebyidComponent', () => {
  let component: GetNotebyidComponent;
  let fixture: ComponentFixture<GetNotebyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetNotebyidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetNotebyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
