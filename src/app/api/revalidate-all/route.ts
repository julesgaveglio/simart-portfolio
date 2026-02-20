import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function GET() {
  try {
    // Revalider tous les tags importants
    revalidateTag('series');
    revalidateTag('work');
    revalidateTag('about');
    
    return NextResponse.json({
      revalidated: true,
      message: 'Toutes les données ont été revalidées',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Erreur lors de la revalidation:', error);
    return NextResponse.json({ 
      error: 'Échec de la revalidation',
      message: error instanceof Error ? error.message : 'Erreur inconnue'
    }, { status: 500 });
  }
}
