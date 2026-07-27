import { createReducer, on } from '@ngrx/store';
import { Course } from '../models/course.model';
import * as CourseActions from './course.actions';

export interface CourseState {
  courses: Course[];
  error: any;
  loading: boolean;
}

export const initialState: CourseState = {
  courses: [],
  error: null,
  loading: false,
};

export const courseReducer = createReducer(
  initialState,
  on(CourseActions.loadCourses, (state) => ({ ...state, loading: true })),
  on(CourseActions.loadCoursesSuccess, (state, { courses }) => ({
    ...state,
    courses,
    loading: false,
  })),
  on(CourseActions.loadCoursesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
