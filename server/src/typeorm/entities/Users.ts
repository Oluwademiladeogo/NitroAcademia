import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column({ unique: true })
  email: string;
  @Column({ unique: true })
  number: string;
  @Column()
  password: string;
  @Column({ nullable: true })
  feedback: string;
  @Column()
  dateJoined: Date;
  @Column({ type: 'json', nullable: true })
  courses: Array<string>;
}
