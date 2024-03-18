import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoCarbonVlistComponent } from './video-carbon-vlist.component';

describe('VideoCarbonVlistComponent', () => {
  let component: VideoCarbonVlistComponent;
  let fixture: ComponentFixture<VideoCarbonVlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoCarbonVlistComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VideoCarbonVlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
