'use client';

import { RichTextEditor } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import Image from '@tiptap/extension-image';
import StarterKit from '@tiptap/starter-kit';
import { Button, ButtonGroup, TextInput } from '@mantine/core';
import prisma from '@/lib/prisma.ts';
import { useParams } from 'next/navigation';
import { revalidateTag } from 'next/cache';
import React, { useEffect, useState } from 'react';
import slugify from 'slugify';
import { upsertPost } from './actions.ts';

type Props = {
  defaultTitle?: string | undefined,
  defaultContent?: string | undefined,
  id?: string | undefined,
  buttonText?: string,
}

const Editor: React.FC<Props> = ({
  defaultTitle, defaultContent, id, buttonText = 'Post',
}) => {
  const editor = useEditor({
    content: defaultContent,
    extensions: [
      StarterKit,
      Image,
    ],
  })!;
  const { slug } = useParams();

  const [title, setTitle] = useState(defaultTitle);

  useEffect(() => {
    console.log(title);
  }, [title]);

  // const sendData = async () => {
  //   'use server';

  //   const content = editor.getHTML();
  //   const newSlug = slugify(title as string);
  //   const res = await prisma.post.upsert({
  //     where: {
  //       id,
  //     },
  //     create: {
  //       slug: newSlug,
  //       title,
  //       content,
  //     },
  //     update: {
  //       title,
  //       content,
  //     },
  //   });
  //   console.log(res);
  // };

  const sendEditorUpdate = async () => {
    const content = editor.getHTML();
    const res = await fetch('/api/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
        id,
      }),
    });
    console.log(res);
  };

  return (
    <div className="max-w-prose">
      <TextInput
        variant="filled"
        label="Title"
        placeholder="Title"
        defaultValue={defaultTitle}
        onChange={(e) => {
          setTitle(e.target.value);
          console.log(title);
        }}
        className="mb-2"
      />
      <RichTextEditor editor={editor} className="mb-2">
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
        </RichTextEditor.Toolbar>
        <RichTextEditor.Content className="max-w-prose" />
      </RichTextEditor>
      <Button onClick={async () => upsertPost({
        id, title, content: editor.getHTML(), slug,
      })}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default Editor;
