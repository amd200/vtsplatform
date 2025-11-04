import { ExamResult, Payment } from "@/features/student/types/student.types";
import { Book, Category, Course, UserSession } from "./common.types";

export interface Statistics {
  percentlesson: number;
  TotalCountlessonStudent: number;
  TotalCountlessonForTLMS: number;
  percentExam: number;
  TotalCountExamForTLMS: number;
  TotalCountExamForStudent: number;
  percentGrade: number;
  TotalCountGradeForTLMS: number;
  TotalCountQuizTLMS: number;
  TotalCountGradeQuizTLMS: number;
  TotalStudentBalance: number;
  TotalCountGradeForStudent: number;
  StudentViewPointsCount: number;
  TotalViewPointsCount: number;
  percentViewPoints: number;
  CoursesCount: number;
}

export interface Data {
  // OnlineLessons: any[];
  Statistics: Statistics;
  PurchasableCourse: Course[];
  CourseViewed: Course[];
  SuggestedCourses: Course[];
  UserSessions: UserSession[];
  LastPayments: Payment[];
  StudentExamsResults: ExamResult[];
  Books: Book[];
  Categories: Category[];
  // Packages: any[];
}

export interface DashBoardResponse {
  Data: Data;
}
