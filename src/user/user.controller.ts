import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService:UserService){}

    @Get()
    pan(){
        return this.userService.get();
    }

    @Post()
    post(
        @Body() body
    ){
        return this.userService.post(body);
    }


    @Put(':id')
    update(
        @Param() id,
        @Body() body
    ){
        return this.userService.put(id, body);
    }

    @Delete(':id')
    delete(
        @Param() id
    ){
        return this.userService.delete(id);
    }

}

