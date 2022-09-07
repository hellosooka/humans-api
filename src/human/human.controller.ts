import { Body, Controller, Delete, Get, Inject, Param, Post } from '@nestjs/common';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { addFactToHumanDto } from './dto/add-fact.dto';
import { addTagToHumanDto } from './dto/add-tag.dto';
import { CreateHumanDto } from './dto/create-human.dto';
import { HumanModel } from './human.model';

@Controller('human')
export class HumanController {
	
	constructor(@Inject(HumanModel) private readonly humanModel: ModelType<HumanModel>) {}

	// * Work with human

	@Post()
	async create(dto: CreateHumanDto): Promise<DocumentType<HumanModel>> {
		return this.humanModel.create()
	}

	@Get(':id')
	async get(@Param('id') id:string ) {

	}

	@Delete(':id')
	async delete(@Param('id') id:string ) {
		
	}

	// * Work with tags

	@Get(':id/tags') //Get all tags from Human
	async getAllTags(@Param('id') id: string ) {

	}

	@Post(':id/tag') //Add tag from Human
	async addTag(@Param('id') id: string, @Body() dto: addTagToHumanDto ) {
		
	}

	@Delete(':id/:idTag') // Del tag from Human
	async deleteTag(@Param('id') id: string, @Param('idTag') idTag: string ) {
		
	}

	// * Work with fact

	@Post(':id/fact')
	async addFact(@Param('id') id: string, @Body() dto: addFactToHumanDto ) {
		
	}

}
