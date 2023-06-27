import IAnswer from './Answer';

export default interface IQuestion {
  id: string;
  title: string;
  description?: string;
  audio?: string | File;
  image?: string | File;
  answers: IAnswer[];
}
