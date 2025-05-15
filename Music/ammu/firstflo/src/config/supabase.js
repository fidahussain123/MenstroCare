import { createClient } from '@supabase/supabase-js';

// Replace these with your Supabase project URL and anon key
// You can find these in your Supabase project settings -> API
const supabaseUrl = 'https://szaugrvmwyuqkeufsawr.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6YXVncnZtd3l1cWtldWZzYXdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMTgwMDAsImV4cCI6MjA2Mjc5NDAwMH0.abn4FnHpIYT0nIrqhYyWeEwAX6-AHzfY8-UTIQgC4Ng';

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 