import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';
import { CreateLessonInput } from './lesson.input';

@Resolver((_of) => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  @Query((_returns) => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonService.getLesson(id);
  }

  @Mutation((_returns) => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ): Promise<LessonType> {
    return this.lessonService.createLesson(createLessonInput);
  }
}
