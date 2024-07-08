export default function AreaOfInterestSection() {
  const interests = [
    "রাষ্ট্রবিজ্ঞান",
    "লিখালিখি করা", 
    "রান্না করা", 
    "কুরআন তেলওয়াত করা",   
    "ইসলামকে জানা", 
    "ভিডিও বানানো",  
  ];

  return (
    <section className="py-4 ">
      <div className="container mx-auto px-4">
        <div className="mb-2">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-300">
            আমার যেসব বিষয়ে আগ্রহ 
          </h2>
          <p className="text-gray-700 mt-1 text-center lg:text-left">
            {interests.join(", ")}
          </p>
        </div>
      </div>
    </section>
  );
}
