"use client";
import Announcements from "./Components/Announcements";
import Banner from "./Components/Banner";
export default function App() {
  return (
    <div className="flex h-full flex-col lg:inline-flex gap-2 lg:flex-row">
      <Banner />
      <Announcements />
    </div>
  );

}
