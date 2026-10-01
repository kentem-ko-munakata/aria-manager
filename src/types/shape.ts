import { z } from 'zod';

export const shapeSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1, 'タイトルは必須です'),
  type: z.enum(['triangle', 'square']),
  sideLength: z.number().positive('辺の長さは0より大きい値を指定してください'),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type Shape = z.infer<typeof shapeSchema>;
