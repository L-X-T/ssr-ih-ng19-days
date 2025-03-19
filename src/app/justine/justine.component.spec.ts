import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustineComponent } from './justine.component';

describe('JustineComponent', () => {
  let component: JustineComponent;
  let fixture: ComponentFixture<JustineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JustineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JustineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
