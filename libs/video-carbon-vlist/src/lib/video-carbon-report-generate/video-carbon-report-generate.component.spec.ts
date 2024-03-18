import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoCarbonReportGenerateComponent } from './video-carbon-report-generate.component';

describe('VideoCarbonReportGenerateComponent', () => {
  let component: VideoCarbonReportGenerateComponent;
  let fixture: ComponentFixture<VideoCarbonReportGenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoCarbonReportGenerateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VideoCarbonReportGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
