import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseCard } from './course-card';
import { EnrollmentService } from '../../services/enrollment';

describe('CourseCardComponent', () => {
  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;
  let mockEnrollmentService: any;

  beforeEach(async () => {
    mockEnrollmentService = {
      isEnrolled: vi.fn().mockReturnValue(false),
      enroll: vi.fn(),
      unenroll: vi.fn()
    };

    await TestBed.configureTestingModule({
      imports: [CourseCard], // Since it's standalone, it's imported
      providers: [
        { provide: EnrollmentService, useValue: mockEnrollmentService }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseCard);
    component = fixture.componentInstance;
    // Set required input
    component.course = { id: 1, name: 'Test Course', code: 'TC', credits: 4, gradeStatus: 'passed' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render course name', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Test Course');
  });

  it('should display formatted credits using pipe', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    // We check the paragraphs for the text '4 Credits'
    const paragraphs = Array.from(compiled.querySelectorAll('p'));
    const creditsP = paragraphs.find(p => p.textContent?.includes('Credits:'));
    expect(creditsP?.textContent).toContain('4 Credits');
  });
});
