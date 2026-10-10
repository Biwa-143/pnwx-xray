# PNWX redesign — launch gates

## Current status
Pre-launch React/TypeScript catalog redesign. Do not launch as the complete PNWX catalog. robots.txt and initial metadata intentionally block indexing. No online order, payment, backend inquiry storage or email delivery is implemented. Inquiry preparation creates an email draft only. No authentication, analytics or tracking vendor has been added.

## Source audit
Source of business facts: https://www.pnwx.com/ and its catalog pages. Verified telephone 503-667-3000, toll-free US 800-827-9729, fax 503-666-8855, SalesD@pnwx.com, P.O. Box 625, Gresham OR 97030, US. Published phone hours: Monday–Friday 8am–5pm Pacific. Source footer publishes phone/email/fax ordering, $30 non-charge-account product minimum, approved credit for purchase orders and $500 opening charge-account minimum. Posted prices require confirmation.

Inspected directories/pages: Accessories/Cassettes/ (including Holders, Veterinary holders, Racks, Covers, Aluminum), Accessories/LeadProducts/Aprons/Infab/Revolution/ (multiple styles), Accessories/Phantoms/Test/LinePair/, Accessories/PatAsst/MerchantBoards/. Original images are used externally. Their successful rendering and download/PDF accessibility still need browser/network verification.

Unavailable audit targets: /Buy/ failed on both HTTP and HTTPS; Infab mobile barrier page failed. No authoritative general privacy, returns, shipping or complete terms were obtained. Information pages disclose these limits rather than making policies up. External PDF link was published by the source but binary download has not been validated.

## Migration requirements (blocking)
Obtain an authorized inventory export or access to original catalog files/database, including dynamic PHP endpoints, manufacturers, documents, images, variants and legacy URL mappings. Public crawling returned useful records but cannot prove completeness.

Content is separated in src/data/catalog.ts. These transcribed records are an initial audited subset, not a catalog import. Fields support source URL, SKU, name, slug, category, manufacturer, description, images, specifications, variants, documents and published price. Inventory is intentionally omitted. No generalized automated importer exists yet because the complete source format is not known.

Not yet migrated: remaining apron styles and 2X/base variants, shields, eyewear, gloves, barriers, MRI equipment and accessories, training phantoms, most quality-assurance patterns, ultrasound, veterinary products, darkroom equipment, grids, supplies, exam-room furniture and other directories. Shared source-family images are marked where relevant. Source-specific claims about certification and shipping were not generalized.

Before ingestion, validate required fields and HTTPS URLs; reconcile stock numbers and variant identifiers case-insensitively; reject duplicate IDs/slugs and malformed prices; record excluded rows and conflicting specifications in a reconciliation report. Do not deduplicate distinct variants just because the image or name matches. Count all expected source records and reconcile by directory/manufacturer. Require zero unresolved catalog gaps or explicit company disposition before release, consistent with the user's full-migration requirement. Copy authorized assets locally and optimize them once export access is available.

## Submission integrations (blocking)
User requested secure database storage plus authorized inbox delivery. Database provider selection is required next. Do not expose credentials or create fake success feedback. After integration: implement server-side schema validation, honeypot and verified CAPTCHA, durable storage, rate limiting, restricted staff authorization, and email delivery through an authorized sending domain/provider. Use idempotency and an outbox to avoid duplicates; record actual delivery status. Return precise saved/delivered states rather than claiming sent on failure. Do not collect health information or payment card numbers.

No server environment variables are referenced in this build. Future database/email/CAPTCHA credentials must be server-only and depend on chosen providers; no guessed credentials or provider-specific setup has been embedded.

## SEO and hosting (blocking)
Unique client titles/descriptions and accurate Organization/Product JSON-LD are present; no Offer/Review/stock schema is emitted. Add approved production canonical origin, crawlable pre-rendered metadata, BreadcrumbList and WebSite schema, complete XML sitemap, and server-level 301 mappings once inventory and URL map are reconciled. Known /Buy/ and category aliases use client navigation, not HTTP 301s. SPA not-found UI does not establish a true HTTP 404. Host must implement correct status codes, HTTPS, HSTS, CSP appropriate to deployed services, frame policy, nosniff and referrer policy. Configure SPA routing or pre-render routing without returning 200 for unknown production URLs. Remove noindex/robots block only after all gates are approved.

## Verification before release
Run final type checking and production build, inspect browser console/network and source images, test SKU/name/punctuation searches, category filters/removal/reset/sorts/pagination, galleries/options/quantities/persistence, navigation and inquiry validation. Test real database/email success/failure and spam/rate-limit behavior after integration. Verify all documents and internal links. Manual keyboard/screen reader checks and widths 320, 768, 1024, 1440 and 1920 are required. Measure LCP/INP/CLS; no measured performance or WCAG compliance claim has been made. No browser automation or performance test suite is currently installed.
