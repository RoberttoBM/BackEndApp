import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AsistenciasModule } from './asistencias/asistencias.module';
import { AuthModule } from './auth/auth.module';
import { HelpModule } from './help/help.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "oracle",
    //"username": "dbEdooca", nube
    //"password": "Edooca-2019", nube
    "username":"EdoocaL",
    "password":"123",
    //"connectString": "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=35.184.25.222)(PORT=1521))(CONNECT_DATA=(SID=XE)))", nube
    "connectString": "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SID=XE)))",
    "synchronize": false,
    "logging": true,
    "entities": [__dirname + '/**/**.entity{.ts,.js}']
  }), UserModule, AsistenciasModule, AuthModule, UserModule, HelpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
