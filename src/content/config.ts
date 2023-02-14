import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    group: z.string(),
    github: z.string(),
    link: z.string().optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};