import { supabase } from '@/lib/supabaseClient';

export default async function handler(req, res) {
  console.log(req.method, req.body);
  if (req.method === 'GET') {
    const {product_id} = req.query;

    try {
      const { data, error } = await supabase
        .from('product_reviews')
        .select('*')
        .eq('product_id', product_id)


      if (error) {
        throw error;
      }
      res.status(200).json({ data });

    } catch (error) {
      console.error('Error creating review:', error.message || error);
      res.status(500).json({ error: 'Failed to create review', details: error.message || 'No details' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
