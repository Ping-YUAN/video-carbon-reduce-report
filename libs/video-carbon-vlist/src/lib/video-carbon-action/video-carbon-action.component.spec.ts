import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoCarbonActionComponent } from './video-carbon-action.component';

describe('VideoCarbonActionComponent', () => {
  let component: VideoCarbonActionComponent;
  let fixture: ComponentFixture<VideoCarbonActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoCarbonActionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VideoCarbonActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
