import { Link } from "react-router-dom";

const ServicesSection = ({ services }) => {
  if (!services || !services.length) {
    return null;
  }

  return (
    <section className="container-primary mx-auto py-8 md:py-16" aria-labelledby="gather-services-section">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((item) => (
          <div key={item.id} className="flex-1">
            <Link to={item.link || "#"} className="group">
              <div className="relative">
                <img
                  src={item.image || "https://via.placeholder.com/300x200?text=No+Image"}
                  alt={item.title ? item.title.replace(/<[^>]+>/g, "") : "No Title"}
                  className="w-full h-80 object-cover rounded-lg shadow-md group-hover:shadow-lg group-hover:shadow-[#1f1f1f] transition-colors duration-300"
                  loading="lazy"
                />
                {item.title && (
                  <div className="mt-4 flex items-center justify-start">
                    <div dangerouslySetInnerHTML={{ __html: item.title }} />
                  </div>
                )}
              </div>
              {item.description && (
                <div
                  dangerouslySetInnerHTML={{ __html: item.description }}
                  className="mt-2"
                />
              )}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;