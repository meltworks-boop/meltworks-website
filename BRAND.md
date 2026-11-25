# Meltworks.studio — brand notes for the site

> **🔒 LOCKED: Design system v1, approved 2026-11-25.**
> Locked: the Ember theme as the default, the light white sections, cherry only on CTAs at about 15%, the logo in cream on dark sections and black on light ones, Poppins, the radii and the page layout pattern.
> Don't change colours, ratios or section treatments without the owner's sign-off. New content, including products, copy and images, goes into this system as it stands. When a page's length changes, re-tune that page's `--cta-pad` to keep cherry at about 15%.

Worked out from the logo files (`assets/brand/`) and the Goli Soda render.

## Identity
- **Name / wordmark:** **Meltworks**.studio: "Meltworks" in bold, ".studio" in light.
- **Tagline:** *ideas take shape*, lowercase and widely letter-spaced.
- **Mark:** a soft, symmetrical black blob with two humps on top and a wavy base, like material caught mid-melt. Redrawn as an SVG in `assets/logo-mark.svg`. The PNG originals are kept too.
- **What it is:** a small-batch 3D-printing design studio making everyday objects.

## Visual system (in `css/style.css` `:root`)

The site has two themes. Visitors switch between them in the footer, and the choice is remembered.

**Ember** is the default and the house look. It loads no matter whether the visitor's device is set to light or dark.

| Token | Value | Role |
|---|---|---|
| Paper | `#121211` | near-black page |
| Studio | `#1D1C1A` | charcoal panels, cards, footer |
| Ink / Logo | `#F4F2EE` | cream text, wordmark and mark |
| Muted | `#9A958D` | labels, secondary text |
| **Cherry** | `#B4444F` (hover `#8F3440`) | **CTAs only** |
| On cherry | `#FBF3EF` | text on cherry |

**Light sections inside Ember** (`class="section--light"`): warm white `#FBFAF8`, cards `#EEEBE6`, charcoal text `#2B2522`, black logo. They're used where products and reading content sit, because the renders are shot on light backdrops: the home collection, process, the shop grid, the product detail, the about values and the contact form. The hero, studio story, "you may also like", the cherry band and the footer stay dark. Desktop split by area, measured on 2026-11-25: home about 51% dark, 35% white, 14% cherry. Across all pages: dark 35–63%, white 21–47%, cherry 14–16%.

**Chalk** is the light option (`<html data-theme="light">`): paper `#F4F2EE`, studio `#E4E1DC`, charcoal text `#2B2522`, black logo `#111111`, cherry `#7B1E2B`.

| Shared | |
|---|---|
| Type | Poppins 300 / 400 / 500 / 700, standing in for the lockup's geometric sans |
| Shape | 12 / 22 / 36px radii; corners shift on hover (the "melt") |

### Colour ratio (locked)
Your reference screenshot measured **58% dark, 40% cherry, 1.5% cream**. It was cropped around the CTA band, so the rule is set by whole-page area instead:

**About 85% dark grounds (near-black page plus charcoal panels) · 15% cherry (±2) · cream used only for type and marks.**

Measured on desktop at 1280px wide:

| Page | Cherry |
|---|---|
| Home | 14.2% |
| Shop | 15.0% |
| Product | 16.2% |
| About | 16.7% |
| Contact | 15.4% |

- Cherry appears in two places only: primary buttons, and the cherry CTA band at the end of every page. Never use it for labels, links, icons or decoration.
- Each band is tuned with `style="--cta-pad: …"` on its `<section class="section cta">`. Short pages use the one-row `cta--compact` band. When a page's content changes, for example when real products go in, re-measure and adjust `--cta-pad` to bring it back to about 15%.
- On phones the cherry share drops to 8–17%, because content stacks and pages get longer. That's expected; the ratio is set for desktop.
- Product photography: renders on a soft warm-grey backdrop, centred, plenty of air around the object.
- Motion: slow and soft. The hero mark "melts", a process words marquee scrolls, sections reveal on scroll. All of it turns off under reduced-motion.

## Pages
`index` (hero, collection, studio story, process, custom-work CTA) · `shop` (filterable grid) · `product` (detail template) · `about` · `contact` (form, not wired up yet)

## Still to fill in (marked `[ ]` in the HTML)
- [ ] Product list: names, descriptors, prices, categories, renders
- [ ] Brand story and studio statement, origin of the name, three values
- [ ] Email, Instagram handle, city
- [ ] Ordering model: enquire-to-order, or a real cart (Shopify Buy Button, Razorpay link, etc.)
- [ ] Contact form backend (Formspree, Netlify Forms) or a mailto link
- [ ] Domain and hosting (Netlify, Vercel or GitHub Pages: drag-and-drop, all static)
