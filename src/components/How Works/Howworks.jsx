import person from "../../assets/person.svg";
import checklist from "../../assets/checklist.svg";
import search from "../../assets/search.svg";
import person_check from "../../assets/person-check.svg";
import diary from "../../assets/diary.svg";
import shake from "../../assets/shake-hand.svg";

const steps = [
  {
    icon: person,
    title: "Select Your Role and Sign Up",
    paddingLeft: "55px",
    paddingRight: "55px",
  },
  {
    icon: checklist,
    title: "Buyers Post Your Requirements",
    paddingLeft: "25px",
    paddingRight: "25px",
  },
  {
    icon: search,
    title: "Review, Select, and Contact the Best Suppliers",
    paddingLeft: "22px",
    paddingRight: "22px",
  },
  {
    icon: person_check,
    title: "Suppliers Complete your profile and get notified for opportunities",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  {
    icon: diary,
    title: "Contact Buyers and Share your Quote for the Service",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  {
    icon: shake,
    title: "Both the Parties can Connect and Make Business Leave a Feedback",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
];

const HowWorks = () => {
  return (
    <section id="how-works" className="py-36 bg-white container pb-40 mx-auto w-[1516px]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[37px] font-[700] text-[#222222] mb-4">How it works?</h2>
        <p className="text-[#000000] text-[17px] font-[400] mb-10 px-[160px] pt-4 pb-12">
          Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center py-12 px-[30px] ${
                index % 2 === 0 ? " bg-[#E8FBFF]" : "bg-white"
              }`}
            >
              <div className="text-4xl text-black mb-4">
                <img src={step.icon} className="w-[75px] h-[75px]" alt="icons" />
              </div>
              <h3
                className="font-semibold text-[20px] text-[500] line-clamp-[26px] mb-2"
                style={{
                  paddingLeft: step.paddingLeft,
                  paddingRight: step.paddingRight,
                }}
              >
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWorks;
