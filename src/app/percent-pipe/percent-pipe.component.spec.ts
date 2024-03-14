import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentPipeComponent } from './percent-pipe.component';

describe('PercentPipeComponent', () => {
  let component: PercentPipeComponent;
  let fixture: ComponentFixture<PercentPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PercentPipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PercentPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
