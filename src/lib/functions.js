import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://epctbtvtazsmzmfmqrxp.supabase.co'
export const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwY3RidHZ0YXpzbXptZm1xcnhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0MDYyMzAsImV4cCI6MjA1Nzk4MjIzMH0.IEco-aJREkXXK6jwbw-JlL3cskrR22x1vAlsoXX6k7s' //process.env.SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)
