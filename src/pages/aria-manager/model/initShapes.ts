import type { Shape } from '@/entities/shape';

export const initShapes: Shape[] = [
  {
    id: '1',
    title: '正方形A',
    type: 'square',
    sideLength: 4,
    createdAt: '2026-01-10T09:00:00Z',
    updatedAt: '2026-01-10T09:00:00Z',
  },
  {
    id: '2',
    title: '正方形B',
    type: 'square',
    sideLength: 6,
    createdAt: '2026-02-15T09:00:00Z',
    updatedAt: '2026-02-20T09:00:00Z',
  },
  {
    id: '3',
    title: '三角形A',
    type: 'triangle',
    sideLength: 5,
    createdAt: '2026-03-01T09:00:00Z',
    updatedAt: '2026-03-01T09:00:00Z',
  },
  {
    id: '4',
    title: '円A',
    type: 'circle',
    sideLength: 3,
    createdAt: '2026-03-05T09:00:00Z',
    updatedAt: '2026-03-05T09:00:00Z',
  },
];
