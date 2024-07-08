export default function HonorsAndAwardsSection() {
  const honorsAndAwards = [
    {
      year: "2024",
      award:
        "আমি একটা ভালো বর পেয়েছি!", 
    },
    {
      year: "2022",
      award:
        "টাকা জমিয়ে হাঁস, গরু কিনেছি।",
    },
    {
      year: "2021",
      award:
        "আমার বান্ধবী রহিমাকে আমার ভাবি বানিয়েছি।", 
    }
  ];

  return (
    <section className="py-1 ">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-300">
           আমি যে জন্য গর্ববোধ করি 
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
            {honorsAndAwards.map((item, index) => (
              <div key={index} className="flex">
                <p className="mr-4">{item.year}</p>
                <div>
                  <p>{item.award}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
