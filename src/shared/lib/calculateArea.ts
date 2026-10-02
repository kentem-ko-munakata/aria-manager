export const calculateArea = (type: string, sideLength: number) => {
  switch (type) {
    case 'square':
      return sideLength * sideLength;
    case 'triangle':
      return (Math.sqrt(3) / 4) * sideLength ** 2;
    case 'circle':
      return Math.PI * (sideLength / 2) * (sideLength / 2);
    default:
      return 0;
  }
};
