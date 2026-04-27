-- Create leads table for storing service booking requests
CREATE TABLE IF NOT EXISTS public.leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  service_type TEXT NOT NULL,
  service_category TEXT NOT NULL,
  area TEXT,
  address TEXT,
  message TEXT,
  source_page TEXT,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on phone for quick lookups
CREATE INDEX IF NOT EXISTS idx_leads_phone ON public.leads(phone);

-- Create index on status for filtering
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads(status);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads(created_at DESC);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for public form submissions)
CREATE POLICY "Allow public inserts" ON public.leads
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow authenticated users to read all leads
CREATE POLICY "Allow authenticated read" ON public.leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Create policy to allow authenticated users to update leads
CREATE POLICY "Allow authenticated update" ON public.leads
  FOR UPDATE
  TO authenticated
  USING (true);
