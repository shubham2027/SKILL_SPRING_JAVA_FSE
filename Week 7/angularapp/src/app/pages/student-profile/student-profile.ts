import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../../services/enrollment';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-student-profile',
  imports: [],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css',
})
export class StudentProfile implements OnInit {
  enrolledCourses: Course[] = [];

  constructor(public enrollmentService: EnrollmentService) {}

  ngOnInit() {
    this.enrollmentService.getEnrolledCourses().subscribe(courses => {
      this.enrolledCourses = courses;
    });
  }
}
