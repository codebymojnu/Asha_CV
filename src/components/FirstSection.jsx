import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import Typewriter from "typewriter-effect";

function FirstSection() {
  return (
    <section className="mt-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-2"><span className="text-red-300 mr-2">আমি </span>আশা মণি</h1>  
          <p className="text-lg mb-4">
            <Typewriter
              options={{
                strings: [
                  "ডিগ্রি ২য় বর্ষে পড়ি",
                  "নাগেশ্বরী মহিলা কলেজ", 
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </p>

          <div className="flex gap-8">
            <a
              href="https://www.facebook.com/profile.php?id=100059434493515"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              href="tel:+8801306341958"
              className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="mailto:thisismojnu@gmail.com"
              className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              <FaEnvelope className="text-2xl" />
            </a>
            <a
              href="tel:+8801306341958"
              className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              <FaPhone className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstSection;
