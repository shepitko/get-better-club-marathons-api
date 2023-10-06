import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { TopCourseModel } from './top-course.model';
import { FindTopCourseDto } from './dto/find-top-course';

@Controller('top-course')
export class TopCourseController {
  
  @Post('create')
  async create(@Body() dto: Omit<TopCourseModel, '_id'>) {

  }

  @Get(':id')
  async get(@Param('id') id: string) {

  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: TopCourseModel) {

  }

  @Delete(':id')
  async delete(@Param('id') id: string) {

  }

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindTopCourseDto) {

  }

}
