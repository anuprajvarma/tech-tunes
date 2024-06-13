"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Collaborative Music",
    description:
      "Collaborative music transcends individual creativity, weaving diverse voices into a harmonious tapestry that resonates with shared human experience. Together, artists transform sound into a universal language that unites and inspires.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/collabrating-music.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Street Beats",
    description:
      "Where the urban heartbeat and rhythm collide, crafting a symphony of city life that pulses through every alley and avenue.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/boy-feel-music.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Feel The Music",
    description:
      "Feel the music as it weaves through the air, a symphony of emotions unseen yet deeply felt. Let its rhythm stir your soul, like gentle waves caressing the shore of your consciousness. In its melody, find whispers of joy, echoes of sorrow, and the timeless dance of human expression",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/feel-the-music.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Teaching music",
    description:
      "Teaching music is orchestrating the symphony of souls, where every note nurtures harmony and every lesson composes a melody of inspiration.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/teaching-music.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
};

export default WhyChooseUs;
