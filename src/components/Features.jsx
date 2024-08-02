import { useState } from "react";
import Button from "./Button";

function Features() {
  const [index, setIndex] = useState(0);

  const [contents, setContents] = useState([
    {
      id: 0,
      image: "/images/illustration-features-tab-1.svg",
      title: "Bookmark in one click",
      selected: true,
      text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    },

    {
      id: 1,
      image: "/images/illustration-features-tab-2.svg",
      title: "Intelligent search",
      selected: false,
      text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    },

    {
      id: 2,
      image: "/images/illustration-features-tab-3.svg",
      title: "Share your bookmarks",
      selected: false,
      text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    },
  ]);

  const tabs = ["Simple Bookmarking", "Speedy Searching", "Easy Sharing"];

  function handleClick(tab) {
    const id = tabs.indexOf(tab);
    setIndex(id);
    let bol = contents[id].selected;
    const newContents = contents.map((content) => {
      if (content.id === id) {
        return { ...content, selected: true };
      }
      return { ...content, selected: false };
    });
    setContents(newContents);
  }

  return (
    <section className="py-8 md:py-24">
      <div className="mx-auto w-5/6 max-w-[1110px]">
        <h2 className="text-2xl font-medium text-Very-Dark-Blue md:text-4xl">
          Features
        </h2>
        <p className="text-Grayish-Blue mx-auto my-6 max-w-[33rem] text-[0.85em] md:text-[1em]">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>

        <div>
          <span className="flex flex-col md:flex-row md:justify-center md:gap-8">
            {tabs.map((tab) => (
              <button
                className={`border-Grayish-Blue hover:text-Soft-Red md:border-none md:after:left-0 md:after:w-full ${contents[tabs.indexOf(tab)].selected ? "after:bg-Soft-Red text-Very-Dark-Blue" : "text-Grayish-Blue"} relative border-t py-3 after:absolute after:bottom-0 after:left-[40%] after:h-1 after:w-[7rem] last:border-b`}
                key={tab}
                onClick={() => handleClick(tab)}
              >
                {tab}
              </button>
            ))}
          </span>
          <div className="after:bg-Soft-Blue relative mt-10 overflow-visible after:absolute after:left-[-20%] after:top-20 after:z-[-5] after:h-[50vw] after:max-h-[23rem] after:w-full after:max-w-[40rem] after:rounded-br-[12rem] md:mt-12 md:flex md:items-center md:gap-16">
            <img src={contents[index].image} alt="" className="mx-auto" />

            <div className="md:text-start">
              <h2 className="mt-8 text-2xl font-medium text-Very-Dark-Blue">
                {contents[index].title}
              </h2>
              <p className="text-Grayish-Blue mx-auto my-6 max-w-[30rem] text-[0.85em] md:text-[1em]">
                {contents[index].text}
              </p>
              <Button text={"More Info"} margin={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
