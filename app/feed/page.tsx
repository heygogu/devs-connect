"use client";
import { AppSidebar } from "@/components/app-sidebar";
import PostCard from "@/components/common/PostCard";
import SidebarLayout from "@/components/layouts/SidebarLayout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import PageContainer from "@/components/layouts/PageContainer";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import PageLoader from "@/components/common/PageLoader";

const posts = [
  {
    name: "John Doe",
    avatar: "jd",
    time: "3 days ago",
    content:
      "This is a sample social media post with a longer description that should be truncated and expandable.This is a sample social media post with a longer description that should be truncated and expandable.This is a sample social media post with a longer description that should be truncated and expandable.This is a sample social media post with a longer description that should be truncated and expandable.This is a sample social media post with a longer description that should be truncated and expandable.This is a sample social media post with a longer description that should be truncated and expandable.This is a sample social media post with a longer description that should be truncated and expandable.",
    image:
      "https://www.hdwallpapers.in/thumbs/2025/yellow_eyes_girl_look_makeup_dark_anime_art_wallpaper_black_background_4k_hd_anime_girl-t2.jpg ",
    likes: 42,
  },
  {
    name: "Jane Smith",
    avatar: "js",
    time: "1 week ago",
    content:
      "Another post with a different layout and some interactive features.",
    likes: 68,
    image:
      "https://www.hdwallpapers.in/thumbs/2025/green_porsche_911_gt3_weissach_package_car_4k_hd_cars-t1.jpg",
  },
  {
    name: "Alex Johnson",
    avatar: "aj",
    time: "2 hours ago",
    content:
      "A simple post without an image, showcasing the card design without any extra elements.",
    likes: 12,
    image:
      "https://www.hdwallpapers.in/thumbs/2025/audi_rs_q8_2020_4k_hd_cars-t2.jpg",
  },
];
const Feed = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <PageContainer>
      {loading ? (
        <PageLoader />
      ) : (
        <div
          className={cn(
            "animate-in fade-in-50 duration-500",
            "slide-in-from-bottom-5 w-full"
          )}
        >
          <div className="grid grid-cols-1">
            <div className="col-span-1 flex-col items-center mx-auto">
              {posts.map((post, index) => (
                <div key={index} className="mb-4">
                  <PostCard post={post} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </PageContainer>
  );
};

// export default Feed;

export default function FeedPage() {
  return (
    <SidebarLayout>
      <Feed />
    </SidebarLayout>
  );
}
