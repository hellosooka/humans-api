import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface TagModel extends Base {}
export class TagModel extends TimeStamps {
	
	@prop()
	name: string
}