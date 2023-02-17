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
    priority: z.number().optional(),
  }),
});

const worksCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    company: z.string(),
    companyLink: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    tags: z.array(z.string()),
    location: z.string(),
  }),
});

const educationCollection = defineCollection({
  schema: z.object({
    degree: z.string(),
    school: z.string(),
    schoolLink: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    location: z.string(),
  }),
});

export const collections = {
  projects: projectsCollection,
  works: worksCollection,
  education: educationCollection,
};
