export default function PersonalInformationSection() {
  const personalInformation = [
    { label: "পিতার নাম", value: "মোঃ সৈফুর রহমান" },
    { label: "মাতার নাম", value: "মোছাঃ ফাতেমা বেগম" },
    { label: "জন্মস্থান", value: "বেরুবাড়ি, নাগেশ্বরী, কুড়িগ্রাম" },
    { label: "জাতীয়তা", value: "বাংলাদেশি" },
    { label: "লিঙ্গ", value: "মহিলা" },
    { label: "ধর্ম", value: "ইসলাম" },
    { label: "বৈবাহিক অবস্থা", value: "বিবাহিত" },
    { label: "স্বামীর নাম", value: "মোঃ মজনু মিয়া" },
    { label: "রক্তের গ্রুপ", value: "এ+ (পজেটিভ)" },
    { label: "ঠিকানা", value: "বেরুবাড়ি, নাগেশ্বরী, কুড়িগ্রাম" },
    { label: "ফোন নাম্বার", value: "01334014938" },
  ];

  return (
    <section className="py-1 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-gray-300 pb-2">
            ব্যাক্তিগত তথ্য
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {personalInformation.map((info, index) => (
              <div key={index} className="flex justify-between">
                <p className="font-bold text-gray-700 mr-auto">{info.label}:</p>
                <p className="text-gray-900 ml-auto">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
