export default function WorkExperienceSection() {
  const workExperience = [
    {
      year: "2024 - Present",
      position: "সংসার সামলানো",
      institution: "মজনু ও আশার সংসার",   
      description:
        "২০২৪ সালের ২২ জুন মজনু মিয়ার ঘরে সংসার সামলানোর জন্য বউ হয়ে আসি।",  
    },
   
    // Add more work experience entries as needed
  ];

  return (
    <section className="py-1 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-300">
            কাজের অভিজ্ঞতা 
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
            {workExperience.map((item, index) => (
              <div key={index} className="flex">
                <p className="mr-4">{item.year}</p>
                <div>
                  <p className="font-bold">{item.position}</p>
                  <p>{item.institution}</p>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
