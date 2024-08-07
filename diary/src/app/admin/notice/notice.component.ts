import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-notice',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule,RouterLink],
  templateUrl: './notice.component.html',
  styleUrl: './notice.component.css'
})
export class NoticeComponent {
  noticeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.noticeForm = this.fb.group({
      title: [''],
      Image: [''],
      message: ['']
    });
  }

  onSubmit() {
    console.log(this.noticeForm.value);
    this.noticeForm.reset();
  }
}
