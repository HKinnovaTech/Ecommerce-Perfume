import { createClient } from '@sanity/client';
import { projectId, dataset, apiVersion } from '../env';  // Import from env.ts

export const client = createClient({
  projectId,    // Now coming from env.ts
  dataset,      // Now coming from env.ts
  apiVersion,   // Coming from env.ts ('2024-10-09' or env variable)
  useCdn: true, // This can remain as true or false depending on your needs
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
