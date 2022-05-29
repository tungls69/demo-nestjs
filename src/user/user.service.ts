import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schema/user';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ){}

    async get():Promise<UserDocument[]>{
        return this.userModel.find();
    }

    async post(body):Promise<UserDocument>{
        // let age = body.age + 2
        return await this.userModel.create(body);
    }

    async put(id,body):Promise<any>{
        return this.userModel.findOneAndUpdate(id,body,{new:true});
    }

    async delete(id):Promise<any>{
        return this.userModel.findOneAndDelete(id);
    }
}


