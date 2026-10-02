import { z } from 'zod';

export const shapeTypeEnum = z.enum(['triangle', 'square', 'circle']);

export const shapeTypeLabels: Record<z.infer<typeof shapeTypeEnum>, string> = {
  triangle: '三角形',
  square: '四角形',
  circle: '円',
};

export const shapeSchema = z.object({
  id: z.string(),
  title: z.string().min(1, 'タイトルを入力して下さい').max(20, '20文字以内で入力してください'),
  type: shapeTypeEnum,
  sideLength: z
    .number()
    .positive('辺の長さは0より大きい値を指定してください')
    .max(1000, '辺の長さは1000以下で入力してください'),
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
});

export type Shape = z.infer<typeof shapeSchema>;
