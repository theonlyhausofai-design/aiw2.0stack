-- Leads captured by the resource site's email gate.
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  resource_id text not null,
  resource_title text not null,
  source text not null default 'resource-site',
  created_at timestamptz not null default now()
);

create index if not exists leads_email_idx on public.leads (email);
create index if not exists leads_created_at_idx on public.leads (created_at desc);

-- The site writes with the service role key (server-side only), which
-- bypasses RLS. Enable RLS and add no public policies so anon/auth clients
-- cannot read or write this table directly.
alter table public.leads enable row level security;
