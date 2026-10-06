import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { newShapeSchema, type NewShapeInput } from '@/entities/shape';

const defaultValues: NewShapeInput = {
  title: '',
  type: 'square',
  sideLength: 0,
};

export const useShapeFormModal = () => {
  return useForm<NewShapeInput>({
    resolver: zodResolver(newShapeSchema),
    defaultValues,
  });
};
