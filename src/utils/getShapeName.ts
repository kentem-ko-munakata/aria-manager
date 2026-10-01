export const getShapeName = (type: string): string => {
  switch (type) {
    case 'square':
      return '四角形';

    case 'triangle':
      return '三角形';

    default:
      return '不明';
  }
};
