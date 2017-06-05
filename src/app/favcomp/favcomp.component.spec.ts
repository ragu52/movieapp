import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavcompComponent } from './favcomp.component';

describe('FavcompComponent', () => {
  let component: FavcompComponent;
  let fixture: ComponentFixture<FavcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
