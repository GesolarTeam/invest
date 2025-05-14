"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  return (
    <section className="py-32">
      <div className="px-6 lg:px-12 flex h-24 items-center justify-center">
        <div className="flex flex-col gap-12">
          <div className="flex items-center justify-center gap-4">
            <span className="font-semibold uppercase text-white/35">
              Scroll down
            </span>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-white/35">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
          </div>

          <p className="text-3xl text-white/75 font-medium text-center">Veja Alguns dos <b className="text-orange-400">nosso projetos</b></p>
        </div>
      </div>
      <HorizontalScrollCarousel />
      <div className="px-6 lg:px-12 flex h-16 items-center justify-center">
          <div className="flex items-center justify-center gap-4">
            <span className="font-semibold uppercase text-white/35">
              Scroll Up
            </span>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-white/35">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
            </svg>
          </div>

      </div>
    </section>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: any) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      {/* <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div> */}
    </div>
  );
};

export default Projects;

const cards = [
  {
    url: "../assets/image-cases-1.png",
    title: "Title 1",
    id: 1,
  },
  {
    url: "../assets/image-cases-2.png",
    title: "Title 2",
    id: 2,
  },
  {
    url: "../assets/image-cases-3.png",
    title: "Title 3",
    id: 3,
  },
  {
    url: "../assets/image-cases-4.jpeg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "../assets/image-cases-5.jpeg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "../assets/image-cases-6.jpeg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "../assets/image-cases-7.jpeg",
    title: "Title 7",
    id: 7,
  },
];