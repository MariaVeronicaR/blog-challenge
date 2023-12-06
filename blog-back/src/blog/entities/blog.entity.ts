import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class Blog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column({ type: 'datetime' })
  publicationDate: Date;

  @Column('text')
  content: string;

  @DeleteDateColumn()
  deletedAt: Date;
}

