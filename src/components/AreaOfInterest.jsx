export default function AreaOfInterestSection() {
  const interests = [
    "Organic Chemistry",
    "Physical Chemistry",
    "Chemical Education",
    "Computer Programming",
    "Content Creation",
    "Writting",
  ];

  return (
    <section className="py-4 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="mb-2">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-300">
            Area of Interest
          </h2>
          <p className="text-gray-700 mt-1 text-center lg:text-left">
            {interests.join(", ")}
          </p>
        </div>
      </div>
    </section>
  );
}
