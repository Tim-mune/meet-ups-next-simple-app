import EventsLists from "@/components/events/EventsLists";
import { getFeaturedEvents } from "dummy-data";

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <>
      <div className="bg-teal-600 w-screen min-h-screen p-4 m-0">
        <EventsLists featured={featuredEvents} />
      </div>
    </>
  );
}
