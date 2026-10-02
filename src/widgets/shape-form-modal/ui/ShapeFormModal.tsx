import { Controller } from 'react-hook-form';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { shapeTypeEnum, shapeTypeLabels, type NewShapeInput } from '@/entities/shape';
import { useShapeFormModal } from '../model/useShapeFormModal';

interface ShapeFormModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (input: NewShapeInput) => void;
}

export const ShapeFormModal = ({ open, onClose, onSubmit }: ShapeFormModalProps) => {
  const { control, handleSubmit, reset } = useShapeFormModal();

  const handleClose = () => {
    reset();
    onClose();
  };

  const submitForm = handleSubmit((values) => {
    onSubmit(values);
    reset();
    onClose();
  });

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth='xs'>
      <form onSubmit={submitForm}>
        <DialogTitle>図形を追加</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <Controller
              name='title'
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label='名前'
                  autoFocus
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name='type'
              control={control}
              render={({ field, fieldState }) => (
                <FormControl error={!!fieldState.error}>
                  <FormLabel>種類</FormLabel>
                  <RadioGroup {...field} row>
                    {shapeTypeEnum.options.map((option) => (
                      <FormControlLabel
                        key={option}
                        value={option}
                        control={<Radio />}
                        label={shapeTypeLabels[option]}
                      />
                    ))}
                  </RadioGroup>
                  {fieldState.error && <FormHelperText>{fieldState.error.message}</FormHelperText>}
                </FormControl>
              )}
            />
            <Controller
              name='sideLength'
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                  type='number'
                  label='辺の長さ'
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button type='button' onClick={handleClose}>
            キャンセル
          </Button>
          <Button type='submit' variant='contained'>
            追加
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
