import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoCarbonCardComponent } from './video-carbon-card.component';

describe('VideoCarbonCardComponent', () => {
  let component: VideoCarbonCardComponent;
  let fixture: ComponentFixture<VideoCarbonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoCarbonCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VideoCarbonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
