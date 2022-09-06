import { TagModel } from 'src/tag/tag.model'

export class FactModel { 
	_id: number
	tags: [TagModel]
	
	text: string
}