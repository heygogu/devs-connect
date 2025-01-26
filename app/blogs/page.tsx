"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

// import { H1, H2, Paragraph, Subtitle } from "@/components/ui/typography";
import { Edit3 as EditIcon, Plus as PlusIcon } from "lucide-react";
// import BlogEditor from "@/components/BlogEditor";
import SidebarLayout from "@/components/layouts/SidebarLayout";
import PageContainer from "@/components/layouts/PageContainer";
import { cn } from "@/lib/utils";
import BlogEditorImage from "@/assets/images/text-editor.png";

import "reactjs-tiptap-editor/style.css";
import { useEditorState } from "reactjs-tiptap-editor";
import BlogEditor from "@/components/common/BlogEditor";

const BlogLandingPage = () => {
  const { isReady, editor, editorRef } = useEditorState();
  const [showBlogEditor, setShowBlogEditor] = useState(false);

  return (
    <PageContainer>
      <div
        className={cn(
          "animate-in fade-in-50 duration-500",
          "slide-in-from-bottom-5 w-full"
        )}
      >
        <div className="">
          <CardHeader>
            <div className="flex items-center justify-between">
              <h1 className="text-primary text-3xl font-semibold">
                Welcome to Our Blog Creation
              </h1>
              {/* <Button
                variant="default"
                // size="large"
                className="flex items-center space-x-2"
                onClick={handleCreateBlog}
              >
                <EditIcon className="h-6 w-6" />
                <span>Create Blog</span>
              </Button> */}
            </div>
          </CardHeader>
          <CardContent>
            <BlogEditor />
          </CardContent>
        </div>
      </div>
    </PageContainer>
  );
};

export default function BlogsPage() {
  return (
    <SidebarLayout>
      <BlogLandingPage />
    </SidebarLayout>
  );
}
