import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoemieComponent } from './noemie.component';

describe('NoemieComponent', () => {
  let component: NoemieComponent;
  let fixture: ComponentFixture<NoemieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoemieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoemieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
