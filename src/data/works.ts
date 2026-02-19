// Utilisation de chaînes de caractères pour les clés de traduction

export type WorkStatus = 'available' | 'sold';

export interface Work {
  id: string;
  title: string;
  dimensions: string;
  year: number;
  medium: string; // Clé de traduction
  status: WorkStatus;
  imagePath: string;
  description?: string; // Clé de traduction
}

export interface Series {
  id: string;
  title: string; // Clé de traduction
  description: string; // Clé de traduction
  coverImage: string;
  works: Work[];
}

const works: Series[] = [
  {
    id: 'field-of-becoming',
    title: 'works.series.fieldOfBecoming.title',
    description: 'works.series.fieldOfBecoming.description',
    coverImage: '/images/series/field-of-becoming.webp',
    works: [
      {
        id: 'field-of-becoming-1',
        title: 'Field of Becoming I',
        dimensions: '100 x 80 cm',
        year: 2026,
        medium: 'works.medium.oilOnCanvas',
        status: 'available',
        imagePath: '/images/works/field-of-becoming/field-of-becoming-1.webp',
        description: 'works.descriptions.fieldOfBecoming1'
      },
      {
        id: 'field-of-becoming-2',
        title: 'Field of Becoming II',
        dimensions: '100 x 80 cm',
        year: 2026,
        medium: 'works.medium.oilOnCanvas',
        status: 'sold',
        imagePath: '/images/works/field-of-becoming/field-of-becoming-2.webp',
        description: 'works.descriptions.fieldOfBecoming2'
      },
      {
        id: 'field-of-becoming-3',
        title: 'Field of Becoming III',
        dimensions: '120 x 100 cm',
        year: 2026,
        medium: 'works.medium.oilOnCanvas',
        status: 'available',
        imagePath: '/images/works/field-of-becoming/field-of-becoming-3.webp',
        description: 'works.descriptions.fieldOfBecoming3'
      },
      {
        id: 'field-of-becoming-4',
        title: 'Field of Becoming IV',
        dimensions: '120 x 100 cm',
        year: 2026,
        medium: 'works.medium.oilOnCanvas',
        status: 'available',
        imagePath: '/images/works/field-of-becoming/field-of-becoming-4.webp',
        description: 'works.descriptions.fieldOfBecoming4'
      }
    ]
  },
  {
    id: 'inner-expectation',
    title: 'works.series.innerExpectation.title',
    description: 'works.series.innerExpectation.description',
    coverImage: '/images/series/inner-expectation.webp',
    works: [
      {
        id: 'inner-expectation-1',
        title: 'Inner Expectation I',
        dimensions: '80 x 60 cm',
        year: 2026,
        medium: 'works.medium.mixedMedia',
        status: 'available',
        imagePath: '/images/works/inner-expectation/inner-expectation-1.webp',
        description: 'works.descriptions.innerExpectation1'
      },
      {
        id: 'inner-expectation-2',
        title: 'Inner Expectation II',
        dimensions: '80 x 60 cm',
        year: 2026,
        medium: 'works.medium.mixedMedia',
        status: 'available',
        imagePath: '/images/works/inner-expectation/inner-expectation-2.webp',
        description: 'works.descriptions.innerExpectation2'
      },
      {
        id: 'inner-expectation-3',
        title: 'Inner Expectation III',
        dimensions: '90 x 70 cm',
        year: 2026,
        medium: 'works.medium.mixedMedia',
        status: 'sold',
        imagePath: '/images/works/inner-expectation/inner-expectation-3.webp',
        description: 'works.descriptions.innerExpectation3'
      }
    ]
  },
  {
    id: 'threshold',
    title: 'works.series.threshold.title',
    description: 'works.series.threshold.description',
    coverImage: '/images/series/threshold.webp',
    works: [
      {
        id: 'threshold-1',
        title: 'Threshold I',
        dimensions: '150 x 120 cm',
        year: 2026,
        medium: 'works.medium.acrylicOnCanvas',
        status: 'available',
        imagePath: '/images/works/threshold/threshold-1.webp',
        description: 'works.descriptions.threshold1'
      },
      {
        id: 'threshold-2',
        title: 'Threshold II',
        dimensions: '150 x 120 cm',
        year: 2026,
        medium: 'works.medium.acrylicOnCanvas',
        status: 'available',
        imagePath: '/images/works/threshold/threshold-2.webp',
        description: 'works.descriptions.threshold2'
      },
      {
        id: 'threshold-3',
        title: 'Threshold III',
        dimensions: '150 x 120 cm',
        year: 2026,
        medium: 'works.medium.acrylicOnCanvas',
        status: 'sold',
        imagePath: '/images/works/threshold/threshold-3.webp',
        description: 'works.descriptions.threshold3'
      },
      {
        id: 'threshold-4',
        title: 'Threshold IV',
        dimensions: '180 x 150 cm',
        year: 2026,
        medium: 'works.medium.acrylicOnCanvas',
        status: 'available',
        imagePath: '/images/works/threshold/threshold-4.webp',
        description: 'works.descriptions.threshold4'
      },
      {
        id: 'threshold-5',
        title: 'Threshold V',
        dimensions: '180 x 150 cm',
        year: 2026,
        medium: 'works.medium.acrylicOnCanvas',
        status: 'available',
        imagePath: '/images/works/threshold/threshold-5.webp',
        description: 'works.descriptions.threshold5'
      }
    ]
  }
];

export default works;

export const getSeriesById = (id: string): Series | undefined => {
  return works.find(series => series.id === id);
};

export const getWorkById = (seriesId: string, workId: string): Work | undefined => {
  const series = getSeriesById(seriesId);
  if (!series) return undefined;
  return series.works.find(work => work.id === workId);
};

export const getAllSeries = (): Series[] => {
  return works;
};
