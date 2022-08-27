import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PageModule } from './page/page.module';
import { GroupsModule } from './groups/groups.module';
import { HumansModule } from './humans/humans.module';
import { FactsModule } from './facts/facts.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [AuthModule, PageModule, GroupsModule, HumansModule, FactsModule, TagsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
