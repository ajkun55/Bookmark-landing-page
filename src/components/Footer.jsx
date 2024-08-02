import Icons from "./Icons";

export default function Footer() {
  const list = ["Features", "Pricing", "Contact"];
  return (
    <footer className="bg-Very-Dark-Blue pt-16">
      <div className="mx-auto w-5/6 max-w-[1110px]">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between md:text-start">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between md:text-start">
            <img
              src="/images/logo-bookmark-white.svg"
              alt=""
              className="mx-auto mb-4 md:mb-0"
            />

            {list.map((l) => (
              <a
                key={l}
                href="#"
                className="text-light-gray hover:text-Soft-Red mx-auto my-3 uppercase opacity-80 md:mx-8 md:my-0"
              >
                {l}
              </a>
            ))}
          </div>
          <Icons />
        </div>

        <div className="attribution text-light-gray md:mt-6">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by
          <a href="https://github.com/ajkun55/Bookmark-landing-page">John A</a>.
        </div>
      </div>
    </footer>
  );
}
