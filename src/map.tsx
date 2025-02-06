"use client";
import { WorldMap } from "@/components/ui/world-map";
import { motion } from "framer-motion";

export function WorldMapDemo() {
  return (
    <div className=" lg:px-20 py-24 dark:bg-inherit bg-white w-full">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          In Demand {""}
          <span className="text-blue-400">
            {"Worldwide".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4 sm:py-2">
          Graduates are in-demand worldwide to develop healthcare systems and
          build infrastructure. Health Information Science is trains graduates to be leaders in the healthcare space.
        </p>
      </div>
      <WorldMap
        dots={[
          {
            start: {
              lat: 40.0522,
              lng: -125.2437,
            }, // Victoria, BC
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 40.0522, lng: -125.2437 }, // Victoria, BC
            end: { lat: -20.7975, lng: -52.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: 40.0522, lng: -125.2437 }, // Victoria, BC
            end: { lat: 43.7223, lng: -1.1393 }, // Lisbon
          },
          {
            start: { lat: 40.0522, lng: -125.2437 }, // Victoria, BC
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 40.0522, lng: -125.2437 }, // Victoria, BC
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 40.0522, lng: -125.2437 }, // Victoria, BC
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
          {
            start: {
              lat: 40.0522, // Victoria, BC
              lng: -125.2437,
            }, // Alaska (Fairbanks)
            end: {
              lat: 49.0522, // Victoria, BC
              lng: -90.2437,
            }, // Los Angeles
          },
        ]}
      />
    </div>
  );
}
