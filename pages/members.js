/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Layout from "../components/layout";
import NavBar from "../components/navbar";

const members = [
  { id: 1, name: "Anirudh", href: "https://github.com/AndroBuddy.png" },
  { id: 2, name: "Name 2", href: "https://github.com/AndroBuddy.png" },
  { id: 3, name: "Name 3", href: "https://github.com/AndroBuddy.png" },
];

export default function Members() {
  return (
    <>
      <section className="flex flex-col h-full pt-20">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  Members
                </span>
                <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                  Our Team
                </h2>
                {/* <p className="text-body-color text-base">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p> */}
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">
            {members.map((item) => (
              <div key={item.id} className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                  <img
                    src={item.href}
                    className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl"
                    alt=""
                  />
                  <h4 className="text-dark mb-3 text-xl font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-body-color">
                    Lorem Ipsum sit dolor amet norwech kim del colet avet puper.
                    Navaho amet comor sek metlum golet.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

Members.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NavBar />
      {page}
    </Layout>
  );
};
