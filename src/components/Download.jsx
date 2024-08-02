function Download() {
  const contents = [
    {
      margin: "md:mt-4",
      image: "/images/logo-chrome.svg",
      title: "Add to Chrome",
      version: "Minimum version 62",
    },
    {
      margin: "md:mt-20",
      image: "/images/logo-firefox.svg",
      title: "Add to Firefox",
      version: "Minimum version 55",
    },
    {
      margin: "md:mt-36",
      image: "/images/logo-opera.svg",
      title: "Add to Opera",
      version: "Minimum version 46",
    },
  ];

  return (
    <section className="mx-auto w-5/6 max-w-[1110px]">
      <h2 className="mb-6 mt-10 text-2xl font-medium text-Very-Dark-Blue md:mt-40 md:text-4xl">
        Download the extension
      </h2>
      <p className="text-Grayish-Blue y-6 mx-auto max-w-[35rem] text-[0.85em] md:px-0 md:text-[1em]">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>
      <div className="h-min md:flex md:items-center md:gap-8">
        {contents.map((c) => (
          <div
            className={`mx-auto my-6 w-4/5 rounded-lg p-4 shadow-lg ${c.margin}`}
            key={c.title}
          >
            <img className="mx-auto my-6" src={c.image} alt="" />
            <h3 className="font-medium text-Very-Dark-Blue">{c.title}</h3>
            <p className="text-Grayish-Blue my-4 text-sm">{c.version}</p>
            <img src="/images/bg-dots.svg" alt="" className="my-8" />
            <button className="bg-Soft-Blue hover:border-Soft-Blue hover:text-Soft-Blue mb-3 rounded-md px-3 py-3 text-sm font-medium text-white hover:border-2 hover:bg-white">
              Add & Install Extension
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Download;
