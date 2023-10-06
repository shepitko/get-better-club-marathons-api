import { TopCourseModel } from './top-course.model';
import { FindTopCourseDto } from './dto/find-top-course';
export declare class TopCourseController {
    create(dto: Omit<TopCourseModel, '_id'>): Promise<void>;
    get(id: string): Promise<void>;
    update(id: string, dto: TopCourseModel): Promise<void>;
    delete(id: string): Promise<void>;
    find(dto: FindTopCourseDto): Promise<void>;
}
