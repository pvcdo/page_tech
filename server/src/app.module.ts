import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DiepServiceModule } from './diep-service/diep-service.module';
import { ControleCadmsModule } from './controle-cadms/controle-cadms.module';
import { HistoricoStatusModule } from './historico-status/historico-status.module';
import { ControleSigespModule } from './controle_sigesp/controle_sigesp.module';

@Module({
  imports: [UserModule, DiepServiceModule, ControleCadmsModule, HistoricoStatusModule, ControleSigespModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
