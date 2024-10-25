// src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Ensure you include the protocol
const supabaseUrl = 'https://aevmnlodwqaybapghazj.supabase.co'; // Add 'https://'
const supabaseKey = process.env.SUPABASE_KEY; // Ensure this key is set in your environment variables

// Create the Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
