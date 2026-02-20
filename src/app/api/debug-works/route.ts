import { NextResponse } from 'next/server';
import { client } from '@/lib/sanity';

export async function GET() {
  try {
    // Requête directe pour récupérer tous les travaux
    const allWorks = await client.fetch(`
      *[_type == "work"] {
        _id,
        title,
        "slug": slug.current,
        "seriesRef": series._ref,
        "seriesId": series._ref,
        year,
        status
      }
    `);
    
    // Requête pour récupérer toutes les séries avec leurs travaux
    const allSeries = await client.fetch(`
      *[_type == "series"] {
        _id,
        title,
        "slug": slug.current,
        "works": *[_type == "work" && references(^._id)] {
          _id,
          title,
          "slug": slug.current,
          year
        }
      }
    `);
    
    return NextResponse.json({
      totalWorks: allWorks.length,
      works: allWorks,
      totalSeries: allSeries.length,
      series: allSeries
    });
  } catch (error) {
    console.error('Debug API error:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
