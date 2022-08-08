export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface Links {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface TopicSubmissions {}

export interface Links2 {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface Social {
  instagram_username: string;
  portfolio_url: string;
  twitter_username: string;
  paypal_email?: any;
}

export interface User {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  location: string;
  links: Links2;
  profile_image: ProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
}

export interface Exif {
  make: string;
  model: string;
  name: string;
  exposure_time: string;
  aperture: string;
  focal_length: string;
  iso: number;
}

export interface Position {
  latitude: number;
  longitude: number;
}

export interface Location {
  title: string;
  name: string;
  city: string;
  country: string;
  position: Position;
}

export interface Meta {
  index: boolean;
}

export interface Type {
  slug: string;
  pretty_slug: string;
}

export interface Category {
  slug: string;
  pretty_slug: string;
}

export interface Subcategory {
  slug: string;
  pretty_slug: string;
}

export interface Ancestry {
  type: Type;
  category: Category;
  subcategory: Subcategory;
}

export interface Urls2 {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface Links3 {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface TopicSubmissions2 {}

export interface Links4 {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage2 {
  small: string;
  medium: string;
  large: string;
}

export interface Social2 {
  instagram_username?: any;
  portfolio_url: string;
  twitter_username?: any;
  paypal_email?: any;
}

export interface User2 {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username?: any;
  portfolio_url: string;
  bio?: any;
  location?: any;
  links: Links4;
  profile_image: ProfileImage2;
  instagram_username?: any;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social2;
}

export interface CoverPhoto {
  id: string;
  created_at: Date;
  updated_at: Date;
  promoted_at: Date;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: Urls2;
  links: Links3;
  categories: any[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship?: any;
  topic_submissions: TopicSubmissions2;
  user: User2;
}

export interface Source {
  ancestry: Ancestry;
  title: string;
  subtitle: string;
  description: string;
  meta_title: string;
  meta_description: string;
  cover_photo: CoverPhoto;
}

export interface Tag {
  type: string;
  title: string;
  source: Source;
}

export interface Type2 {
  slug: string;
  pretty_slug: string;
}

export interface Category2 {
  slug: string;
  pretty_slug: string;
}

export interface Subcategory2 {
  slug: string;
  pretty_slug: string;
}

export interface Ancestry2 {
  type: Type2;
  category: Category2;
  subcategory: Subcategory2;
}

export interface Urls3 {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface Links5 {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface TopicSubmissions3 {}

export interface Links6 {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage3 {
  small: string;
  medium: string;
  large: string;
}

export interface Social3 {
  instagram_username?: any;
  portfolio_url: string;
  twitter_username?: any;
  paypal_email?: any;
}

export interface User3 {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username?: any;
  portfolio_url: string;
  bio?: any;
  location?: any;
  links: Links6;
  profile_image: ProfileImage3;
  instagram_username?: any;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social3;
}

export interface CoverPhoto2 {
  id: string;
  created_at: Date;
  updated_at: Date;
  promoted_at: Date;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: Urls3;
  links: Links5;
  categories: any[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship?: any;
  topic_submissions: TopicSubmissions3;
  user: User3;
}

export interface Source2 {
  ancestry: Ancestry2;
  title: string;
  subtitle: string;
  description: string;
  meta_title: string;
  meta_description: string;
  cover_photo: CoverPhoto2;
}

export interface TagsPreview {
  type: string;
  title: string;
  source: Source2;
}

export interface Type3 {
  slug: string;
  pretty_slug: string;
}

export interface Category3 {
  slug: string;
  pretty_slug: string;
}

export interface Subcategory3 {
  slug: string;
  pretty_slug: string;
}

export interface Ancestry3 {
  type: Type3;
  category: Category3;
  subcategory: Subcategory3;
}

export interface Urls4 {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface Links7 {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface Nature {
  status: string;
  approved_on: Date;
}

export interface Wallpapers {
  status: string;
  approved_on: Date;
}

export interface ColorOfWater {
  status: string;
  approved_on: Date;
}

export interface Architecture {
  status: string;
  approved_on: Date;
}

export interface TexturesPatterns {
  status: string;
  approved_on: Date;
}

export interface TopicSubmissions4 {
  nature: Nature;
  wallpapers: Wallpapers;
  color_of_water: ColorOfWater;
  architecture: Architecture;
  textures_patterns: TexturesPatterns;
}

export interface Links8 {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage4 {
  small: string;
  medium: string;
  large: string;
}

export interface Social4 {
  instagram_username: string;
  portfolio_url: string;
  twitter_username: string;
  paypal_email?: any;
}

export interface User4 {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  location: string;
  links: Links8;
  profile_image: ProfileImage4;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social4;
}

export interface CoverPhoto3 {
  id: string;
  created_at: Date;
  updated_at: Date;
  promoted_at?: Date;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: Urls4;
  links: Links7;
  categories: any[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship?: any;
  topic_submissions: TopicSubmissions4;
  user: User4;
}

export interface Source3 {
  ancestry: Ancestry3;
  title: string;
  subtitle: string;
  description: string;
  meta_title: string;
  meta_description: string;
  cover_photo: CoverPhoto3;
}

export interface Tag2 {
  type: string;
  title: string;
  source: Source3;
}

export interface Links9 {
  self: string;
  html: string;
  photos: string;
  related: string;
}

export interface Links10 {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage5 {
  small: string;
  medium: string;
  large: string;
}

export interface Social5 {
  instagram_username?: any;
  portfolio_url: string;
  twitter_username: string;
  paypal_email?: any;
}

export interface User5 {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  location?: any;
  links: Links10;
  profile_image: ProfileImage5;
  instagram_username?: any;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social5;
}

export interface Urls5 {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface Links11 {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface TopicSubmissions5 {}

export interface Links12 {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage6 {
  small: string;
  medium: string;
  large: string;
}

export interface Social6 {
  instagram_username: string;
  portfolio_url: string;
  twitter_username: string;
  paypal_email?: any;
}

export interface User6 {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  location: string;
  links: Links12;
  profile_image: ProfileImage6;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social6;
}

export interface CoverPhoto4 {
  id: string;
  created_at: Date;
  updated_at: Date;
  promoted_at?: Date;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: Urls5;
  links: Links11;
  categories: any[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship?: any;
  topic_submissions: TopicSubmissions5;
  user: User6;
}

export interface Urls6 {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface PreviewPhoto {
  id: string;
  created_at: Date;
  updated_at: Date;
  blur_hash: string;
  urls: Urls6;
}

export interface Result {
  id: string;
  title: string;
  description: string;
  published_at: Date;
  last_collected_at: Date;
  updated_at: Date;
  curated: boolean;
  featured: boolean;
  total_photos: number;
  private: boolean;
  share_key: string;
  tags: Tag2[];
  links: Links9;
  user: User5;
  cover_photo: CoverPhoto4;
  preview_photos: PreviewPhoto[];
}

export interface RelatedCollections {
  total: number;
  type: string;
  results: Result[];
}

export interface IPhoto {
  id: string;
  created_at: Date;
  updated_at: Date;
  promoted_at: Date;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: Urls;
  links: Links;
  categories: any[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship?: any;
  topic_submissions: TopicSubmissions;
  user: User;
  exif: Exif;
  location: Location;
  meta: Meta;
  public_domain: boolean;
  tags: Tag[];
  tags_preview: TagsPreview[];
  related_collections: RelatedCollections;
  views: number;
  downloads: number;
  topics: any[];
}
