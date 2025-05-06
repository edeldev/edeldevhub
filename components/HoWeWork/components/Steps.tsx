"use client";
import { Fragment, useRef } from "react";
import { cn } from "@/utils/cn";
import { IStep } from "./types";
import { motion, useInView } from "framer-motion";

export const Steps = ({ step, index, isLast }: IStep) => {
  const isEven = index % 2 === 0;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Fragment>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
        className={cn(
          "bg-header rounded-2xl w-[320px] mb-3 md:mb-0",
          isEven
            ? "self-center md:self-end -rotate-12"
            : "self-center md:self-start rotate-12"
        )}
      >
        <div className="relative rotate-[30deg] w-15 h-20 flex flex-col items-center justify-start mx-auto -mt-10">
          <div
            className={`w-8 h-8 bg-${step.color}-500 rounded-full shadow-md z-10`}
          />
          <div
            className={`w-6 h-6 bg-${step.color}-600 rounded-full mt-[-6px] z-0`}
          />
          <div className="w-1 h-5 -z-10 bg-white mt-[-7px] transform rotate-[1deg]" />
        </div>
        <div
          className={cn(
            "flex flex-col text-black p-3 mx-4 my-4 rounded-xl gap-3 border border-border",
            `bg-${step.color}-300`
          )}
        >
          <p className={`text-${step.color}-500 text-3xl`}>{step.id}</p>
          <p className="italic text-xl">{step.title}</p>
          <p className="text-sm">{step.description}</p>
        </div>
      </motion.div>

      {!isLast && (
        <Fragment>
          <motion.svg
            className="block md:hidden mx-auto -my-10"
            width="300"
            height="120"
            viewBox="0 0 300 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ strokeDasharray: "0 6", strokeDashoffset: 300 }}
            animate={
              isInView ? { strokeDasharray: "6 6", strokeDashoffset: 0 } : {}
            }
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
          >
            <path
              d={
                isEven
                  ? "M -600 400 C 75 75, 225 100, 250 0"
                  : "M 0 -200 C 90 100, 225 90, 400 300"
              }
              stroke="#71717a"
              strokeWidth="2"
              fill="none"
            />
          </motion.svg>

          <motion.svg
            className="hidden md:block mx-auto -my-16"
            width="400"
            height="200"
            viewBox="0 0 400 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ strokeDasharray: "0 8", strokeDashoffset: 400 }}
            animate={
              isInView ? { strokeDasharray: "8 8", strokeDashoffset: 0 } : {}
            }
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
          >
            <path
              d={
                isEven
                  ? "M 0 200 C 100 100, 300 100, 400 0"
                  : "M 0 0 C 100 100, 300 100, 400 200"
              }
              stroke="#71717a"
              strokeWidth="2"
              fill="none"
            />
          </motion.svg>
        </Fragment>
      )}
    </Fragment>
  );
};
