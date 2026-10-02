import { sampleShapes } from '@/data/sampleShapes';
import type { Shape } from '@/entities/shape/model/shape';
import { useState } from 'react';
import { AreaTable } from '@/widgets/area-table';
import { Button } from '@mui/material';
import { calculateTotalArea } from '@/entities/shape';

export const HomePage = () => {
  const [shapes, setShapes] = useState<Shape[]>(sampleShapes);
  const [selectedShapeId, setSelectedShapeId] = useState<Shape['id'] | null>(null);

  const totalArea = calculateTotalArea(shapes);

  return (
    <div>
      <h1>面積管理システム</h1>
      <AreaTable shapes={shapes} selectedShapeId={selectedShapeId} onSelectShape={setSelectedShapeId} />
      {/* 合計面積 */}
      <p>Total：{totalArea.toFixed(4)}</p>
      {/* 追加ボタン */}
      <Button>追加</Button>
      {/* 編集ボタン */}
      {/* 削除ボタン */}
      {/* 追加・編集フォームモーダル */}
    </div>
  );
};
