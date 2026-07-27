import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Course } from '../../models/course.model';
import { CourseCard } from '../../components/course-card/course-card';
import * as CourseActions from '../../store/course.actions';
import { selectAllCourses, selectCoursesLoading, selectCoursesError } from '../../store/course.selectors';

@Component({
  selector: 'app-course-list',
  imports: [CourseCard, AsyncPipe],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  courses$: Observable<Course[]>;
  isLoading$: Observable<boolean>;
  error$: Observable<any>;
  selectedCourseId: number | null = null;

  constructor(
    private store: Store,
    private router: Router
  ) {
    this.courses$ = this.store.select(selectAllCourses);
    this.isLoading$ = this.store.select(selectCoursesLoading);
    this.error$ = this.store.select(selectCoursesError);
  }

  ngOnInit() {
    this.store.dispatch(CourseActions.loadCourses());
  }

  onEnroll(courseId: number) {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }

  goToCourse(courseId: number) {
    this.router.navigate(['courses', courseId]);
  }
}
