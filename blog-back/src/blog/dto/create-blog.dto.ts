import { IsString, IsDateString } from "class-validator";

export class CreateBlogDto {

    @IsString()
    title: string;

    @IsString()
    author: string;

    @IsString()
    content: string;
}
