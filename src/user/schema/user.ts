import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

export type UserDocument = User & Document 

@Schema({ timestamps: true })
export class User {
    @Prop({
        type: String,
        trim: true,
        maxLength: 200
    })
    name: string;

    @Prop({
        type: String,
        trim: true,
        maxLength: 200,
        default: 0
    })
    age: string;
}

export const UserSchema = SchemaFactory.createForClass(User);