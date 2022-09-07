import { prop } from '@typegoose/typegoose'
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'
import { HumanModel } from 'src/human/human.model'

export interface PageModel extends Base {}
export class PageModel extends TimeStamps {
	@prop()
	about: string

	@prop(() => [Number])
	groupsId: number[]
}