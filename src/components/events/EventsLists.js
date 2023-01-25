import EventItem from "./EventItem";
const EventsLists = ({ featured }) => {
  return (
    <ul className="flex flex-col md:flex md:flex-row  items-center justify-center gap-3">
      {featured.map((item, index) => {
        return <EventItem key={index} {...item} />;
      })}
    </ul>
  );
};
export default EventsLists;
