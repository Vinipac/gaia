'use client';

import { RichTextEditor } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import Image from '@tiptap/extension-image';
import StarterKit from '@tiptap/starter-kit';
import { Button, ButtonGroup } from '@mantine/core';

export default function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
    ],
  });

  return (
    <div className="max-w-prose">
      <RichTextEditor editor={editor}>
        <RichTextEditor.Toolbar>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
            <RichTextEditor.Strikethrough />
            <RichTextEditor.ClearFormatting />
            <RichTextEditor.Highlight />
            <RichTextEditor.Code />
          </RichTextEditor.ControlsGroup>
          <ButtonGroup>
            <Button />
          </ButtonGroup>
        </RichTextEditor.Toolbar>
        <RichTextEditor.Content className="max-w-prose" />
      </RichTextEditor>
    </div>
  );
}
