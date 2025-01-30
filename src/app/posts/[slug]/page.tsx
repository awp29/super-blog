import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import { PostBody } from "@/app/_components/post-body";
import BackLink from "../_components/backLink";
import PostDate from "../_components/postDate";
import PostTitle from "../_components/postTitle";
import WeekLabel from "../_components/weekLabel";
import WeekData from "../_components/weekData/WeekData";
import React from "react";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  console.log("post", post);

  if (!post) {
    return notFound();
  }

  const weekNumber = String(post.week).padStart(2, "0");
  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <article className="flex w-full mt-[48px] mb-[96px] px-[16px]">
        <div className="mt-[53px] flex-1 text-right hidden lg:block mr-[32px]">
          <WeekLabel className="ml-auto">WEEK {weekNumber}</WeekLabel>
        </div>
        <div className="w-[576px] mx-auto">
          <BackLink />
          <PostDate>{post.startAndEndDate}</PostDate>
          <WeekLabel className="mt-[8px] lg:hidden">
            WEEK {weekNumber}
          </WeekLabel>
          <PostTitle>{post.title}</PostTitle>
          <PostBody content={content} />
        </div>
        <div className="mt-[100px] flex-1 hidden lg:block ml-[48px]">
          <WeekData>
            {post.art.map((item, index) => {
              return (
                <React.Fragment key={`art-item-${index}`}>
                  <WeekData.Label>{item.label}</WeekData.Label>
                  <WeekData.Title>
                    {item.title}
                    {item.suffix && (
                      <span className="text-[12px]"> - ({item.suffix})</span>
                    )}
                  </WeekData.Title>
                  <WeekData.Author>{item.author}</WeekData.Author>
                </React.Fragment>
              );
            })}
          </WeekData>
        </div>
      </article>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
