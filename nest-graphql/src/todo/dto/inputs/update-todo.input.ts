import { Field, InputType, Int } from '@nestjs/graphql';
import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, Min } from 'class-validator';

@InputType()
export class UpdateTodoInput {

    @Field( () => Int )
    @IsInt()
    @Min(1)
    id: number;


    @Field( () => String, { description: 'What needs to be done', nullable: true })
    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    @IsOptional()
    description?: string;

    @Field( () => Boolean, { nullable: true })
    @IsOptional()
    @IsBoolean()
    done?: boolean;


}