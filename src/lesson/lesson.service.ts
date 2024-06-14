import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LessonEntity } from './lesson.entity';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(LessonEntity)
    private lessonRepository: Repository<LessonEntity>,
  ) {}

  async createLesson(name, startDate, endDate): Promise<LessonEntity> {
    const lesson = this.lessonRepository.create({
      name,
      startDate,
      endDate,
    });

    return this.lessonRepository.save(lesson);
  }
}
