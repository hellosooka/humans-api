import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { HumanModel } from './human.model';
import { HumanController } from './human.controller';

@Module({
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: HumanModel,
				schemaOptions: {
					collection: 'Human'
				}
			}])
	],
	controllers: [HumanController]
})

export class HumanModule {}
