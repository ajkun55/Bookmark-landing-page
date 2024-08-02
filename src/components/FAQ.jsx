import { useState } from "react";
import Button from "./Button";

function FAQ() {
  const [contents, setContents] = useState([
    {
      id: 0,
      showAns: false,
      qs: "What is Bookmark?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
    },
    {
      id: 1,
      showAns: false,
      qs: "How can I request a new browser?",
      ans: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ulticies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
    {
      id: 2,
      showAns: false,
      qs: "Is there a mobile app?",
      ans: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
    },
    {
      id: 3,
      showAns: false,
      qs: "What about other Chromium browsers?",
      ans: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
    },
  ]);

  function handleClick(id) {
    let bol = contents[id].showAns;
    const newContents = contents.map((content) => {
      if (content.id === id) {
        return { ...content, showAns: !bol };
      }
      return content;
    });
    setContents(newContents);
  }

  return (
    <section className="mx-auto w-5/6 max-w-[1110px]">
      <h2 className="mb-6 mt-20 text-2xl font-medium text-Very-Dark-Blue md:mt-40 md:text-4xl">
        Frequently Asked Questions
      </h2>
      <p className="text-Grayish-Blue y-6 mx-auto max-w-[32rem] text-[0.85em] md:text-[1em]">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>

      <div className="mx-auto mb-16 mt-8 max-w-[35rem]">
        {contents.map((c) => (
          <div key={c.id} className="border-Grayish-Blue first:border-t">
            <span
              onClick={() => handleClick(c.id)}
              className="border-Grayish-Blue flex cursor-pointer items-center justify-between border-b py-4"
            >
              <p className="hover:text-Soft-Red border-none text-start">
                {c.qs}
              </p>
              {c.showAns ? (
                <img
                  src="/images/icon-arrow-red.svg"
                  alt=""
                  className="rotate-180"
                />
              ) : (
                <img src="/images/icon-arrow.svg" alt="" />
              )}
            </span>
            {c.showAns && (
              <p className="text-Grayish-Blue pt-4 text-start text-[1.1rem]">
                {c.ans}
              </p>
            )}
          </div>
        ))}
      </div>

      <Button />
    </section>
  );
}

export default FAQ;
