import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,  // Set in .env.local
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,      // Set in .env.local
  apiVersion: '2024-10-08',                             // Use the latest version or the date in 'YYYY-MM-DD' format
  useCdn: true,                                         // `true` for fast, cached reads
});
