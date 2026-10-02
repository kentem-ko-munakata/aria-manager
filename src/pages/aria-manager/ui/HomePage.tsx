import { AreaTable } from '@/widgets/area-table';
import { Button } from '@mui/material';
import { calculateTotalArea } from '@/entities/shape';
import { useShape } from '../model/useShape';
import styles from './HomePage.module.css';

export const HomePage = () => {
  const { shapes, addShape, selectedShapeIds, toggleShapeSelection, toggleAllShapeSelection } = useShape();

  const totalArea = calculateTotalArea(shapes);

  return (
    <div className={styles.app}>
      <h1>面積管理システム</h1>

      <div className={styles.content}>
        <div className={styles.table}>
          <AreaTable
            shapes={shapes}
            selectedShapeIds={selectedShapeIds}
            onToggleShape={toggleShapeSelection}
            onToggleAll={toggleAllShapeSelection}
          />
        </div>

        <div className={styles.control}>
          {/* 合計面積 */}
          <p>Total：{totalArea.toFixed(4)}</p>
          {/* 追加ボタン */}
          <Button>追加</Button>
          {/* 編集ボタン */}
          {/* 削除ボタン */}
        </div>
      </div>
      {/* 追加・編集フォームモーダル */}
    </div>
  );
};
