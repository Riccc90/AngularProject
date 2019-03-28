import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuncipioAddComponent } from './muncipio-add.component';

describe('MuncipioAddComponent', () => {
  let component: MuncipioAddComponent;
  let fixture: ComponentFixture<MuncipioAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuncipioAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuncipioAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
