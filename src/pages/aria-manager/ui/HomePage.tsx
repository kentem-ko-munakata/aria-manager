import { AreaTable } from '@/widgets/area-table';
import { Button } from '@mui/material';
import { calculateTotalArea } from '@/entities/shape';
import { useShape } from '../model/useShape';
import styles from './HomePage.module.css';
import { useState } from 'react';
import { ShapeFormModal } from '@/widgets/shape-form-modal';

export const HomePage = () => {
  const { shapes, addShape, selectedShapeIds, toggleShapeSelection, toggleAllShapeSelection, removeSelectedShapes } =
    useShape();

  // モーダル開閉用
  const [isShapeFormModal, setIsShapeFormModal] = useState(false);

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
          <Button variant='contained' size='large' onClick={() => setIsShapeFormModal(true)}>
            追加
          </Button>
          {/* 削除ボタン */}
          <Button
            variant='contained'
            color='error'
            size='large'
            disabled={selectedShapeIds.length === 0}
            onClick={removeSelectedShapes}
          >
            削除{selectedShapeIds.length > 0 && `（${selectedShapeIds.length}件）`}
          </Button>
        </div>
      </div>
      <ShapeFormModal open={isShapeFormModal} onClose={() => setIsShapeFormModal(false)} onSubmit={addShape} />
    </div>
  );
};
