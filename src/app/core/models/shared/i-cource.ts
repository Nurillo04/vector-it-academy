import { ILesson } from './i-lesson';
import { ILink } from './i-links';
import { ITariff } from './i-tariff';

export interface ICource {
  id: string;
  name: string;
  desc: string;
  mentorId: string;
  mentorName: string;
  imgSrc: string;
  links: ILink[];
  tariffs: ITariff[];
  lessons: ILesson[];
}
