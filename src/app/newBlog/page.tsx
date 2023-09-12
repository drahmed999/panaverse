import React from "react";
import Link from "next/link";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Wrapper from "@/components/shared/Wrapper";
import Image from "next/image";

// async function getSyllabus() {
//   const res = await fetch(
//     `https://cdn.contentful.com/spaces/kfhc9jkq7tom/entries?access_token=Fl-H2H-gSkhcPDJ61V_SPg-NM0IEAFlJwzgxoiK8NPM&content_type=syllabus`,
//     { cache: "no-store" }
//   );

//   // Recommendation: handle errors
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }
//   const data = await res.json();
//   return data;}

const getBlog = async () => {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/kfhc9jkq7tom/entries?access_token=Fl-H2H-gSkhcPDJ61V_SPg-NM0IEAFlJwzgxoiK8NPM&content_type=newBlogAi`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch date");
  }
  const data = await res.json();
  return data;
};

const Blog = async () => {
  const post = await getBlog();
  console.log(post);
  console.log("ahmed");
  return (
    <>
      <Wrapper>
        <div className="max-w-[1240px] mx-auto pt-10">
          <div className="grid sm:grid-cols-2 md:grid-col-3 content-center justify-center">
            {post.items.map((items: any) => (
              <div key={items.sys.id}>
                {" "}
                {/* Image */}
                {post.includes.Asset.map((a: any) => (
                  <div>
                    {items.fields.img.id == a.sys.id ? (
                      <Image
                        src={"https:" + a.fields.file.url}
                        alt="/"
                        width={1000}
                        height={1000}
                        className="rounded-xl max-h-40"
                      />
                    ) : (
                      <div> No image found</div>
                    )}
                  </div>
                ))}
                {/* Image */}
                {/* Title */}
                <div>{items.fields.title}</div>
                {/* Title */}
                {/* author */}
                {post.includes.Entry.map((b: any) => (
                  <div>
                    {items.fields.creator.sys.id == b.sys.id ? (
                      <div>
                        <p>Author: {b.fields.name}</p>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                ))}
                {/* author */}
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Blog;
