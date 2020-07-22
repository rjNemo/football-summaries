import ISide from "./Side";
import ICompetition from "./Competition";
import IVideo from "./Video";

export default interface IGame extends IVideo {
  url: string;
  thumbnail: string;
  date: string;
  side1: ISide;
  side2: ISide;
  competition: ICompetition;
  videos: IVideo[];
  id: number;
}
