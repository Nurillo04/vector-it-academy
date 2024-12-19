export interface ILesson {
  id: string;
  name: string;
  desc: string;
  date: string;
  links: ILink[];
}

export interface ILink {
  id: string;
  name: string;
  link: string;
  desc?: string;
}
