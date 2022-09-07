import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { addHumanDto } from './dto/add-human.dto';
import { CreateGroupDto } from './dto/create-group.dto';

@Controller('group')
export class GroupController {

	//Work with group
	@Post('create') //Add group
	async create(@Body() dto: CreateGroupDto) {
		
	}

	@Get('allGroup') //get all group
	async getAllGroup() {

	}
	
	@Get(':id') //Get group
	async get(@Param('id') id: string) {
		
	}
	
	//Work with human
	@Post(':id/addHuman') //Add human in Group
	async addHuman(@Param('id') id: string ,@Body() dto: addHumanDto ) {

	}
}
