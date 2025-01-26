"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Heart, Bookmark } from "lucide-react";
import ImagePreview from "./ImagePreview";

interface PostCardInterface {
  post: {
    name: string;
    avatar: string;
    time: string;
    content: string;
    image?: string;
    likes: number;
  };
}
const PostCard = ({ post }: PostCardInterface) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const toggleExpansion = () => setIsExpanded(!isExpanded);
  const toggleLike = () => setLiked(!liked);
  const toggleSave = () => setSaved(!saved);

  return (
    <Card className="w-full max-w-2xl border border-secondary rounded-xl p-4">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            {post.avatar[0].toUpperCase()}
          </div>
          <div>
            <CardTitle>{post.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{post.time}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <AnimatePresence mode="wait">
          <motion.div
            key={isExpanded ? "expanded" : "collapsed"}
            initial={{ height: "auto", opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: "auto", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.p>
              {post.content.length > 120
                ? isExpanded
                  ? post.content
                  : `${post.content.slice(0, 100)}... `
                : post.content}
              {post.content.length > 120 && (
                <button
                  className="text-primary underline ml-1"
                  onClick={toggleExpansion}
                >
                  {isExpanded ? "View less" : "View more"}
                </button>
              )}
            </motion.p>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          {post.image && (
            <ImagePreview
              key={post.name}
              src={post.image}
              alt={post.name}
              width={400}
              height={200}
              className="rounded-xl mt-4 w-full object-cover"
            />
          )}
        </AnimatePresence>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <button
          className={`flex items-center space-x-2 transition-colors ${
            liked
              ? "text-red-500 hover:text-red-600"
              : "text-muted-foreground hover:text-primary"
          }`}
          onClick={toggleLike}
        >
          <Heart
            size={18}
            fill={liked ? "currentColor" : "none"}
            className={`transform transition-transform duration-200 ${
              liked ? "scale-125" : "scale-100"
            } ${liked ? "" : ""}`}
          />
          <span
            className={`transition-all duration-200 ${
              liked ? "transform translate-x-0.5" : ""
            }`}
          >
            {post.likes}
          </span>
        </button>
        <button
          className={`flex items-center space-x-2 transition-colors ${
            saved
              ? "text-primary hover:text-primary-700"
              : "text-muted-foreground hover:text-primary"
          }`}
          onClick={toggleSave}
        >
          <Bookmark
            size={18}
            fill={saved ? "currentColor" : "none"}
            className={`transform transition-transform duration-200 ${
              saved ? "scale-125" : "scale-100"
            } ${saved ? "" : ""}`}
          />
          <span>Save</span>
        </button>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
