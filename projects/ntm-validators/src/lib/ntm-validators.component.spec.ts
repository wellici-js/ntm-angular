import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NtmValidatorsComponent } from './ntm-validators.component';

describe('NtmValidatorsComponent', () => {
  let component: NtmValidatorsComponent;
  let fixture: ComponentFixture<NtmValidatorsComponent>;

  beforeEach(async(() => {
    void TestBed.configureTestingModule({
      declarations: [NtmValidatorsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NtmValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    void expect(component).toBeTruthy();
  });
});
