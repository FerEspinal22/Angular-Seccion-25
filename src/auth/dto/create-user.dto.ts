import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  // ? Decorador que valida que es de tipo email
  @IsEmail()
  email: string;
  @IsString()
  name: string;
  @MinLength(6)
  password: string;
}
