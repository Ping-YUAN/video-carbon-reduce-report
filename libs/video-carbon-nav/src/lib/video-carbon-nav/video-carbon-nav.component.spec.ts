import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoCarbonNavComponent } from './video-carbon-nav.component';

describe('VideoCarbonNavComponent', () => {
  let component: VideoCarbonNavComponent;
  let fixture: ComponentFixture<VideoCarbonNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoCarbonNavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VideoCarbonNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
