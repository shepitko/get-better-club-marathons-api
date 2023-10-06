import { ProductModel } from './product.model';
import { FindProductDto } from './dto/find-product.dto';
export declare class ProductController {
    create(dto: Omit<ProductModel, '_id'>): Promise<void>;
    get(id: string): Promise<void>;
    update(id: string, dto: ProductModel): Promise<void>;
    delete(id: string): Promise<void>;
    find(dto: FindProductDto): Promise<void>;
}
