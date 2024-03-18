import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoCarbonReportComponent } from './video-carbon-report.component';

describe('VideoCarbonReportComponent', () => {
  let component: VideoCarbonReportComponent;
  let fixture: ComponentFixture<VideoCarbonReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoCarbonReportComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VideoCarbonReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
