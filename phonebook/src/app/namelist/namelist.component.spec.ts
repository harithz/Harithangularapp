import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamelistComponent } from './namelist.component';

describe('NamelistComponent', () => {
  let component: NamelistComponent;
  let fixture: ComponentFixture<NamelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
