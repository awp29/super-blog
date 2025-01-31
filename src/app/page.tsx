import { getAllPosts } from "@/lib/api";
import WeekLabel from "./_components/weekLabel";
import PostDate from "./_components/postDate";
import ViewPostLink from "./_components/viewPostLink";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main className="mt-[48px] md:mt-[64px] mb-[64px] md:mb-[96px] px-[16px]">
      <h1 className="md:w-[576px] md:mx-auto text-[40px] md:text-[56px] font-sans mb-[64px] md:mb-[64px]">
        ANDREW
        <br />
        PEIRS
      </h1>

      <div className="flex flex-col gap-[48px]">
        {allPosts.map((post, index) => {
          const weekNumber = String(post.week).padStart(2, "0");
          const currentWeek = index === 0;

          return (
            <div key={post.week} className="md:flex md:gap-[32px]">
              <div className="flex-1 text-right hidden lg:block mt-[28px]">
                <WeekLabel className="ml-auto" active={currentWeek}>
                  WEEK {weekNumber}
                </WeekLabel>
              </div>
              <div className="w-auto md:w-[576px] mx-auto">
                <PostDate>{post.startAndEndDate}</PostDate>
                <WeekLabel className="mt-[8px] lg:hidden" active={currentWeek}>
                  WEEK {weekNumber}
                </WeekLabel>
                <p className="mt-[4px] mb-[8px] leading-relaxed">
                  {post.title}
                </p>

                <ViewPostLink slug={post.slug} />
              </div>
              <div className="flex-1 hidden lg:block" />
            </div>
          );
        })}
      </div>
    </main>
  );
}
