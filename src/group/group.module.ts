import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { GroupModel } from './group.model';

@Module({
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: GroupModel,
				schemaOptions: {
					collection: 'Group'
				}
			}])
	]
})
export class GroupModule {}
