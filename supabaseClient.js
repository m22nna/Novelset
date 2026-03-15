import { createClient } from "@supabase/supabase-js";
//import { supabase } from "@supabase/supabase-js";
const supabaseUrl = "https://bqxnragrupyinpdpgxpg.supabase.co"; // غيريه بالـ URL الخاص بيكي
const supabaseAnonKey = "sb_publishable_TO_Zdtx-MZes_rvMgOFBTw_JiwWjqiF"; // غيريه بالـ anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);