import { Controller, Get, Post, Body, Patch, Param, Delete,Query, Logger, InternalServerErrorException } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog } from "./entities/blog.entity";


@Controller('blog')
export class BlogController {
  private logger = new Logger(`HTTP`);

  constructor(private readonly blogService: BlogService) {}

  @Post()
  create(@Body() createBlogDto: CreateBlogDto) {
    Logger.log("Creating blog")
    return this.blogService.create(createBlogDto);
  }

  @Get()
  async searchBlogs(@Query('title') title: string, @Query('content') content: string, @Query('author') author: string): Promise<Blog[]> {
    try {
      Logger.log(`Logging HTTP request ${title} ${content} ${author}`);
      const result = await this.blogService.searchBlogs(title, content, author);
      return result;
    } catch (error) {
      Logger.error(`Error in searchBlogs: ${error.message}`, error.stack, 'BlogController');
      throw new InternalServerErrorException('Internal Server Error');
    }
  } 
  
  @Get('all')
  findAll() {
    Logger.log("Logging HTTP request")
    return this.blogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.blogService.findOne(id);
  }

  
  
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateBlogDto: UpdateBlogDto) {
    return this.blogService.update(id, updateBlogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.blogService.remove(id);
  }
}
