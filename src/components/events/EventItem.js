import Link from "next/link";

const EventItem = ({ title, image, date, location, id }) => {
  const readableDate = new Date(date).toLocaleDateString("en-KE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const exploreLink = `/events/${id}`;
  return (
    <li
      className="flex flex-row gap-3 shadow-md rounded-md shadow-blue-400 overflow-hidden bg-slate-500 w-full h-full p-4 leading-6 justify-between
    "
    >
      <img
        src={image}
        alt={title}
        className="w-full h-[200px] object-contain"
      />
      <div>
        <div className="">
          <h2 className="text-gray-900 font-bold">{title}</h2>
        </div>
        <div></div>
        <address className="text-gray-900 font-medium">{location}</address>
        <div className="flex justify-center items-center">
          <Link
            href={exploreLink}
            className="uppercase font-medium text-sm p-2 leading-4  text-gray-900 bg-gradient-to-tr from-violet-800 via-blue-300 to-green-200 rounded-lg mt-10"
          >
            Explore Event
          </Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
