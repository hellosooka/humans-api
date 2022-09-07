import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { FactController } from './fact.controller';
import { FactModel } from './fact.model';

@Module({
  controllers: [FactController],
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: FactModel,
				schemaOptions: {
					collection: 'Fact'
				}
			}])
	]
})
export class FactModule {}
