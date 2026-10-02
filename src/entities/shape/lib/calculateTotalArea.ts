import { calculateArea } from '@/shared/lib/calculateArea';
import type { Shape } from '../model/shape';

// 図形一覧の合計面積を算出
// Shape[]（entity固有の型）を扱うため shared ではなく entities/shape/libに配置
export const calculateTotalArea = (shapes: Shape[]): number =>
  shapes.reduce((sum, shape) => sum + calculateArea(shape.type, shape.sideLength), 0);
