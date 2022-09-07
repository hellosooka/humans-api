import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { PageModel } from './page.model';

@Module({
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: PageModel,
				schemaOptions: {
					collection: 'Page'
				}
			}])
	]
})
export class PageModule {}
