const information = [
  {
    head: "Web development",
    body: "Information here",
  },
  {
    head: "Web development",
    body: "Information here",
  },
  {
    head: "Web development",
    body: "Information here",
  },
];
export const AboutSection = () => {
  return (
    <section className="py-24 px-5 relative">
      <h2 className="text-3xl">
        <span className="text-primary">About</span> Me
      </h2>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl">
        <div>
          <h2></h2>
        </div>
        <div>
          <ul className="flex flex-col gap-3">
            {information.map((info) => (
              <li className="bg-white">
                <h2 className="text-xl text-glow">{info.head}</h2>
                <p>{info.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
