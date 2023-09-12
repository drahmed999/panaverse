import React from "react";
import Link from "next/link";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Wrapper from "@/components/shared/Wrapper";

async function getSyllabus() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/kfhc9jkq7tom/entries?access_token=Fl-H2H-gSkhcPDJ61V_SPg-NM0IEAFlJwzgxoiK8NPM&content_type=syllabus`,
    { cache: "no-store" }
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;

  // return res.json();
}

export default async function Home() {
  const content = await getSyllabus();

  return <>(
    <section>
      <Wrapper>
      <div>
        {content.items.map((item: any) => (
          <div key={item.sys.id}>
            <div>
              <h2 className="font-bold underline">{item.fields.artificialIntelligence}</h2></div>

            <div>
              <div className="whitespace-pre-wrap">
                {documentToReactComponents(
                  item.fields.syllabusOfArtificialIntellligence
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
<div className="mt-3">
  <button className=""><Link className="font-bold rounded-md border-red-900 sticky my-2 p-2 mt-4 bg-slate-400 text-lg" href={"../"}>Home</Link></button>
  </div>
  </Wrapper>
    </section>
  )</>;
}
