import type { ImageMetadata } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';

export type Job = CollectionEntry<'maintenance'>;

/** All published jobs, newest first. */
export async function getJobs(): Promise<Job[]> {
  const jobs = await getCollection('maintenance', ({ data }) => import.meta.env.DEV || !data.draft);
  return jobs.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

// Every photo in every job's photos/ folder, resolved at build time.
const allPhotos = import.meta.glob<{ default: ImageMetadata }>(
  '/src/content/maintenance/*/photos/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}',
  { eager: true },
);

export interface Photo {
  src: ImageMetadata;
  file: string;
  caption: string;
}

/** Gallery photos for a job, sorted by file name. Captions come from front matter or the file name. */
export function getJobPhotos(job: Job): Photo[] {
  const prefix = `/src/content/maintenance/${job.id}/photos/`;
  return Object.entries(allPhotos)
    .filter(([path]) => path.startsWith(prefix))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, mod]) => {
      const file = path.slice(prefix.length);
      return { src: mod.default, file, caption: job.data.captions[file] ?? captionFromFile(file) };
    });
}

/** "07-ppf-edge-front-wing.jpg" -> "Ppf edge front wing" */
function captionFromFile(file: string) {
  const words = file.replace(/\.[^.]+$/, '').replace(/^\d+[-_ ]*/, '').replace(/[-_]+/g, ' ').trim();
  return words.charAt(0).toUpperCase() + words.slice(1);
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

export const formatKm = (km: number) => `${km.toLocaleString('en-GB')} km`;
