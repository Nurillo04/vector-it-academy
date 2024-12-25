import { Component, OnInit } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatBadgeModule],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
