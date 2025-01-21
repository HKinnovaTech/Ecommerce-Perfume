import { supabase } from '@/lib/supabaseClient';

export default async function handler(req, res) {
  console.log(req.method, req.body);
  if (req.method === 'POST') {
    const { product_id, rating, product_review } = req.body;

    if (typeof rating !== 'number' || !product_review || !product_id || rating < 1 || rating > 5) {
      return res.status(400).json({ error: 'Missing required fields or incorrect types' });
    }

    try {
      const { data, error } = await supabase
        .from('product_reviews')
        .insert([{ product_id: product_id, rating, product_review }]);

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
