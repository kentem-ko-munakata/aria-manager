import type { Shape } from '@/types/shape';
import styles from './ShapeBoard.module.css';
import { getShapeName } from '@/utils/getShapeName';
import { calculateArea } from '@/utils/calculateArea';

interface ShapeBoardProps {
  shapes: Shape[];
  selectedShapeId: Shape['id'] | null;
  onSelectShape: (id: Shape['id'] | null) => void;
}

export const ShapeBoard = ({ shapes, selectedShapeId, onSelectShape }: ShapeBoardProps) => {
  return (
    <table className={styles.board}>
      <thead>
        <tr>
          <th>図形名称</th>
          <th>面積(㎡)</th>
        </tr>
      </thead>
      <tbody>
        {shapes.map((shape) => (
          <tr key={shape.id} onClick={() => onSelectShape(selectedShapeId)}>
            <td>{getShapeName(shape.type)}</td>
            <td>{calculateArea(shape).toFixed(4)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
