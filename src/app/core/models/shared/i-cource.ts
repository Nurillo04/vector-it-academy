import { ILesson, ILink } from './i-lesson';
import { ITariff } from './i-tariff';

export interface ICource {
  id: string;
  name: string;
  desc: string;
  mentorId: string;
  links : ILink
  tariffs: ITariff[];
  lessons: ILesson[]; 
}
