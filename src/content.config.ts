import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        pubDate: z.coerce.date().optional(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
    }),
});

const printing = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/printing' }),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        pubDate: z.coerce.date().optional(),
        date: z.coerce.date().optional(),
        tags: z.array(z.string()).optional(),
        heroImage: z.string().optional(),
    }),
});

export const collections = { blog, printing };
