"use client";
import React, { useEffect, useState } from "react";

import RichTextEditor, {
  BaseKit,
  Blockquote,
  Bold,
  BulletList,
  BulletListOptions,
  ClearOptions,
  CodeBlock,
  CodeBlockOptions,
  Heading,
  HeadingOptions,
  HorizontalRule,
  HorizontalRuleOptions,
  Italic,
  Link,
  LinkOptions,
  OrderedList,
  OrderedListOptions,
  Strike,
  StrikeOptions,
  Underline,
  UnderlineOptions,
  Editor,
  Emoji,
  Excalidraw,
  Highlight,
  Attachment,
  Mention,
  TextAlign,
  Color,
  FontSize,
  FontFamily,
  FormatPainter,
  Image as EditorImage,
  Indent,
  MoreMark,
  ColumnActionButton,
  SubAndSuperScript,
  Table,
  TaskList,
  ExportPdf,
  ExportWord,
  TableOfContents,
  TextDirection,
  Katex,
  SearchAndReplace,
  TextAlignOptions,
  SlashCommand,
  Mermaid,
  LineHeight,
  Code,
} from "reactjs-tiptap-editor";

const extensions = [
  BaseKit.configure({
    placeholder: { showOnlyCurrent: true },
    characterCount: { limit: 50_000 },
  }),
  Heading.configure({
    levels: [1, 2, 3],
  }),
  Link.configure({
    openOnClick: false,
    HTMLAttributes: {
      target: "_blank",
      rel: "noopener noreferrer",
    },
  }),

  CodeBlock.configure({
    defaultTheme: "dracula",
  }),
  LineHeight.configure({}),

  Blockquote,
  Bold,
  Italic,
  Underline,
  Strike,
  BulletList,
  OrderedList,
  HorizontalRule,
  Emoji,
  Highlight,
  Attachment,
  Mention,
  TextAlign,
  Color,
  FontSize,
  FontFamily,
  FormatPainter,
  EditorImage,
  Indent,
  MoreMark,
  ColumnActionButton,
  SubAndSuperScript,
  Table,
  TaskList,
  
  TableOfContents,
  TextDirection,
  SearchAndReplace,
  SlashCommand,
  LineHeight,
  Code,
];
import "reactjs-tiptap-editor/style.css";
import { useEditorState } from "reactjs-tiptap-editor";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { CardContent } from "../ui/card";
import PageLoader3 from "./PageLoader3";

const Toolbar = ({ editor }: { editor: any }) => {
  if (!editor) return null;

  return (
    <div className="flex flex-wrap gap-2 p-2 border-b">
      {/* Text styling */}
      <Button
        variant={editor.isActive("bold") ? "default" : "outline"}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        Bold
      </Button>
      <Button
        variant={editor.isActive("italic") ? "default" : "outline"}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        Italic
      </Button>
      <Button
        variant={editor.isActive("underline") ? "default" : "outline"}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        Underline
      </Button>
      <Button
        variant={editor.isActive("strike") ? "default" : "outline"}
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        Strike
      </Button>

      {/* Headings */}
      <Button
        variant={
          editor.isActive("heading", { level: 1 }) ? "default" : "outline"
        }
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      >
        H1
      </Button>
      <Button
        variant={
          editor.isActive("heading", { level: 2 }) ? "default" : "outline"
        }
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        H2
      </Button>

      {/* Lists */}
      <Button
        variant={editor.isActive("bulletList") ? "default" : "outline"}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        Bullet List
      </Button>
      <Button
        variant={editor.isActive("orderedList") ? "default" : "outline"}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      >
        Numbered List
      </Button>

      {/* Code and Quote */}
      <Button
        variant={editor.isActive("codeBlock") ? "default" : "outline"}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
      >
        Code Block
      </Button>
      <Button
        variant={editor.isActive("blockquote") ? "default" : "outline"}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
      >
        Quote
      </Button>
    </div>
  );
};

const DEFAULT = "";
export default function BlogEditor() {
  const { isReady, editor, editorRef } = useEditorState();
  const [showBlogEditor, setShowBlogEditor] = useState(false);
  const [content, setContent] = useState(DEFAULT);
  const [loading, setLoading] = useState(true);

  const onChangeContent = (value: any) => {
    setContent(value);
  };
  console.log(content);

  useEffect(() => {
    if (isReady && editor) {
      editor.commands.setContent(content);
    }
  }, [isReady, editor]);

  useEffect(() => {
    let time = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => {
      setContent(DEFAULT);
      clearTimeout(time);
    };
  }, []);

  const handleCreateBlog = () => {
    setShowBlogEditor(true);
  };

  const handleCloseBlogEditor = () => {
    setShowBlogEditor(false);
  };

  return (
    <div
      className={cn(
        "animate-in fade-in-50 duration-500",
        "slide-in-from-bottom-5 w-full"
      )}
    >
      {loading ? (
        <PageLoader3 />
      ) : (
        <CardContent>
          <div className="grid grid-cols-1 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Editor Canvas</h2>
              <div className=" shadow-lg overflow-hidden">
                <Toolbar editor={editor} />
                <RichTextEditor
                  output="html"
                  content={content}
                  onChangeContent={onChangeContent}
                  extensions={extensions}
                  contentClass="prose dark:prose-invert max-w-none min-h-[500px] p-4 focus:outline-none"
                  maxWidth="100%"
                  minHeight="500px"

                  // Add other props from previous sections
                />
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <Button variant="outline" onClick={handleCloseBlogEditor}>
                Cancel
              </Button>
              <Button onClick={() => {}}>Publish Article</Button>
            </div>
          </div>
        </CardContent>
      )}
    </div>
  );
}
