# Reusable SEO + AEO + GEO Checklist (Best Practices)

Use this for **every website** — local service, SaaS, e-commerce, or content site.  
Duplicate per project; mark `[x]` as you complete items.

**Rule:** If a row has a linked sub-audit below, **run the sub-audit before marking done.**  
One-line optional items are how gaps slip through (e.g. `llms.txt` without NAP verification).

**Interactive canvases (Cursor):**
- [Full checklist](/Users/mac/.cursor/projects/Users-mac-Documents-service/canvases/nextjs-seo-aeo-geo-checklist.canvas.tsx)
- [Quick-start MVP](/Users/mac/.cursor/projects/Users-mac-Documents-service/canvases/nextjs-seo-aeo-geo-quick-start.canvas.tsx)
- [Enterprise governance](/Users/mac/.cursor/projects/Users-mac-Documents-service/canvases/nextjs-seo-aeo-geo-enterprise.canvas.tsx)
- [Validation scorecard](/Users/mac/.cursor/projects/Users-mac-Documents-service/canvases/checklist-validation.canvas.tsx)

**Related:** `docs/prompt-bank.md` (LLM citation testing)

---

## Mandatory audit workflow (run in this order)

| Step | When | What to run |
|------|------|-------------|
| 1 | New project / rebrand | Fill [Project record](#project-record-fill-in-per-site) |
| 2 | Before first launch | [Tier 1](#tier-1--quick-start-10-checks-launch-mvp) + all sub-audits |
| 3 | Before every deploy | [Pre-deploy regression](#pre-deploy-regression-gate) |
| 4 | After every deploy | [Post-deploy smoke test](#post-deploy-smoke-test-30-minutes) |
| 5 | Monthly | Tier 2 spot-check + [GSC Enhancements](#gsc--rich-results-audit) |
| 6 | Quarterly | [Tier 3](#tier-3--enterprise-governance-ongoing) + [llms.txt audit](#llms-txt-verification-audit) |

**Source-of-truth order (never reverse):**  
`lib/constants.ts` (NAP) → contact page → GBP → citations → `llms.txt` / JSON-LD

---

## Project record (fill in per site)

| Field | Value |
|-------|-------|
| Site name | |
| Production URL (HTTPS) | |
| Business type | Local / National / Global |
| Primary city / region | |
| Phone (E.164) | |
| Address (full NAP) | |
| Email | |
| GBP profile URL | |
| Launch date | |
| GSC property | |
| Analytics (GA4 / other) | |
| Hosting (Vercel / Hostinger / other) | |
| Form email method (SMTP / API / none) | |

**Rule:** One canonical domain everywhere — HTML canonical, sitemap, JSON-LD `@id`, OG URLs, citations, GBP website field.

---

## Tier 1 — Quick start (launch MVP)

All **10 core checks** + **6 AEO/LLM checks** + **4 conversion/mobile checks** must pass before launch.

### Core 10

| # | Critical action | Pass criteria | Done |
|---|-----------------|---------------|------|
| 1 | Set production URL | `metadataBase` / `SITE_URL` = live HTTPS domain (no staging URL) | [ ] |
| 2 | Indexing essentials | `robots.txt` + `sitemap.xml` live, valid, submitted in GSC | [ ] |
| 3 | Page-level metadata | Unique title, description, canonical on every indexable page | [ ] |
| 4 | H1 + intent alignment | H1 matches search intent and title promise | [ ] |
| 5 | Internal links | Each page links to parent, sibling, and conversion page | [ ] |
| 6 | Schema minimum | Organization/WebSite + page-relevant Service/LocalBusiness/FAQ/Breadcrumb — [schema rules](#structured-data-quality-gate) | [ ] |
| 7 | Answer-first block | Direct 2–4 sentence answer on top money pages (not only home) | [ ] |
| 8 | Technical quality | Indexable pages return 200; LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 (mobile) | [ ] |
| 9 | Local trust (if local) | NAP consistent site-wide; GBP verified; top 5 citations match NAP | [ ] |
| 10 | Measurement | GSC + GA4 connected; weekly index/query tracking scheduled | [ ] |

### AEO / LLM (run with Tier 1)

| Task | Pass criteria | Done |
|------|---------------|------|
| Answer-first block | Top money pages have direct answer in first screen | [ ] |
| FAQ + schema | FAQ visible on page and FAQPage JSON-LD matches visible text | [ ] |
| Entity line | Brand + city + service + phone in opening paragraph | [ ] |
| `llms.txt` (if used) | [llms.txt audit](#llms-txt-verification-audit) — all 10 rows pass | [ ] |
| Prompt smoke test | 5 target queries in 2+ LLMs; citations logged (`docs/prompt-bank.md`) | [ ] |
| GSC rich results | No **critical** structured data errors in GSC Enhancements | [ ] |

### Conversion & mobile (run with Tier 1)

| Task | Pass criteria | Done |
|------|---------------|------|
| Lead forms work | Submit on desktop + mobile; email/API receives test lead | [ ] |
| Booking modal works | All “Book Now” / sticky CTAs open modal on mobile | [ ] |
| Phone CTAs work | `tel:` links use digits-only E.164 (`+91XXXXXXXXXX`) | [ ] |
| Mobile sticky bar | Visible, tappable, not blocked by floats/overlays | [ ] |

### 30-day rollout (new sites)

| Week | Focus | Output |
|------|-------|--------|
| Week 1 | Foundation + metadata | Indexable, crawlable, canonicalized site |
| Week 2 | Schema + AEO/LLM | Answer-first pages + FAQ schema + prompt smoke test |
| Week 3 | Local signals | GBP, citations, NAP consistency (if applicable) |
| Week 4 | Measure + iterate | GSC queries + LLM citation gap fixes queued |

---

## Tier 2 — Full launch checklist

### 2.1 Foundation setup

| Item | Why it matters | Done |
|------|----------------|------|
| Set production base URL (`metadataBase` / `SITE_URL`) | Canonical and OG consistency | [ ] |
| Create `robots.ts` + `sitemap.ts` | Discovery and crawl control | [ ] |
| Verify Google technical requirements | Crawlable, 200, indexable content | [ ] |
| Define URL taxonomy (service, location, brand, blog) | Prevents cannibalization | [ ] |
| Add global metadata template (`pageMetadata()`) | Scales SEO across pages | [ ] |
| Create search-intent map before content | Align pages to queries and SERP type | [ ] |
| Legal pages (privacy, terms) | Trust and policy completeness | [ ] |
| Custom 404 with `noindex` | UX + avoid soft-404 index bloat | [ ] |
| GSC verification env in production | Ownership + sitemap submission | [ ] |
| GA4 env in production | Traffic measurement | [ ] |
| Favicon + apple-touch-icon + OG image (1200×630 PNG) | Branding and social previews | [ ] |
| `llms.txt` + layout `<link rel="alternate">` | LLM discovery (if used) | [ ] |
| `.env.example` + production env template | Document all required secrets (no values in git) | [ ] |
| `pnpm-lock` / `package-lock` committed | Reproducible deploys; deps install on host | [ ] |

**Next.js:** `app/sitemap.ts`, `app/robots.ts`, `generateMetadata`, `lib/seo.ts`. Never hardcode a domain other than `SITE_URL`.

---

### 2.2 Per-page SEO (every indexable URL)

| Requirement | Target | Done |
|-------------|--------|------|
| Unique title | 50–65 chars; intent + location (if local) | [ ] |
| Unique meta description | 120–160 chars; clear CTA | [ ] |
| Title optimization | Keyword near front + CTR modifier + uniqueness | [ ] |
| Canonical URL | Self-referencing, absolute, matches live domain | [ ] |
| Single H1 aligned to title | Main query match | [ ] |
| Content intent fit | Informational / commercial / transactional | [ ] |
| Internal links | Parent, sibling, conversion pages | [ ] |
| Anchor text quality | Descriptive; avoid “click here” | [ ] |
| External references | Authoritative sources where useful (About, hubs) | [ ] |
| Image alt text | Descriptive and contextual | [ ] |
| Near-me modifiers (local) | Title, H1, meta, FAQ where natural | [ ] |
| Real images | JPG/PNG/WebP photos — **not** colored SVG placeholders | [ ] |
| Last updated (money pages) | Visible freshness on high-intent pages | [ ] |

**Page types:** Home, service hubs, area pages, area×service combos, brand pages, about, contact, services index, areas index.

---

### 2.3 Structured data (JSON-LD)

| Schema | Where | Done |
|--------|-------|------|
| Organization + WebSite | Global layout / home | [ ] |
| LocalBusiness (+ geo, hours) | Home + local landing pages | [ ] |
| Service | Service pages (no `aggregateRating` on `Service` type) | [ ] |
| Product | Brand / product-style pages only if eligible | [ ] |
| FAQPage | Pages with visible FAQ — **must match** on-page text | [ ] |
| BreadcrumbList | All hierarchical pages | [ ] |
| GeoCoordinates | Area / LocalBusiness pages | [ ] |
| `sameAs` | Real GBP, social, directory URLs — no `href="#"` | [ ] |

Validate: [Google Rich Results Test](https://search.google.com/test/rich-results) + GSC Enhancements after deploy.

---

### 2.4 User-search and intent research

| Workflow step | Best practice | Done |
|---------------|---------------|------|
| Collect query buckets | Brand, problem, service, location, comparison, near-me | [ ] |
| Map intent per keyword | Informational / commercial / transactional | [ ] |
| SERP format review | What Google ranks (guides, local pack, service pages) | [ ] |
| PAA extraction | People Also Ask → FAQ + answer blocks | [ ] |
| Cluster architecture | Pillar + 8–15 cluster pages | [ ] |
| Cannibalization check | One primary intent per URL | [ ] |

---

### 2.5 AEO (Answer Engine Optimization)

| Requirement | Implementation | Done |
|-------------|----------------|------|
| Answer-first block | 2–4 sentence direct answer near top | [ ] |
| FAQ language | Questions mirror real user phrasing | [ ] |
| Concise entities | Brand, service, city in first paragraph | [ ] |
| Scannable structure | Short sections, clear headings | [ ] |
| Trust signals | Reviews, warranty, response time, pricing range | [ ] |
| Question-as-heading | H2/H3 as real questions where appropriate | [ ] |
| Topical depth | Pillar + cluster for domain expertise | [ ] |
| Sub-query coverage | PAA / AI Overview → sections or URLs | [ ] |
| No ambiguous copy | Name brand and location; avoid vague pronouns | [ ] |
| Freshness signals | “Last updated” on high-intent pages | [ ] |

---

### 2.6 AEO + LLM

| Task | Implementation | Done |
|------|----------------|------|
| Conversational query map | 20–50 how/what/where/near-me prompts | [ ] |
| Answer-first on money pages | Direct answer in first screen | [ ] |
| Entity clarity | Full name, city, service, phone in opening | [ ] |
| Extractable facts | Price, hours, areas, warranty as plain lists | [ ] |
| FAQPage schema | JSON-LD matches visible FAQ | [ ] |
| `llms.txt` | Public file with summary + **key URLs** | [ ] |
| **`llms.txt` verification** | [llms.txt audit](#llms-txt-verification-audit) all 10 rows | [ ] |
| Organization `sameAs` | GBP, social, directories | [ ] |
| Prompt testing | Top 10 queries — `docs/prompt-bank.md` | [ ] |
| Citation audit | Log wins/losses; fix losing queries | [ ] |

---

### 2.7 GEO (local optimization)

| Requirement | Implementation | Done |
|-------------|----------------|------|
| Area coverage map | Landing page per target locality | [ ] |
| NAP consistency | Site, GBP, directories **exactly** match | [ ] |
| Service area in copy + schema | Area names on pages and in JSON-LD | [ ] |
| Google Business Profile | Verified; services, categories, hours, photos | [ ] |
| Citation consistency | Justdial, Sulekha, IndiaMART, etc. | [ ] |
| Real social URLs | Footer + `sameAs` | [ ] |
| Review pipeline | Authentic GBP reviews; respond to all | [ ] |
| Unique local copy | No duplicate boilerplate across 50+ area pages | [ ] |
| Geo meta tags | `geo.region`, `geo.placename`, `ICBM` in layout | [ ] |

**Citation NAP (must match site exactly):**

| Directory | Listed? | NAP matches? | Profile URL |
|-----------|---------|--------------|-------------|
| Google Business Profile | [ ] | [ ] | |
| Justdial | [ ] | [ ] | |
| Sulekha | [ ] | [ ] | |
| IndiaMART | [ ] | [ ] | |
| Facebook | [ ] | [ ] | |
| Instagram | [ ] | [ ] | |

---

### 2.8 Technical quality gate

| Check | Target | Done |
|-------|--------|------|
| LCP (mobile) | ≤ 2.5s | [ ] |
| CLS | ≤ 0.1 | [ ] |
| INP | ≤ 200ms | [ ] |
| HTTP status hygiene | Indexable pages 200; valid 301/404 | [ ] |
| Robots / noindex | No money URL blocked or noindexed | [ ] |
| `/api/` disallowed in robots | Lead API not indexed | [ ] |
| Canonical consistency | HTML canonical = final served URL | [ ] |
| JavaScript rendering | Critical content in rendered HTML | [ ] |
| Sitemap URL count | Matches expected static routes (spot-check count) | [ ] |
| Internal crawl depth | Money pages ≤ 3 clicks from hubs | [ ] |
| Orphan pages | 0 critical pages without internal links | [ ] |
| Broken images / links | 0 critical (real assets, not 404 SVG swaps) | [ ] |
| Build health | `npm run build` passes; no `ignoreBuildErrors` | [ ] |
| Domain alignment | No mixed www / wrong domain in canonicals | [ ] |
| HTTPS everywhere | No mixed content; HTTP → HTTPS redirect | [ ] |

---

### 2.9 Trust and E-E-A-T

| Signal | Implementation | Done |
|--------|----------------|------|
| Experience evidence | Real photos, first-hand service details | [ ] |
| Expertise clarity | Technician credentials, brand expertise | [ ] |
| Business trust | Real NAP, hours, warranty, contact transparency | [ ] |
| Reputation | Reviews, third-party mentions, citations | [ ] |
| People-first content | Helpful-first writing | [ ] |
| Legal transparency | Privacy policy, terms linked in footer | [ ] |

---

### 2.10 Conversion, forms & lead capture

| Check | Pass criteria | Done |
|-------|---------------|------|
| Single booking modal | One `BookingProvider` — not 3+ duplicate dialogs | [ ] |
| Modal `onOpenChange` | Respects open **and** close (not always-close handler) | [ ] |
| Mobile service picker | Native `<select>` inside modal (not Radix Select in Dialog) | [ ] |
| Lead form API | `POST /api/leads` returns 200 on valid payload | [ ] |
| SMTP / email env | Production env set; [form env audit](#form--email-env-audit) | [ ] |
| Test submission | Real email received at `LEAD_NOTIFICATION_EMAIL` | [ ] |
| Error UX | User sees message if submit fails (not silent fail) | [ ] |
| Honeypot / spam | Basic bot field on API (optional) | [ ] |
| CTA coverage | Book / Call / WhatsApp on mobile sticky + header + money pages | [ ] |
| `#book-service` anchors | Scroll to lead form sections on service pages | [ ] |

---

### 2.11 Mobile UX & accessibility

| Check | Pass criteria | Done |
|-------|---------------|------|
| Sticky mobile bar | Fixed bottom; `touch-manipulation`; safe-area padding | [ ] |
| Z-index stack | Modal (100) > WhatsApp (80) > sticky bar (40) | [ ] |
| Tap targets | Buttons/labels ≥ 44px effective touch area | [ ] |
| Modal scroll | `max-h-[90dvh]` + scroll so submit always reachable | [ ] |
| Keyboard / focus | Form usable with mobile keyboard open | [ ] |
| `tel:` links | `COMPANY_PHONE_TEL` digits-only format | [ ] |
| Viewport meta | `width=device-width`, sensible `maximum-scale` | [ ] |
| Main content padding | `pb-20` on mobile so sticky bar doesn’t cover forms | [ ] |

---

### 2.12 Deployment & environment

| Check | Pass criteria | Done |
|-------|---------------|------|
| Node.js hosting | Not static export if using `/api/leads` | [ ] |
| Env vars on host | All production vars set (see `.env.production.example`) | [ ] |
| SMTP password quoting | Use `SMTP_PASS_B64` if password contains `#` or `|` | [ ] |
| No secrets in git | `.env.local` gitignored; never commit passwords | [ ] |
| Redeploy after env change | Restart app after env updates on Hostinger/Vercel | [ ] |
| `llms.txt` committed | File in git and deployed (not only local) | [ ] |
| Production build | Same build command as CI/host (`npm run build`) | [ ] |

---

### 2.13 Final launch gates

| Gate | Pass criteria | Done |
|------|---------------|------|
| SEO gate | Metadata + internal links on all indexable pages | [ ] |
| Schema gate | [Structured data quality gate](#structured-data-quality-gate) | [ ] |
| AEO gate | Answer-first + FAQ schema on money pages | [ ] |
| AEO/LLM gate | `llms.txt` audit + prompt bank started | [ ] |
| GEO gate | GBP + citations + local schema (if local) | [ ] |
| Trust gate | Real contact, legal pages, reviews visible | [ ] |
| Conversion gate | [Form & mobile checks](#210-conversion-forms--lead-capture) pass on real phone | [ ] |

---

### 2.14 Measurement and iteration

| Measurement | Cadence | Done |
|-------------|---------|------|
| GSC indexing + coverage | Weekly | [ ] |
| GSC Enhancements (rich results) | Weekly | [ ] |
| Query clusters (brand / service / area) | Weekly | [ ] |
| CTR for top landing pages | Bi-weekly | [ ] |
| Local pack visibility | Weekly (if local) | [ ] |
| AI / citation checks | Bi-weekly (`docs/prompt-bank.md`) | [ ] |
| Form submission test | Monthly (live prod test lead) | [ ] |
| Content pruning / merge | Monthly | [ ] |

---

### 2.15 Reference standards

| Source | Use for |
|--------|---------|
| [Google Search Essentials](https://developers.google.com/search/docs/essentials) | Eligibility, crawl, index |
| [Review snippet guidelines](https://developers.google.com/search/docs/appearance/structured-data/review-snippet) | Valid parent types for ratings |
| [Helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) | E-E-A-T |
| [JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) | Rendering |
| [GSC rich result report](https://support.google.com/webmasters/answer/13300873) | Error messages |

---

## Tier 3 — Enterprise governance

### 3.1 Governance cadence

| Cadence | Owner | Scope | Done |
|---------|-------|-------|------|
| Daily | Content/SEO | 5xx / 404 / indexing anomalies | [ ] |
| Weekly | SEO lead | GSC coverage, Enhancements, CTR | [ ] |
| Bi-weekly | Content + SEO | Intent gaps + AEO + LLM citations | [ ] |
| Monthly | Tech + SEO | Crawl, CWV, schema, **live form test** | [ ] |
| Quarterly | Leadership | Authority roadmap + GEO + `llms.txt` audit | [ ] |

### 3.2–3.7

(Same as prior enterprise sections: technical governance, content, AEO/LLM ops, GEO, experimentation, executive scorecard — run monthly/quarterly per tables in enterprise canvas.)

---

## Sub-audits (run before marking parent items done)

### Structured data quality gate

| # | Check | Pass criteria | Done |
|---|-------|---------------|------|
| 1 | Rich Results Test | No critical errors on home + 1 hub + 1 area + 1 brand page | [ ] |
| 2 | GSC Enhancements | No critical “Invalid object type” / review snippet errors | [ ] |
| 3 | Review parent types | `aggregateRating` / `Review` only on **Product**, **LocalBusiness**, etc. — **not `Service`** | [ ] |
| 4 | No nested `itemReviewed` | When rating is nested in parent, omit `itemReviewed` on `AggregateRating` | [ ] |
| 5 | No fake standalone reviews | Don’t markup reviews not visible on page | [ ] |
| 6 | FAQ match | FAQPage JSON-LD text = visible FAQ accordion | [ ] |
| 7 | Single `@type` | Avoid `@type` arrays on LocalBusiness unless required | [ ] |
| 8 | `sameAs` live | Every URL in `sameAs` returns 200 | [ ] |
| 9 | After schema edits | Re-test in GSC → Validate fix | [ ] |
| 10 | No duplicate conflicting graphs | One primary LocalBusiness `@id` per page tier | [ ] |

**Invalid patterns (caused GSC critical errors):**
- `AggregateRating` on `@type: Service`
- `itemReviewed: { @type: Service }` inside nested rating
- Standalone `Review` with generic “Verified Customer” not on page

---

### llms.txt verification audit

| # | Check | Pass criteria | Done |
|---|-------|---------------|------|
| 1 | File live | `https://YOUR-DOMAIN/llms.txt` returns 200 | [ ] |
| 2 | Layout link | `<link rel="alternate" href="/llms.txt">` in root layout | [ ] |
| 3 | NAP match | Phone, email, address = `lib/constants.ts` / contact page | [ ] |
| 4 | Hours match | Match contact page + GBP (Sunday if different) | [ ] |
| 5 | Domain | Only production `SITE_URL` | [ ] |
| 6 | Key URLs | Home, `/services`, `/areas`, `/contact`, all service hubs | [ ] |
| 7 | Area accuracy | Named areas have `/areas/[slug]` or “surrounding localities” | [ ] |
| 8 | Prices / warranty | Match `lib/constants.ts` | [ ] |
| 9 | Services complete | All live categories + brands documented | [ ] |
| 10 | Git + deploy | Committed and on production | [ ] |

---

### Form & email env audit

| # | Check | Pass criteria | Done |
|---|-------|---------------|------|
| 1 | SMTP_HOST / PORT | Matches email provider (e.g. `smtp.hostinger.com:465`) | [ ] |
| 2 | SMTP_USER | Full email address | [ ] |
| 3 | SMTP_PASS | Quoted or `SMTP_PASS_B64` if `#` `\|` in password | [ ] |
| 4 | LEAD_NOTIFICATION_EMAIL | Correct inbox(es); comma-separated OK | [ ] |
| 5 | API test | `curl -X POST /api/leads` → `{"ok":true}` on prod | [ ] |
| 6 | Email received | Test lead in inbox within 2 minutes | [ ] |
| 7 | No Resend required | If using SMTP, no orphan Resend env vars | [ ] |

---

### GSC & rich results audit

| # | Check | Pass criteria | Done |
|---|-------|---------------|------|
| 1 | Property verified | Domain or URL-prefix property | [ ] |
| 2 | Sitemap submitted | `sitemap.xml` accepted, no errors | [ ] |
| 3 | Enhancements | Review snippets, FAQ, Breadcrumbs — no critical issues | [ ] |
| 4 | Coverage | No unexpected “Excluded” money URLs | [ ] |
| 5 | Manual actions | None | [ ] |
| 6 | Core Web Vitals | Field data reviewed (mobile) | [ ] |

---

### Pre-deploy regression gate

Run when changing: schema, forms, env, images, layout, `llms.txt`.

| # | Check | Done |
|---|-------|------|
| 1 | `npm run build` passes | [ ] |
| 2 | No new TypeScript errors | [ ] |
| 3 | Spot-check 3 money pages in dev | [ ] |
| 4 | Test booking modal open + submit in dev | [ ] |
| 5 | If schema changed → Rich Results Test | [ ] |
| 6 | If `llms.txt` changed → [llms.txt audit](#llms-txt-verification-audit) | [ ] |
| 7 | If NAP changed → update GBP + citations + `llms.txt` + JSON-LD | [ ] |

---

### Post-deploy smoke test (30 minutes)

| # | Action | Pass | Done |
|---|--------|------|------|
| 1 | Home loads HTTPS, no console errors | [ ] | [ ] |
| 2 | `/sitemap.xml` and `/robots.txt` 200 | [ ] | [ ] |
| 3 | `/llms.txt` 200 (if used) | [ ] | [ ] |
| 4 | Mobile: sticky **BOOK SERVICE** opens modal | [ ] | [ ] |
| 5 | Mobile: submit test lead → email received | [ ] | [ ] |
| 6 | Mobile: **CALL NOW** dials correct number | [ ] | [ ] |
| 7 | View-source: canonical, GSC meta, GA4 script | [ ] | [ ] |
| 8 | Rich Results Test on live home URL | [ ] | [ ] |
| 9 | GSC URL inspection on 1 new/changed page | [ ] | [ ] |
| 10 | Images on service pages are photos (not blue SVG) | [ ] | [ ] |

---

## Next.js implementation map (Service Booking)

| Checklist item | File / pattern |
|----------------|----------------|
| `SITE_URL` / canonicals | `lib/seo.ts` |
| NAP constants | `lib/constants.ts` |
| Sitemap | `app/sitemap.ts` |
| Robots | `app/robots.ts` |
| GSC verification | `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in `app/layout.tsx` |
| GA4 | `components/analytics/google-analytics.tsx` |
| Answer-first | `components/seo/answer-summary.tsx`, `lib/answer-summaries.ts` |
| JSON-LD | `components/seo/json-ld.tsx` |
| Area copy | `lib/area-content.ts` |
| Social / `sameAs` | `lib/social.ts` |
| `llms.txt` | `public/llms.txt` |
| Lead API | `app/api/leads/route.ts` |
| SMTP | `lib/email/smtp.ts`, `SMTP_PASS_B64` |
| Booking modal | `components/forms/booking-provider.tsx` (single instance) |
| Mobile sticky | `components/layout/mobile-sticky-bar.tsx` |
| Env templates | `.env.example`, `.env.production.example` |
| LLM prompts | `docs/prompt-bank.md` |

---

## How to use across projects

1. Copy `docs/seo-aeo-geo-checklist.md` into each repo.
2. Fill **Project record**.
3. Run **Tier 1** + all sub-audits before launch.
4. Run **Pre-deploy** before every release; **Post-deploy smoke** after.
5. Adopt **Tier 3** at 50+ URLs or multiple editors.
6. Re-audit monthly — regressions happen when NAP, schema, forms, or `llms.txt` drift.

**Why audits get missed:** Marking parent rows done without running linked sub-audits. Always expand the row and complete every child check.
