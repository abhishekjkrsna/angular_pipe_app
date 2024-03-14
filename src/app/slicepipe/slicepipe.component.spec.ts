import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlicepipeComponent } from './slicepipe.component';

describe('SlicepipeComponent', () => {
  let component: SlicepipeComponent;
  let fixture: ComponentFixture<SlicepipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlicepipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlicepipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
