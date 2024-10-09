type StrapiResponse<Data> = {
  data: Data;
  meta?: {
    pagination: Pagination;
  };
  error?: string;
};

type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

type Timestamps = {
  createdAt: string;
  updatedAt: string;
};

type EntityAttributes = {} & Timestamps;

type Entity<Attributes> = {
  id: number;
  attributes: Attributes;
};

type ImageFormat = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  url: string;
};

type ImageFormats = {
  thumbnail: ImageFormat;
  small: ImageFormat;
  medium: ImageFormat;
  large: ImageFormat;
};

type ImageAttributes = {
  name: string;
  alternativeText?: string;
  caption?: string;
  blurhash: string;
  width: number;
  height: number;
  formats: ImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string | null;
  provider: string;
  provider_metadata: string | null;
} & EntityAttributes;

type Image = {} & ImageAttributes;

type MetaSocial = {
  socialNetwork: string;
  title: string;
  description: string;
  image: Image;
  url: string;
  type: string;
  siteName: string;
};

type StrapiMetaData = {
  metaTitle: string;
  metaDescription: string;
  metaImage: Image;
  canonicalURL: string;
  metaRobots: string;
  structuredData: string;
};

type VideoAttributes = {
  name: string;
  alternativeText: string;
  caption: string;
  width: string;
  height: string;
  formats: string;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: string;
  createdAt: string;
  updatedAt: string;
} & EntityAttributes;

type Video = {} & VideoAttributes;
