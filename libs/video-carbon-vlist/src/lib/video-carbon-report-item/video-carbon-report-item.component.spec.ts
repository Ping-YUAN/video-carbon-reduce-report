import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoCarbonReportItemComponent } from './video-carbon-report-item.component';

describe('VideoCarbonReportItemComponent', () => {
  let component: VideoCarbonReportItemComponent;
  let fixture: ComponentFixture<VideoCarbonReportItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoCarbonReportItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VideoCarbonReportItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
