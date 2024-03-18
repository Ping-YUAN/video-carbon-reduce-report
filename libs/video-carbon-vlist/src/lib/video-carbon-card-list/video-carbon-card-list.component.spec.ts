import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoCarbonCardListComponent } from './video-carbon-card-list.component';

describe('VideoCarbonCardListComponent', () => {
  let component: VideoCarbonCardListComponent;
  let fixture: ComponentFixture<VideoCarbonCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoCarbonCardListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VideoCarbonCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
