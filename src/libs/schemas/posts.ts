import mongoose from 'mongoose';
import {PostType} from '@/types/post';
const postSchema = new mongoose.Schema<PostType>({
  name: {type: String, required: true},
  profile: {type: String, required: true},
  title: {type: String, required: true},
  category: {type: String, required: true},
  description: {type: String, required: true},
  thumbnail: {type: String, required: true},
});

export const Post = mongoose.models?.Post || mongoose.model('Post', postSchema);
