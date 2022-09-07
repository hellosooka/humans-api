import { prop } from '@typegoose/typegoose'
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'

export interface FactModel extends Base {}
export class FactModel extends TimeStamps { 

	@prop(() => [Number])
	tagsId: [number]
	
	@prop()
	text: string
}