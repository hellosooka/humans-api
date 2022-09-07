import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { TagModel } from './tag.model';

@Module({
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: TagModel,
				schemaOptions: {
					collection: 'Tag'
				}
			}])
	]
})

export class TagModule {}
