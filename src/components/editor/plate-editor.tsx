'use client';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Value } from '@udecode/plate';
import { Plate } from '@udecode/plate/react';

import { SettingsDialog } from '@/components/editor/settings';
import { useCreateEditor } from '@/components/editor/use-create-editor';
import { Editor, EditorContainer } from '@/components/plate-ui/editor';

export function PlateEditor(
  {
    initialValue,
    onChange
  }: {
    initialValue: Value,
    onChange: ({value}: {value: Value}) => void
}) {
  const editor = useCreateEditor(initialValue);

  return (
    <DndProvider backend={HTML5Backend}>
      <Plate onChange={onChange} editor={editor}>
        <EditorContainer>
          <Editor variant="demo" />
        </EditorContainer>

        <SettingsDialog />
      </Plate>
    </DndProvider>
  );
}
