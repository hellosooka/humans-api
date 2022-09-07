import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { HumanModel } from './human.model';

@Module({
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: HumanModel,
				schemaOptions: {
					collection: 'Human'
				}
			}])
	]
})

export class HumanModule {}
