export default function PersonalInformationSection() {
  const personalInformation = [
    { label: "পিতার নাম", value: "মোঃ সৈফুর রহমান" },   
    { label: "মাতার নাম", value: "মোছাঃ ফাতেমা বেগম" }, 
    { label: "জন্মস্থান", value: "৩ নং ওয়ার্ড, মুয়ামারি, বেরুবাড়ি, নাগেশ্বরী, কুড়িগ্রাম" },  
    { label: "জাতীয়তা", value: "বাংলাদেশি" },  
    { label: "লিঙ্গ", value: "মহিলা" },  
    { label: "ধর্ম", value: "ইসলাম" }, 
    { label: "বৈবাহিক অবস্থা", value: "বিবাহিত" },  
    {label: "স্বামীর নাম", value: "মোঃ মজনু মিয়া"},
    { label: "রক্তের গ্রুপ", value: "এ+ (পজেটিভ)" },  
    {
      label: "ঠিকানা", 
      value: "৩ নং ওয়ার্ড, মুয়ামারি, বেরুবাড়ি, নাগেশ্বরী, কুড়িগ্রাম",
    },
    { label: "ফোন নাম্বার", value: "01306341958" }, // Add your phone number here 
  ];

  return (
    <section className="py-1 ">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-300">
            ব্যাক্তিগত তথ্য 
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
            {personalInformation.map((info, index) => (
              <div key={index} className="flex">
                <p className="font-bold mr-2">{info.label}:</p>
                <p>{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
