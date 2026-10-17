import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One folder per maintenance job: src/content/maintenance/<slug>/index.md
// Photos dropped into <slug>/photos/ appear in the job's gallery automatically.
const maintenance = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/maintenance' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      /** Optional display text instead of the full date, e.g. "March 2024" (date still sorts) */
      dateLabel: z.string().optional(),
      category: z.enum(['Service', 'Repair', 'DIY', 'Detailing', 'Upgrade', 'Tyres', 'Inspection']),
      summary: z.string(),
      cover: image(),
      coverAlt: z.string(),
      mileage: z.number().int().nonnegative().optional(),
      performedBy: z.string().optional(),
      cost: z.string().optional(),
      products: z.array(z.string()).default([]),
      /** Files in public/downloads/ offered on the job page */
      downloads: z.array(z.object({ label: z.string(), file: z.string(), note: z.string().optional() })).default([]),
      /** External references, e.g. forum threads */
      links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
      /** Optional captions for gallery photos, keyed by file name */
      captions: z.record(z.string()).default({}),
      /** Optional gallery sections: photos (by file name) grouped under headings, in this order */
      sections: z.array(z.object({ title: z.string(), files: z.array(z.string()) })).default([]),
      draft: z.boolean().default(false),
    }),
});

export const collections = { maintenance };
