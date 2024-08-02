import { useState } from "react";

function CTA() {
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");

  const re = /\S+@\S+\.\S+/;

  function handleSubmit(e) {
    e.preventDefault();
    if (!re.test(email)) {
      setIsError(true);
      setEmail("example@email/com");
      return;
    }
    setIsError(false);
  }
  function handleChange(e) {
    setEmail(e.target.value);
  }

  return (
    <section className="bg-Soft-Blue mt-20 py-16 *:max-w-[35rem] md:*:mx-auto">
      <p className="text-light-gray uppercase tracking-wide">
        35,000+ already joined
      </p>
      <h2 className="mt-3 text-2xl font-medium text-white md:my-8 md:text-4xl">
        Stay up-to-date with what we’re doing
      </h2>

      <form
        onSubmit={(e) => handleSubmit(e)}
        className="mx-auto mt-6 grid w-4/5 grid-rows-2 md:flex md:items-center md:justify-between md:gap-8"
      >
        <span
          className={`relative rounded-md p-[1px] md:flex-1 ${isError ? "bg-Soft-Red" : ""}`}
        >
          <input
            className="w-full rounded-md px-3 py-2"
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={email || ""}
            onChange={(e) => handleChange(e)}
          />
          {isError && (
            <img
              src="/images/icon-error.svg"
              alt=""
              className="absolute right-2 top-3"
            />
          )}
          {isError && (
            <p className="text-light-gray pl-2 text-start">
              Whoops, make sure it's an email
            </p>
          )}
        </span>
        <button
          type="submit"
          className="bg-Soft-Red mt-3 rounded-md px-3 py-2 text-[1rem] font-medium text-white md:mt-0"
        >
          Contact Us
        </button>
      </form>
    </section>
  );
}

export default CTA;
