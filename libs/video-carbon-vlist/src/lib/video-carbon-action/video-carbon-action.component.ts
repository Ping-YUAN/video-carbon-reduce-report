import { Component, EventEmitter, OnInit, Output, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lib-video-carbon-action',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './video-carbon-action.component.html',
  styleUrl: './video-carbon-action.component.scss',
})
export class VideoCarbonActionComponent implements OnInit {
  videoTagForm: FormControl = new FormControl();
  tags = input<string[]>();
  @Output()
  filterChanged = new EventEmitter<string[]>();

  @Output()
  generateReport = new EventEmitter();

  ngOnInit(): void {
    this.videoTagForm.valueChanges.subscribe((item) => {
      this.filterChanged.emit(item);
    });
  }
  readyToGenerateReport() {
    this.generateReport.emit();
  }
}
