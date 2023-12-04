import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';

@Controller('courses')
export class CoursesController {
    constructor(){}
    @UseGuards(AuthenticatedGuard)
    @Get()
    async getCourses(){
        //get courses from courses repo if auth

    }
}
