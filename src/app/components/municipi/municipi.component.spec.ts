import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipiComponent } from './municipi.component';

describe('MunicipiComponent', () => {
  let component: MunicipiComponent;
  let fixture: ComponentFixture<MunicipiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunicipiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
