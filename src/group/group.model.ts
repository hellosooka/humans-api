import { prop } from '@typegoose/typegoose'
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'

export interface GroupModel extends Base {}
export class GroupModel extends TimeStamps {
	
	@prop()
	name: string

	@prop({type: () => [Number]})
	humansId: number[]
}