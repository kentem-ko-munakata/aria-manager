import { shapeTypeLabels, type Shape } from '@/entities/shape';
import { calculateArea } from '@/shared/lib/calculateArea';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Checkbox } from '@mui/material';

interface AreaTableProps {
  shapes: Shape[];
  selectedShapeIds: string[];
  onToggleShape: (id: string) => void;
  onToggleAll: () => void;
}

export const AreaTable = ({ shapes, selectedShapeIds, onToggleShape, onToggleAll }: AreaTableProps) => {
  const allSelected = shapes.length > 0 && selectedShapeIds.length === shapes.length;
  // 一部だけ選択されている状態（全選択チェックボックスを「-」表示にする）
  const someSelected = selectedShapeIds.length > 0 && selectedShapeIds.length < shapes.length;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Checkbox onChange={onToggleAll} indeterminate={someSelected} checked={allSelected} />
            </TableCell>
            <TableCell>図形名称</TableCell>
            <TableCell>面積(㎡)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {shapes.map((shape) => (
            <TableRow
              key={shape.id}
              hover
              selected={selectedShapeIds.includes(shape.id)}
              onClick={() => onToggleShape(shape.id)}
              sx={{ cursor: 'pointer' }}
            >
              <TableCell>
                <Checkbox
                  checked={selectedShapeIds.includes(shape.id)}
                  // チェックボックス自体のクリックで行のonClickも二重発火しないようにする
                  onClick={(e) => e.stopPropagation()}
                  onChange={() => onToggleShape(shape.id)}
                />
              </TableCell>
              <TableCell>{shapeTypeLabels[shape.type]}</TableCell>
              <TableCell>{calculateArea(shape.type, shape.sideLength).toFixed(4)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
