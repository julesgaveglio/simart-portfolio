import { NextResponse } from 'next/server';
import { getAllSeries, getSeriesBySlug } from '@/lib/sanityActions';

export async function GET() {
  try {
    // Récupérer toutes les séries
    const allSeries = await getAllSeries();
    
    // Récupérer les détails de la première série si elle existe
    let seriesDetails = null;
    if (allSeries.length > 0) {
      seriesDetails = await getSeriesBySlug(allSeries[0].slug);
    }
    
    return NextResponse.json({
      allSeries,
      seriesDetails,
      worksCount: seriesDetails?.works?.length || 0
    });
  } catch (error) {
    console.error('Debug API error:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
