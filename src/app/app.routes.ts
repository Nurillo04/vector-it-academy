import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { StudentsComponent } from './students/students/students.component';
import { MentorComponent } from './mentor/mentor/mentor.component';

export const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'student',
    component: StudentsComponent,
  },
  {
    path: 'mentor',
    component: MentorComponent,
  },
];
