import { ThumbnailType } from 'types/CharacterType';

export const getImageUrl = (thumbnail: ThumbnailType): string =>
  `${thumbnail.path}.${thumbnail.extension}`;
