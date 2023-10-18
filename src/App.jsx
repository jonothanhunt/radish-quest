import { useState } from "react";
import RadishWrapper from "./r3f/RadishWrapper";
import { Canvas } from "@react-three/fiber";
import { Graph } from "./graph/Graph";

export default function App() {
  return (
    <div className="m-auto max-w-screen-lg p-4">
      <nav
        className="z-10 sticky top-4 flex  items-center gap-4 p-4 rounded-lg bg-slate-900/60 backdrop-blur"
      >
        <img className="w-7" src="./icon/SVG/logo.svg" alt="" />

        <h1 className="text-2xl font-medium text-slate-50 font-mooli">
          radish quest
        </h1>

        {/* <div className="ml-auto bg-red-950 p-2 rounded-lg"  >
        <p className=" text-red-300">Radishes at Co-op and Sainsbury's commonly out of stock ⚠️</p>
        </div> */}

      </nav>
      <main>

        <div className="relative">
          <Canvas style={{width: `100%`, height: `700px`, position: `relative` }}>
            <RadishWrapper/>
          </Canvas>

          <div className="absolute p-6 text-center bottom-0 w-full ">
            <h2 className="
              text-5xl 
              md:text-7xl 
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-red-100
              to-red-400
              font-mooli
              ">
                The latest on UK radishes, updated weekly.
            </h2>
          </div>

        </div>

        <div className="pt-20">
          <Graph/>
        </div>

      </main>

      <footer className="text-center">
        <p className="text-slate-50 my-5">This site is by <a href="https://jonothan.dev">Jonothan.dev</a></p>
      </footer>
    </div>
  );
}
