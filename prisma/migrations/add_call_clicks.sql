-- Create call_clicks table for tracking phone number click events
CREATE TABLE IF NOT EXISTS call_clicks (
  id TEXT PRIMARY KEY,
  phone TEXT NOT NULL,
  page TEXT NOT NULL,
  referrer TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  device TEXT,
  browser TEXT,
  country TEXT,
  ip TEXT,
  session_id TEXT NOT NULL,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_call_clicks_created ON call_clicks ("createdAt");
CREATE INDEX IF NOT EXISTS idx_call_clicks_page ON call_clicks (page);
CREATE INDEX IF NOT EXISTS idx_call_clicks_session ON call_clicks (session_id);
