import { Component, OnInit, inject } from '@angular/core';
import { CourseItemComponent } from '../../sharied/components/course-item/course-item.component';
import {
  ICoursesResponse,
  StudentsService,
} from '@students/services/student.sevice';

@Component({
  selector: 'student-courses',
  templateUrl: 'student-courses.component.html',
  standalone: true,
  imports: [CourseItemComponent],
})
export class StudentCoursesComponent implements OnInit {
  studentService = inject(StudentsService);

  allCourses?: ICoursesResponse;

  ngOnInit() {
    this.studentService.getAllCourses().subscribe((courses) => {
      this.allCourses = courses;
    });
  }
}
