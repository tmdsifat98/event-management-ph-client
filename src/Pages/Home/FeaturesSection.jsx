import { FaMapSigns, FaUniversity, FaCogs, FaUsers } from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    {
      Icon: FaMapSigns,
      title: "Resources by Affiliation",
      description:
        "We've grouped our venues, services and information for students, faculty and staff, or outside guests so you can find everything you need in one place.",
    },
    {
      Icon: FaUniversity,
      title: "Our Venues",
      description:
        "Our venues provide an option for every event, from formal dinners and social events, to small meetings and conference sessions.",
    },
    {
      Icon: FaCogs,
      title: "Our Services",
      description:
        "We offer a whole host of services to help elevate your event to the next level, from experienced audio/visual support to top quality catering offerings.",
    },
    {
      Icon: FaUsers,
      title: "Our Team",
      description:
        "Our team of event management professionals are committed to your success and will work with you every step of the way.",
    },
  ];
  return (
    <section className="w-2/3 mx-auto mt-4 mb-16">
      <h1 className="text-5xl text-center font-bold font-playfair mb-12">Our Features</h1>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <feature.Icon size={70} className="text-gray-600 dark:text-gray-400" />
            <h3 className="text-xl font-semibold my-2 text-gray-800 dark:text-gray-100 ">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
