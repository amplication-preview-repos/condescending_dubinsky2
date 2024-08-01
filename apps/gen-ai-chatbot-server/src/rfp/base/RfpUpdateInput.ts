/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsEnum,
  IsDate,
} from "class-validator";
import { ResponseUpdateManyWithoutRfpsInput } from "./ResponseUpdateManyWithoutRfpsInput";
import { Type } from "class-transformer";
import { EnumRfpStatus } from "./EnumRfpStatus";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class RfpUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
    type: () => ResponseUpdateManyWithoutRfpsInput,
  })
  @ValidateNested()
  @Type(() => ResponseUpdateManyWithoutRfpsInput)
  @IsOptional()
  @Field(() => ResponseUpdateManyWithoutRfpsInput, {
    nullable: true,
  })
  responses?: ResponseUpdateManyWithoutRfpsInput;

  @ApiProperty({
    required: false,
    enum: EnumRfpStatus,
  })
  @IsEnum(EnumRfpStatus)
  @IsOptional()
  @Field(() => EnumRfpStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  submissionDate?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { RfpUpdateInput as RfpUpdateInput };
