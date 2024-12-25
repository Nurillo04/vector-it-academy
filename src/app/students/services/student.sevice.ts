import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ICource } from '@models/shared/i-cource';

export interface ICoursesResponse {
  purchased: ICource[];
  others: ICource[];
}

const res: ICoursesResponse = {
  purchased: [
    {
      id: 'id1',
      name: 'Angular Advanced',
      desc: 'Lorem adas dsflskald goapsdjasod lkjsdflkjsdledjaslkd asld asdfasdas',
      mentorId: 'mentorid1',
      mentorName: 'Umar Sadullayev',
      imgSrc: 'assets/images/angular.svg',
      // Details
      tariffs: [],
      links: [],
      lessons: [],
    },
  ],
  others: [
    {
      id: 'id3',
      name: 'React Advanced',
      desc: 'Lorem adas dsflskald goapsdjasod lkjsdflkjsdledjaslkd asld asdfasdas',
      mentorId: 'mentorid1',
      mentorName: 'Nurillo Aminjonov',
      imgSrc: 'assets/images/angular.svg',
      // Details
      tariffs: [],
      links: [],
      lessons: [],
    },
    {
      id: 'id4',
      name: 'Nodejs Advanced',
      desc: 'Lorem adas dsflskald goapsdjasod lkjsdflkjsdledjaslkd asld asdfasdas',
      mentorId: 'mentorid1',
      mentorName: 'Husniddin Qurbonboyev',
      imgSrc: 'assets/images/angular.svg',
      // Details
      tariffs: [],
      links: [],
      lessons: [],
    },
  ],
};

@Injectable({ providedIn: 'root' })
export class StudentsService {
  private httpClient$ = inject(HttpClient);

  getAllCourses(): Observable<ICoursesResponse> {
    return of(res);
    // this.httpClient$.get<ICoursesResponse>(
    //   "api"
    // );
  }
}
