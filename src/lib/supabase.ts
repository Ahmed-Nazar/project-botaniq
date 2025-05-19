
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ucwgcsitmabvstsxzryp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjd2djc2l0bWFidnN0c3h6cnlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ1MjIyNDAsImV4cCI6MjA2MDA5ODI0MH0.5I_aoTEZ0yzTbANaQwGCUkQWGtWSLMW06gSWF8mmzMs';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Types for our Supabase tables
export type User = {
  id: string;
  username: string;
  avatar_url: string;
  bio?: string;
  is_pro: boolean;
  created_at: string;
};

export type ForumTopic = {
  id: string;
  title: string;
  description?: string;
  category: string;
  created_by: string;
  replies_count: number;
  created_at: string;
  user?: User;
};

export type ForumPost = {
  id: string;
  forum_id: string;
  content: string;
  created_by: string;
  created_at: string;
  user?: User;
};

export type Friend = {
  id: string;
  user_id: string;
  friend_id: string;
  status: string;
  created_at: string;
  friend?: User;
};
