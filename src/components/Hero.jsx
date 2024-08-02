import Button from "./Button";

function Hero() {
  return (
    <section className="relative my-8 overflow-hidden">
      <div className="mx-auto flex w-5/6 max-w-[1110px] flex-col-reverse md:flex-row md:py-24">
        <div className="mt-8 md:px-0 lg:text-start">
          <h1 className="mx-auto text-[2rem] font-medium text-Very-Dark-Blue md:text-[3.5rem]">
            A Simple Bookmark Manager
          </h1>
          <p className="text-Grayish-Blue mx-auto mt-6 max-w-[30rem] text-[0.85em] md:mx-0 md:text-start md:text-[1em]">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="mt-10 flex items-center justify-between text-[0.85em] md:max-w-[22rem] md:text-[1em]">
            <button className="bg-Soft-Blue hover:text-Soft-Blue hover:border-Soft-Blue rounded-md px-3 py-3 font-medium text-white drop-shadow-lg hover:border-2 hover:bg-white">
              Get it on Chrome
            </button>
            <button className="medium bg-light-gray rounded-md px-3 py-3 font-medium text-Very-Dark-Blue drop-shadow-lg hover:border-2 hover:bg-white hover:text-Very-Dark-Blue">
              Get it on Firefox
            </button>
          </div>
        </div>

        <div className="after:bg-Soft-Blue relative overflow-visible pl-[5%] after:absolute after:left-[20%] after:top-[20%] after:z-[-5] after:h-4/5 after:max-h-[18rem] after:w-full after:rounded-bl-[5rem] md:after:left-[40%]">
          <img
            src="/images/illustration-hero.svg"
            alt=""
            className="relative mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
