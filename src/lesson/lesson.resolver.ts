import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver((_of) => LessonType)
export class LessonResolver {
  @Query((_returns) => LessonType)
  lesson(): LessonType {
    return {
      id: '',
      name: '',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }

  // @Mutation((_returns) => LessonType)
  // createLesson(): LessonType {

  // }
}
