import { ShapeBoard } from '@/components/shape-board/ShapeBoard';
import { sampleShapes } from '@/data/sampleShapes';
import type { Shape } from '@/types/shape';
import { useState } from 'react';

export const HomePage = () => {
  const [shapes, setShapes] = useState<Shape[]>(sampleShapes);
  const [selectedShapeId, setSelectedShapeId] = useState<Shape['id'] | null>(null);

  return (
    <div>
      <h1>面積管理システム</h1>
      <ShapeBoard shapes={shapes} selectedShapeId={selectedShapeId} onSelectShape={setSelectedShapeId} />
    </div>
  );
};
