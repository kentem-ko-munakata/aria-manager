import { sampleShapes } from '@/data/sampleShapes';
import type { Shape } from '@/entities/shape/model/shape';
import { useState } from 'react';
import { AreaTable } from '@/widgets/area-table';

export const HomePage = () => {
  const [shapes, setShapes] = useState<Shape[]>(sampleShapes);
  const [selectedShapeId, setSelectedShapeId] = useState<Shape['id'] | null>(null);

  return (
    <div>
      <h1>面積管理システム</h1>
      <AreaTable shapes={shapes} selectedShapeId={selectedShapeId} onSelectShape={setSelectedShapeId} />
    </div>
  );
};
