import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('tag')
export class TagController {


	@Get('all')
	async getAll() {
		
	}

	@Post(':id')
	async add(@Param('id') id: string) {
		
	}

	@Delete(':id')
	async delete(@Param('id') id: string) {

	}

	@Get(':id')
	async getNameTag(@Param('id') id: string) {
		
	}

	
	@Patch(':id')
	async changeTag(@Param('id') id: string) {
		
	}

}
