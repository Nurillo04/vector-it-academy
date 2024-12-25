import { Component } from '@angular/core';
import { StudentCoursesComponent } from './student-courses/student-courses.component';

@Component({
  selector: 'app-students',
  imports: [StudentCoursesComponent],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
  standalone: true,
})
export class StudentsComponent {}
