import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { Course } from '../../models/course.model';
import { Highlight } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { EnrollmentService } from '../../services/enrollment';

@Component({
  selector: 'app-course-card',
  imports: [NgClass, NgStyle, Highlight, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard implements OnChanges {
  @Input({ required: true }) course!: Course;
  @Output() enrollRequested = new EventEmitter<number>();
  
  isExpanded = false;

  constructor(public enrollmentService: EnrollmentService) {}

  get cardClasses() {
    // Getters keep templates clean by moving complex logic into the class
    return {
      'card--enrolled': this.enrollmentService.isEnrolled(this.course?.id),
      'card--full': this.course?.credits >= 4,
      'expanded': this.isExpanded
    };
  }

  toggleEnroll(event: Event) {
    event.stopPropagation();
    if (this.enrollmentService.isEnrolled(this.course.id)) {
      this.enrollmentService.unenroll(this.course.id);
    } else {
      this.enrollmentService.enroll(this.course.id);
      this.enrollRequested.emit(this.course.id); // Keeping the output for logging in parent
    }
  }

  toggleDetails(event: Event) {
    event.stopPropagation();
    this.isExpanded = !this.isExpanded;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log('Course changed from', changes['course'].previousValue, 'to', changes['course'].currentValue);
    }
  }
}
