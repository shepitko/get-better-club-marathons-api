export enum TopCourseCategory {
  Marathon = 'marathon',
  Course = 'course',
  MasterClass = 'master-class',
}

export class TopCourseModel {
  firstCategory: TopCourseCategory;
  secondCategory: string;
  title: string;
  category: string;
  hh?: {
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
  };
  advantages: {
    title: string;
    description: string;
  }[];
  seoText: string;
  tagsTitle: string;
  tags: string[];
}
