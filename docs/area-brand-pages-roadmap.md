# Area × Service × Brand Pages — Roadmap

URL pattern: `/areas/[area]/[service]/[brand]`

Example: `https://servicebooking.in/areas/koramangala/chimney/faber`

Targets queries like **"Faber chimney repair Koramangala"**, **"Kent RO service HSR Layout"**, **"Daikin AC repair Whitefield"**.

---

## URL hierarchy (no cannibalization)

```
/areas/koramangala                      → appliance service in Koramangala
/areas/koramangala/chimney              → chimney service in Koramangala
/areas/koramangala/chimney/faber        → Faber chimney repair in Koramangala  ← new tier
/services/chimney/faber                 → Faber chimney service Bangalore (city hub)
```

Parent pages link down; child pages link up. Each tier has a distinct title, H1, and AnswerSummary.

---

## Phase 1 — LIVE (implemented)

| Setting | Value |
|---------|--------|
| Areas | 10 high-demand localities |
| Brands | Top 3 per service (`BRAND_SERVICES` order) |
| Services | All 8 |
| **Total pages** | **240** (10 × 8 × 3) |
| Config | `lib/area-brand-pages.ts` → `PHASE1_AREA_SLUGS`, `TOP_BRANDS_PER_SERVICE` |
| Route | `app/areas/[area]/[service]/[brand]/page.tsx` |
| Sitemap | Included at priority `0.88` |

### Phase 1 areas

Koramangala, HSR Layout, Indiranagar, Whitefield, Electronic City, Marathahalli, Jayanagar, JP Nagar, BTM Layout, Bellandur

### Phase 1 brands per service (top 3)

| Service | Brands |
|---------|--------|
| Water purifier | Kent, Aquaguard, Pureit |
| AC | Daikin, LG, Samsung |
| Chimney | Faber, Elica, Hindware |
| Hob | Prestige, Pigeon, Sunflame |
| Washing machine | LG, Samsung, IFB |
| Refrigerator | LG, Samsung, Whirlpool |
| Dishwasher | Bosch, IFB, LG |
| TV | Samsung, LG, Sony |

### Phase 1 acceptance criteria

- [ ] `npm run build` — 608+ static routes (368 existing + 240 new)
- [ ] Sitemap shows 608 URLs
- [ ] GSC: submit updated sitemap after deploy
- [ ] Spot-check 5 URLs in Rich Results Test
- [ ] Monitor GSC impressions for `brand + area` queries (60–90 days)

---

## Phase 2 — Expand geography (planned)

**When:** After Phase 1 shows GSC impressions/clicks for brand+area queries (target: 60–90 days post-deploy).

| Setting | Value |
|---------|--------|
| Areas | All 31 `BANGALORE_AREAS` |
| Brands | Top 3 per service (unchanged) |
| **New pages** | +504 (21 areas × 8 × 3) |
| **Cumulative** | **744** area×brand pages |

### Implementation steps

1. In `lib/area-brand-pages.ts`, replace `PHASE1_AREA_SLUGS` with all area slugs (or add `PHASE2_AREA_SLUGS` and merge in `getPhase1AreaBrandRoutes()` → rename to `getAreaBrandRoutes()`).
2. Extend `getAreaBrandIntro()` highlights for remaining 21 areas if any are thin.
3. Rebuild, redeploy, resubmit sitemap.
4. Update `public/llms.txt` Key Pages section with sample area×brand URLs.

### Phase 2 gate (do not ship until)

- Phase 1 pages indexed (check GSC coverage)
- No thin-content warnings in GSC
- Crawl stats stable (no spike in "Discovered — currently not indexed")

---

## Phase 3 — Full brand matrix (planned)

**When:** Phase 2 ranks and converts; content team can maintain unique copy at scale.

| Setting | Value |
|---------|--------|
| Areas | All 31 |
| Brands | All brands in `BRAND_SERVICES` (76 total) |
| **New pages** | ~1,612 additional |
| **Cumulative** | **~2,356** area×service×brand pages |

### Implementation steps

1. Change `getTopBrandsForService()` to return all brands (or set `TOP_BRANDS_PER_SERVICE = Infinity` with a feature flag).
2. Add `lib/area-brand-content.ts` for brand-specific locality paragraphs (avoid duplicate intros).
3. Consider programmatic unique FAQs per brand×area using templates + `AREA_HIGHLIGHTS`.
4. Stagger sitemap submission (batch by zone) if crawl budget is a concern.
5. Monthly content audit — merge or noindex pages with zero impressions after 6 months.

### Phase 3 risks

- Thin/duplicate content at scale
- Crawl budget bloat
- Cannibalization if parent pages are not clearly differentiated

### Phase 3 gate

- Phase 2 complete and stable for 90+ days
- Unique intro + FAQ on every page (automated templates OK if substantively different per URL)
- Internal linking hub-and-spoke verified

---

## Code reference

| File | Purpose |
|------|---------|
| `lib/area-brand-pages.ts` | Phase config, route generation, slug helpers |
| `lib/area-content.ts` | `getAreaBrandIntro()`, `getAreaBrandMetaDescription()` |
| `lib/answer-summaries.ts` | `getAreaBrandAnswerSummary()` |
| `app/areas/[area]/[service]/[brand]/page.tsx` | Page template |
| `app/sitemap.ts` | Sitemap entries for active phase |
| `app/areas/[area]/[service]/page.tsx` | Links to top brands (Phase 1 areas) |
| `app/services/[service]/[brand]/page.tsx` | Links to area×brand (Phase 1 areas) |

---

## SEO checklist (each phase)

1. Unique title: `{Brand} {Service} Repair Near Me in {Area}, Bangalore`
2. Unique H1 + AnswerSummary with brand, area, phone
3. Brand-specific FAQ (5 questions minimum)
4. BreadcrumbList JSON-LD
5. `BrandServiceSchema` with area
6. Internal links: parent area×service, city brand hub, sibling brands
7. Submit sitemap in GSC after deploy
8. Add sample URLs to `llms.txt` after Phase 1 deploy

---

## Measurement

Track in GSC (filter by page path `/areas/*/chimney/faber` etc.):

| Metric | Phase 1 target (90 days) |
|--------|--------------------------|
| Indexed pages | ≥ 90% of published phase URLs |
| Impressions | Uptick on `brand + area` query clusters |
| CTR | Compare vs generic area×service pages |
| Conversions | Form submissions from `sourcePage` containing brand slug |

Query clusters to watch: `faber chimney {area}`, `kent ro {area}`, `daikin ac {area}`, `prestige hob {area}`.
