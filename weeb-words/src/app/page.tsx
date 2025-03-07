import Image from "next/image";
import Sidebar from "./Components/Layout/Sidebar";
import QuoteDisplay from "./Components/Pages/QuoteDisplay";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-grow pb-20 ">
        <QuoteDisplay />
      </div>
    </div>
  );
}
