import type { Shape } from '@/entities/shape';
import { initShapes } from './initShapes';
import { useState } from 'react';
import type { NewShapeInput } from '@/entities/shape/model/shape';

export const useShape = () => {
  const [shapes, setShapes] = useState<Shape[]>(initShapes);
  const [selectedShapeIds, setSelectedShapeIds] = useState<string[]>([]);

  // 図形追加用
  const addShape = (input: NewShapeInput) => {
    const now = new Date().toISOString();
    const newShape: Shape = {
      id: crypto.randomUUID(),
      ...input,
      createdAt: now,
      updatedAt: now,
    };
    setShapes((prev) => [...prev, newShape]);
  };

  // 複数選択用
  const toggleShapeSelection = (id: string) => {
    setSelectedShapeIds((prev) => (prev.includes(id) ? prev.filter((selectedId) => selectedId !== id) : [...prev, id]));
  };

  // 全選択用
  const toggleAllShapeSelection = () => {
    setSelectedShapeIds((prev) => (prev.length === shapes.length ? [] : shapes.map((shape) => shape.id)));
  };

  // 削除用
  const removeSelectedShapes = () => {
    if (selectedShapeIds.length === 0) {
      return;
    }
    setShapes((prev) => prev.filter((shape) => !selectedShapeIds.includes(shape.id)));
    setSelectedShapeIds([]);
  };

  return {
    shapes,
    addShape,
    selectedShapeIds,
    toggleShapeSelection,
    toggleAllShapeSelection,
    removeSelectedShapes,
  };
};
