import { shapeTypeLabels, type Shape } from '@/entities/shape';
import { calculateArea } from '@/shared/lib/calculateArea';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface AreaTableProps {
  shapes: Shape[];
  selectedShapeId: string | null;
  onSelectShape: (id: string) => void;
}

export const AreaTable = ({ shapes, selectedShapeId, onSelectShape }: AreaTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>図形名称</TableCell>
            <TableCell>面積(㎡)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {shapes.map((shape) => (
            <TableRow
              key={shape.id}
              hover
              selected={shape.id === selectedShapeId}
              onClick={() => onSelectShape(shape.id)}
              sx={{ cursor: 'pointer' }}
            >
              <TableCell>{shapeTypeLabels[shape.type]}</TableCell>
              <TableCell>{calculateArea(shape.type, shape.sideLength).toFixed(4)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
