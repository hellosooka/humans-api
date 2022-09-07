import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { TagModel } from './tag.model';
import { TagController } from './tag.controller';

@Module({
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: TagModel,
				schemaOptions: {
					collection: 'Tag'
				}
			}])
	],
	controllers: [TagController]
})

export class TagModule {}
