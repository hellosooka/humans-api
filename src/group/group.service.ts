import { Inject, Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { GroupModel } from './group.model';

@Injectable()
export class GroupService {
	constructor(@Inject(GroupModel) private readonly groupModel: ModelType<GroupModel> ) {
		
	}
}
