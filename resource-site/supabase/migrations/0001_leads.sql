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

alter table public.leads enable row level security;

-- Lead capture happens server-side in the /api/unlock route. The service
-- role key (if used) bypasses RLS entirely. When only a publishable/anon key
-- is available, this insert-only policy lets the gate write a lead. There is
-- deliberately NO select/update/delete policy, so the public key can never
-- read, change, or delete captured leads.
drop policy if exists "lead capture insert" on public.leads;
create policy "lead capture insert"
  on public.leads
  for insert
  to anon, authenticated
  with check (
    email is not null
    and char_length(email) between 5 and 320
    and email like '%_@_%.__%'
    and resource_id is not null
    and char_length(resource_id) between 1 and 200
    and char_length(resource_title) <= 400
    and source = 'resource-site'
  );
