import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { DomainModule } from './domain/domain.module';

@Module({
  imports: [DomainModule],
  providers: [PrismaService],
})
export class AppModule {}
