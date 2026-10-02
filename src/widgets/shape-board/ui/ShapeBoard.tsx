import type { Shape } from '@/entities/shape/index';
import styles from './ShapeBoard.module.css';
import { calculateArea } from '@/shared/lib/calculateArea';

interface ShapeBoardProps {
  shapes: Shape[];
  selectedShapeId: Shape['id'] | null;
  onSelectShape: (id: Shape['id'] | null) => void;
}

export const ShapeBoard = ({ shapes, selectedShapeId, onSelectShape }: ShapeBoardProps) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>図形名称</th>
          <th className={styles.numeric}>面積(㎡)</th>
        </tr>
      </thead>
      <tbody>
        {shapes.map((shape) => (
          <tr
            key={shape.id}
            className={shape.id === selectedShapeId ? styles.selectedRow : undefined}
            aria-selected={shape.id === selectedShapeId}
            onClick={() => onSelectShape(shape.id)}
          >
            <td>{shape.type}</td>
            <td className={styles.numeric}>{calculateArea(shape).toFixed(4)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
