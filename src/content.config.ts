import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const researchCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/data/research' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    status: z.string(),
    authors: z.string(),
    updated: z.string().transform((str) => new Date(str)),
    link: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = {
  research: researchCollection,
};
