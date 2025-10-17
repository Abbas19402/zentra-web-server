import { Controller, Post, Body } from '@nestjs/common';
import { EncoderService } from '../services/encoder.service';

@Controller('encoder')
export class EncoderController {
  constructor(private encoderService: EncoderService) {}

  @Post()
  async encode(@Body() body: { inputPath: string; outputDir: string }) {
    return this.encoderService.encodeVideo(body.inputPath, body.outputDir);
  }
}
