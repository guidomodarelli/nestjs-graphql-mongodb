import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudenEntity } from './student.entity';
import { StudentResolver } from './student.resolver';
import { StudentService } from './student.service';

@Module({
  imports: [TypeOrmModule.forFeature([StudenEntity])],
  providers: [StudentResolver, StudentService],
})
export class StudentModule {}
