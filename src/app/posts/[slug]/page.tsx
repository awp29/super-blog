import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Alert from "@/app/_components/alert";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import BackLink from "../_components/backLink";
import PostDate from "../_components/postDate";
import PostTitle from "../_components/postTitle";
import WeekLabel from "../_components/weekLabel";
import SectionTitle from "../_components/sectionTitle";
import PostBodyText from "../_components/postText";
import WeekData from "../_components/weekData/WeekData";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <div className="flex gap-[32px] w-fit mx-auto mt-[48px] mb-[96px]">
        <div className="mt-[53px]">
          <WeekLabel>WEEK 24</WeekLabel>
        </div>
        <div className="w-[576px]">
          <BackLink />
          <PostDate>13th - 17th Jan 2025</PostDate>
          <PostTitle>
            Deleted Instagram, hate web images, everything doesn't have to be
            perfect.
          </PostTitle>

          <SectionTitle>1. Free of social media!</SectionTitle>
          <PostBodyText>
            Unshackled! It's mad how great I've felt this month, and I really
            think it's because I've cut out social media. There's no more “check
            me, check me” pulling at my attention. It's like a fog I didn't know
            was there has lifted. Coding feels fun again. I've got focus, I've
            got my attention back. This week, I've found myself getting lost in
            coding—something I haven't felt in ages. I've been super productive.
            I've knocked out everything I wanted to: the portfolio, my case
            studies, the Minesweeper clone (rewrote it in TypeScript). It's all
            been fun, like work used to be. I'm not grinding through it or
            forcing myself to focus anymore. I'm just enjoying coding again.
            I'll never go back to social media.
          </PostBodyText>

          <SectionTitle>
            2. Fucking images! Optimising images for the web. BLAH! 🤮
          </SectionTitle>
          <PostBodyText>
            {`This has had my life this week! After 10 years of coding, Iive never
            really had to deal with optimizing images before. Thatis what
            happens when you work on enterprise apps for your whole career. Iive
            painfully discovered thereis a whole art to optimizing images for
            the web. Itis not just a matter of exporting an image and slapping
            it on a website! Itis been a bit of a grind, but Iive learned a few
            things: Use SVGs for logos. They scale and look great at any size.
            Use PNGs only when you need transparency in the image. Use JPGs for
            everything else. Use <img /> tags over a <div /> with a background
            image. Itis much better for accessibility and SEO. Use plain JPGs
            and add effects like drop shadows and borders in code. It keeps the
            file size low.`}
          </PostBodyText>
        </div>
        <div className="mt-[100px]">
          <WeekData>
            <WeekData.Item>
              <WeekData.Label>Song</WeekData.Label>
              <WeekData.Title>Anytime, Anywhere, Anyhow</WeekData.Title>
              <WeekData.Author>Matt Maltese</WeekData.Author>
            </WeekData.Item>

            <WeekData.Item>
              <WeekData.Label>Album</WeekData.Label>
              <WeekData.Title>Charm</WeekData.Title>
              <WeekData.Author>Clairo</WeekData.Author>
            </WeekData.Item>

            <WeekData.Item>
              <WeekData.Label>Book</WeekData.Label>
              <WeekData.Title>
                Flatland - <span className="text-[12px]">(Finished)</span>
              </WeekData.Title>
              <WeekData.Author>Edwin A. Abbott</WeekData.Author>
            </WeekData.Item>

            <WeekData.Item>
              <WeekData.Label>Book</WeekData.Label>
              <WeekData.Title>Runaway Horses</WeekData.Title>
              <WeekData.Author>Yukio Mishima</WeekData.Author>
            </WeekData.Item>

            <WeekData.Item>
              <WeekData.Label>Book</WeekData.Label>
              <WeekData.Title>
                Star Wars: Episode III - Revenge of the Sith
              </WeekData.Title>
              <WeekData.Author>Matthew Stover</WeekData.Author>
            </WeekData.Item>
          </WeekData>
        </div>
      </div>

      <Alert preview={post.preview} />
      <Container>
        <Header />
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} />
        </article>
      </Container>
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
