import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, IsString, MinLength } from 'class-validator';

@InputType()
export class CreateLessonInput {
  @MinLength(1)
  @IsString()
  @Field()
  name: string;

  @IsDateString()
  @IsString()
  @Field()
  startDate: string;

  @IsDateString()
  @IsString()
  @Field()
  endDate: string;
}
