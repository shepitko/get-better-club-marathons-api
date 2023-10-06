import { Module } from '@nestjs/common';
import { TopCourseController } from './top-course.controller';

@Module({
  controllers: [TopCourseController]
})
export class TopCourseModule {}
