import { IsNumber, IsString } from 'class-validator';

export class CreatePodcastDto {
  @IsString()
  public title: string

  @IsString()
  public audioUrl: string

  @IsString()
  public imageUrl: string

  @IsNumber()
  public numOfListeners?: number
}
