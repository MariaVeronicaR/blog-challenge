import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from "./entities/blog.entity";
import { Repository, Like, ILike  } from 'typeorm';



@Injectable()
export class BlogService {
  private readonly blogs: CreateBlogDto[] = []

  constructor(
    @InjectRepository(Blog)
    private blogRepository: Repository<Blog>,
  ) {}

  async create(createBlogDto: CreateBlogDto) {
    const blog = this.blogRepository.create(createBlogDto);
    return await this.blogRepository.save(blog);
  }

  async findAll() {
    return this.blogRepository.find();
  }

  async findOne(id: number) {
    return await this.blogRepository.findOneBy({ id });
  }

  async searchBlogs(title?: string, content?: string, author?: string): Promise<Blog[]> {
    try {
      return await this.blogRepository.find({
        where: [
          { title: ILike(`%${title}%`)},
          { content: ILike(`%${content}%`)},
          { author: ILike(`%${author}%`)}
      ]
    })
    } catch (error) {
      throw new InternalServerErrorException('Error searching blogs');
    }
  }

  async update(id: number, updateBlogDto: UpdateBlogDto) {
    return await this.blogRepository.update(id, updateBlogDto);
  }

  async remove(id: number) {
    return await this.blogRepository.softDelete(id);
  }
}
