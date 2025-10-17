import { Injectable } from '@nestjs/common';
import { execFile } from 'child_process';
import { promisify } from 'util';
import * as path from 'path';

const execFileAsync = promisify(execFile);

@Injectable()
export class EncoderService {
  async encodeVideo(inputPath: string, outputDir: string) {
    const encoderPath = path.resolve('C:/Users/RajBohara/Project/cpp-encoder/encoder.exe');

    try {
      const { stdout, stderr } = await execFileAsync(encoderPath, [inputPath, outputDir]);
      console.log('Encoder output:', stdout);
      if (stderr) console.error('Encoder errors:', stderr);
      return { success: true, message: 'Encoding complete' };
    } catch (error) {
      console.error('Encoding failed:', error);
      return { success: false, message: error.message };
    }
  }
}
