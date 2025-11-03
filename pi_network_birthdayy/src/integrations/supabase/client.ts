import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zrwoatjwpvdquoeuomcy.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpyd29hdGp3cHZkcXVvZXVvbWN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5NDIyMjgsImV4cCI6MjA3NzUxODIyOH0.AKgSoDvWUQ1ul_n7EcGKBV7qLgtO5y9xQsRQyMlQbq4'

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";
