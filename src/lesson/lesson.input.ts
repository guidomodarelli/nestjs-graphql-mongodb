import { Field, ID, InputType } from '@nestjs/graphql';
import { IsDateString, IsString, IsUUID, MinLength } from 'class-validator';

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

  @IsUUID('4', { each: true })
  @Field((_type) => [ID], { defaultValue: [] })
  students: string[];
}
