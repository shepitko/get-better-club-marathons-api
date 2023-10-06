import { AuthDto } from './dto/auth.dto';
export declare class AuthController {
    registration(dto: AuthDto): Promise<void>;
    login(dto: AuthDto): Promise<void>;
}
