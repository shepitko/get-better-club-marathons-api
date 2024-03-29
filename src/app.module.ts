import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TopCourseModule } from './top-course/top-course.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';

@Module({
	imports: [AuthModule, TopCourseModule, ProductModule, ReviewModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
