export interface PodcastsInterface {
  _id: string;
  title: string;
  numOfListeners?: number;
  audioUrl: string;
  imageUrl: string;
  isFeatured?: boolean,
  isTrending?: boolean,
  isFavourite?: boolean,
  createdAt?: Date;
  updatedAt?: Date;
}
