// src/encoder/encoder.module.ts
import { Module } from '@nestjs/common';
import { EncoderService } from './services/encoder.service';
import { EncoderController } from './controllers/encode.controller';

@Module({
  controllers: [EncoderController],
  providers: [EncoderService],
})
export class EncoderModule {}
