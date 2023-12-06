import { IsString, IsDateString } from "class-validator";

export class CreateBlogDto {

    @IsString()
    title: string;

    @IsString()
    author: string;

    @IsDateString()
    publicationDate: Date;

    @IsString()
    content: string;
}
