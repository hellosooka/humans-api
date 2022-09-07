import { Body, Controller, Delete, Get, Inject, Param, Patch, Post } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { createTagDto } from './dto/create-tag.dto';
import { TagModel } from './tag.model';

@Controller('tag')
export class TagController {

	constructor(@Inject(TagModel) private readonly tagModel: ModelType<TagModel>) {}


	@Get('all') //get all tags
	async getAll() {
		
	}

	@Post() //create tag
	async create(@Body() dto: createTagDto ) {
		return this.tagModel.create(dto)
	}

	@Delete(':id')//delete tag from id
	async delete(@Param('id') id: string) {

	}

	@Get(':id')//get name tag from id
	async getNameTag(@Param('id') id: string) {
		
	}
	
	@Patch(':id')//change tag from id
	async changeTag(@Param('id') id: string) {
		
	}

}
