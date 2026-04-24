-- Create leads table for form submissions
CREATE TABLE IF NOT EXISTS public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  service_type TEXT NOT NULL,
  service_category TEXT NOT NULL, -- 'sales' or 'service'
  area TEXT,
  address TEXT,
  message TEXT,
  source_page TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'new'
);

-- Enable RLS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for lead capture forms)
CREATE POLICY "Allow anonymous inserts" ON public.leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all leads (for admin)
CREATE POLICY "Allow authenticated read" ON public.leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_service_type ON public.leads(service_type);
CREATE INDEX IF NOT EXISTS idx_leads_area ON public.leads(area);
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads(status);
