import { AreaTable } from '@/widgets/area-table';
import { Button } from '@mui/material';
import { calculateTotalArea } from '@/entities/shape';
import { useShape } from '../model/useShape';

export const HomePage = () => {
  const { shapes, addShape, selectedShapeIds, toggleShapeSelection, toggleAllShapeSelection } = useShape();

  const totalArea = calculateTotalArea(shapes);

  return (
    <div>
      <h1>面積管理システム</h1>
      <AreaTable
        shapes={shapes}
        selectedShapeIds={selectedShapeIds}
        onToggleShape={toggleShapeSelection}
        onToggleAll={toggleAllShapeSelection}
      />
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
