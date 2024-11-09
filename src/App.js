import Random from "./components/Random";
import Tags from "./components/Tags";
import "./App.css";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
      <h1 className=" bg-white rounded-lg w-11/12 text-center mt-[40px] px-10 py-2 text-3xl font-bold">
        RANDOM GIFS
      </h1>
      <div className=" w-full flex flex-col items-center gap-y-10 mt-[30px]">
        <Random />
        <Tags />
      </div>
    </div>
  );
}
