import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class LessonEntity {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn({
    generated: 'uuid',
  })
  id: string;

  @Column()
  name: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;
}
