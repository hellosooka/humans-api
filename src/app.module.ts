import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PageModule } from './page/page.module';
import { HumanModule } from './human/human.module';
import { TagModule } from './tag/tag.module';
import { FactModule } from './fact/fact.module';
import { GroupModule } from './group/group.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { getMongoConfig } from './configs/mongo.config';

@Module({
  imports: [
    AuthModule, 
    PageModule, 
    HumanModule, 
    TagModule, 
    FactModule, 
    GroupModule,
    ConfigModule.forRoot(),
    TypegooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfig
    })
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
