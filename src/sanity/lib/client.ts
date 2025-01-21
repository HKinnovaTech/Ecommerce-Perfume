import { createClient } from '@sanity/client';
import { projectId, dataset, apiVersion } from '../env';  // Import from env.ts

export const client = createClient({
  projectId,    
  dataset,      
  apiVersion,   
  useCdn: true, 
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
