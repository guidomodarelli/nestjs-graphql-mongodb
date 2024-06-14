import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { AssignStudentsToLessonInput } from './assign-students-to-lesson.input';
import { LessonEntity } from './lesson.entity';
import { CreateLessonInput } from './lesson.input';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';
import { StudentService } from 'src/student/student.service';

@Resolver((_of) => LessonType)
export class LessonResolver {
  constructor(
    private lessonService: LessonService,
    private studentService: StudentService,
  ) {}

  @Query((_returns) => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonService.getLesson(id);
  }

  @Query((_returns) => [LessonType])
  lessons() {
    return this.lessonService.getLessons();
  }

  @Mutation((_returns) => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ): Promise<LessonType> {
    return this.lessonService.createLesson(createLessonInput);
  }

  @Mutation((_returns) => LessonType)
  assignStudentsToLesson(
    @Args('assignStudentsToLessonInput')
    assignStudentsToLessonInput: AssignStudentsToLessonInput,
  ) {
    const { lessonId, studentIds } = assignStudentsToLessonInput;
    return this.lessonService.assignStudentsToLesson(lessonId, studentIds);
  }

  /*
    In a query or mutation:
    students {
      firstname
      lastname
    }
  */
  @ResolveField()
  async students(@Parent() lesson: LessonEntity) {
    return this.studentService.getManyStudents(lesson.students);
  }
}
