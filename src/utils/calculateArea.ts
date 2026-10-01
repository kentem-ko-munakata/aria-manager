import type { Shape } from '@/types/shape';

export const calculateArea = (shape: Shape): number => {
  switch (shape.type) {
    case 'square':
      return shape.sideLength ** 2;
    case 'triangle':
      return (Math.sqrt(3) / 4) * shape.sideLength ** 2;
  }
};
