'use client';

import { RichTextEditor } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import Image from '@tiptap/extension-image';
import StarterKit from '@tiptap/starter-kit';
import { Button, ButtonGroup } from '@mantine/core';
import prisma from '@/lib/prisma';

const title = 'title text';

export default function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
    ],
  });

  const sendEditorUpdate = async () => {
    const content = editor.getJSON();
    console.log(content);
    const res = await fetch('/api/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'Title Test',
        content,
      }),
    });
    console.log(res);
  };

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
            <Button onClick={sendEditorUpdate} />
          </ButtonGroup>
        </RichTextEditor.Toolbar>
        <RichTextEditor.Content className="max-w-prose" />
      </RichTextEditor>
    </div>
  );
}
