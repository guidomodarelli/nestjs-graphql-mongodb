import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateStudentInput } from './create-student.input';
import { StudenEntity } from './student.entity';
import { StudentType } from './student.type';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudenEntity)
    private studentRepository: Repository<StudenEntity>,
  ) {}

  getStudent(id: string): Promise<StudentType> {
    return this.studentRepository.findOneBy({ id });
  }

  getStudents(): Promise<StudentType[]> {
    return this.studentRepository.find();
  }

  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<StudentType> {
    const { firstname, lastname } = createStudentInput;
    const student = this.studentRepository.create({
      id: uuid(),
      firstname,
      lastname,
    });

    return this.studentRepository.save(student);
  }
}
