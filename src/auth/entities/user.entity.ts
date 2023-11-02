import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  // Mongo automaticamente me crea el_id: string
  //
  // ? Dentro de los parentesis, definimos las reglas de los diferentes campos
  @Prop({ unique: true, required: true })
  email: string;
  @Prop({ required: true })
  name: string;
  @Prop({ minlength: 6, required: true })
  password: string;
  @Prop({ default: true })
  isActive: boolean;
  // ? El valor por defecto de esta propiedad será user.
  @Prop({ type: [String], default: ['user'] })
  roles: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
