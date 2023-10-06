import { ReviewModel } from './review.model';
export declare class ReviewController {
    create(dto: Omit<ReviewModel, '_id'>): Promise<void>;
    get(productId: string): Promise<void>;
    delete(id: string): Promise<void>;
}
