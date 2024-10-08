"use client";
import React from "react";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import Image from "next/image";

export function Services() {
  return (
    <section className=" bg-gradient-to-br py-20   from-yellow-500  via-yellow-200 to-white">
      <h2 className="text-center text-4xl text-white drop-shadow-lg font-semibold">
        Our Services{" "}
      </h2>
      <p className=" text-4xl sm:text-5xl text-blue-600 font-bold text-center mt-3">
        Growth Based Services
      </p>

      <motion.div className="pt-10 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-3 sm:px-8">
        <Card
          title="Logo Design & Brand identity"
          src="/website-design-bg.webp"
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="Digital & Print Design" src="/branding-bg.webp">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="Retail & Office space branding" src="/office-space-bg.webp">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </motion.div>
    </section>
  );
}

const Card = ({
  title,
  children,
  src,
}: {
  title: string;
  src: string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border  border-black/[0.2] bg-blue-800 group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4  h-[20rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-yellow-500" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-yellow-500" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-yellow-500" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-yellow-500" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <Image
        src={src}
        width={1000}
        height={1000}
        alt=""
        className=" absolute  inset-0 h-full w-full opacity-40"
      />

      <div className="relative z-20">
        <div className="text-center  text-4xl font-semibold  text-white group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {title}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
