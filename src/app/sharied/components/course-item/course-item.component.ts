import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ICource } from '@models/shared/i-cource';

@Component({
  selector: 'app-course-item',
  templateUrl: 'course-item.component.html',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule],
})
export class CourseItemComponent implements OnInit {
  @Input() item!: ICource;
  @Input() purchased: boolean = false;

  ngOnInit() {}
}
