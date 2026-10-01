import type { Shape } from '@/types/shape';

export const sampleShapes: Shape[] = [
  {
    id: crypto.randomUUID(),
    title: 'サンプル1',
    type: 'square',
    sideLength: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: crypto.randomUUID(),
    title: 'サンプル2',
    type: 'triangle',
    sideLength: 10,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
