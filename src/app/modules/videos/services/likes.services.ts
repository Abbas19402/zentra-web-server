import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Like } from '../entities/like.entity';
import { UserService } from '../../user/services/user.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Video } from '../entities/video.entity';
import  ApiResponse  from 'src/app/common/dto/api-response.dto';

@Injectable()
export class LikesService {
  constructor(
    @InjectModel(Like.name) private likeModel: Model<Like>
    , @InjectModel(Video.name) private videoModel: Model<Video>
  ) {}
 ////////////////////////////////
  public async LikeVideo(videoId: string, userId: string, videoOwnerId: string) {
    const apiResponse = new ApiResponse(null, 'Video liked successfully', 200);
    const res1 = await this.likeModel.create({ videoId, userId, videoOwnerId });
    const res2 = await this.videoModel.findByIdAndUpdate(videoId, { $inc: { likesCount: 1 } }, { new: true });
    if (!res2) {
      throw new NotFoundException(`Video with id: ${videoId} not found!`);
    }
    return res1;
  }
} 