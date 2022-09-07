import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { GroupModel } from './group.model';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';

@Module({
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: GroupModel,
				schemaOptions: {
					collection: 'Group'
				}
			}])
	],
	providers: [GroupService],
	controllers: [GroupController]
})
export class GroupModule {}
