# Curated Ink — Roadmap

Check items off as they ship. Each wave ends with a **quality check**: it gets its own pull request and Netlify Deploy Preview, and nothing merges to `main` until every QC box is ticked and you approve.

Order of work: make the site as useful as possible as a **static Netlify site** first (Waves 1–3), then add **database and login** last (Wave 4).

---

## ✅ Done so far

- [x] Landing page: hero, What we make, How it works, Why us, inquiry form, thank-you page
- [x] Netlify Forms for inquiries (no server needed)
- [x] Light, Dark and System themes (System is the default; choice is remembered)
- [x] Blue, beige and grey color palette in both themes
- [x] Responsive layout for phones (320px+), tablets and desktops, with a mobile menu
- [x] Readable text contrast in both themes (WCAG AA)

---

## Wave 1: Show your work (content and trust)

- [ ] Real logo (replace the "curatedink" text logo and the "c" browser-tab icon)
- [ ] Portfolio gallery with photos of real caps, invitations and labels, filterable by category
- [ ] Tap-to-enlarge photo viewer (lightbox) that works with swipe on phones
- [ ] "Starting at" prices for each product
- [ ] FAQ: turnaround, revisions included, digital vs. print, shipping and pickup, rush orders
- [ ] Customer reviews (2–3 to start)
- [ ] Short "About the designer" section with a photo
- [ ] Contact details in the footer: email, Instagram, TikTok and Facebook links

**Quality check: Wave 1**
- [ ] All wording and photos approved by you, with no placeholder text left
- [ ] Images are compressed and load quickly on a phone (under 200 KB each, modern formats)
- [ ] Gallery and lightbox work on phone, tablet and desktop, in Light and Dark
- [ ] Every image has a description for screen readers

---

## Wave 2: A smarter order form (still no database)

- [ ] Upload inspiration photos with the request (Netlify Forms file upload)
- [ ] Fields that change by product: graduation (school, colors, cap size), wedding (names, date, guest count, RSVP needs), labels (item type, quantity, theme)
- [ ] Quantity, budget range, digital/print/both, needed-by date, how to contact you
- [ ] Rush order option with a warning when the date is very close
- [ ] Instant price estimate calculator (runs in the browser, no server)
- [ ] Email to you for every new request (Netlify form notifications)
- [ ] Automatic "we got it" reply to the customer
- [ ] Better thank-you page: what happens next and when to expect a reply
- [ ] Spam protection: honeypot (already in place) plus Netlify reCAPTCHA if spam appears

**Quality check: Wave 2**
- [ ] One test request for each product type arrives with every field and uploaded file
- [ ] Your notification email and the customer reply both arrive
- [ ] Form errors are clear and readable on phones; the keyboard doesn't hide fields
- [ ] Price estimates match your price sheet

---

## Wave 3: Get found, launch polish and selling without a database

- [ ] Your own domain connected in Netlify, with HTTPS
- [ ] Link preview image and title for texts and social media (Open Graph)
- [ ] Search engine basics: page titles, descriptions, `sitemap.xml`, `robots.txt`, Google Business Profile
- [ ] Separate pages for each product (Graduation, Weddings, Party labels), each with its own gallery and FAQ
- [ ] Privacy policy and terms pages
- [ ] Privacy-friendly visitor stats (Netlify Analytics or Plausible)
- [ ] Take deposits or sell ready-made digital templates with Stripe Payment Links (no database needed)
- [ ] Optional: booking link for design consultations (Calendly or Cal.com)
- [ ] Optional: Instagram feed on the site
- [ ] Remove the "Powered by Netlify" badge (Netlify project or plan setting)

**Quality check: Wave 3**
- [ ] Lighthouse scores of 90+ for Performance, Accessibility, Best Practices and SEO on phone and desktop
- [ ] Shared link shows the right preview image on iMessage, Facebook and Instagram
- [ ] Stripe test payment works end to end, and confirmation emails arrive
- [ ] Every page checked in Light, Dark and System on phone, tablet and desktop

---

## Wave 4: Database and login

- [ ] Choose the stack: Netlify Identity or Auth0/Clerk for login; Netlify DB (Postgres), Supabase or Firebase for data; Netlify Functions for server code
- [ ] Customer accounts: sign up, log in, reset password (email link or Google sign-in)
- [ ] Orders saved to the database instead of only in emails
- [ ] Customer dashboard: order status (Received → Designing → Proof ready → Approved → Printing → Done)
- [ ] Proof approval online: customer views the proof, leaves comments, clicks Approve
- [ ] Owner admin page (login protected): see all orders, update status, upload proofs, add notes
- [ ] Automatic email when an order's status changes
- [ ] Payments linked to orders (Stripe Checkout and webhooks)
- [ ] Gallery and prices editable from the admin page, so no code changes are needed
- [ ] Backups and data-privacy basics (who can see what, deleting customer data on request)

**Quality check: Wave 4**
- [ ] A customer can only see their own orders; you can see all of them
- [ ] Full test: sign up, place an order, receive a proof, approve it, pay, and get each email
- [ ] Admin works on phone and desktop
- [ ] Security review of login, database rules and functions before going live
