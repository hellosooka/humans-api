import { prop } from '@typegoose/typegoose'
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'

export interface Authodel extends Base {}
export class AuthModel extends TimeStamps { 

	@prop({unique: true})
	login: string
	
	@prop()
	passwordHash: string
}