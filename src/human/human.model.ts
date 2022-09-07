import { prop } from '@typegoose/typegoose'
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'
import { FactModel } from 'src/fact/fact.model'
import { TagModel } from 'src/tag/tag.model'

export interface HumanModel extends Base {}
export class HumanModel extends TimeStamps {

	@prop()
	firstname: string
	@prop()
	lastname: string
	
	@prop(() => [Number])
	tagsId: [number]
	@prop(() => [Number])
	factsId: [number]
}