import { FactModel } from 'src/fact/fact.model'
import { TagModel } from 'src/tag/tag.model'

export class HumanModel {
	_id: number

	firstname: string
	lastname: string
	
	tagsId: [number]
	factsId: [number]
}