import { Body, Controller, Get, Logger, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';


import { Like } from '../entities/like.entity';
import { LikesService } from '../services/likes.services';

  
@Controller('Likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

 @Post("user/like/:videoId/:userId")
 likeVideo(@Param('videoId') videoId: string, @Param('userId') userId: string, @Body('videoOwnerId') videoOwnerId: string)
  {
    try {
      const result = this.likesService.LikeVideo(videoId, userId, videoOwnerId);
      return result
    } catch (error) {
      Logger.error(error)
    }
  }
}