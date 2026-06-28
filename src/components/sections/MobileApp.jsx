import React from "react";

const MobileApp = () => {
  const contacts = [
    {
      id: 1,
      initials: "RK",
      name: "Sharma Hardware",
      status: "₹4,500",
      avatarBg: "bg-[#1b6b83]",
      badgeStyles: "bg-[#faeed6] text-[#b88222]",
    },
    {
      id: 2,
      initials: "SV",
      name: "Suresh Verma",
      status: "Paid Up",
      avatarBg: "bg-[#229754]",
      badgeStyles: "bg-[#e4f5e9] text-[#006f4e]",
    },
    {
      id: 3,
      initials: "MT",
      name: "Manoj Traders",
      status: "₹12,000",
      avatarBg: "bg-[#b67e1a]",
      badgeStyles: "bg-[#faeed6] text-[#b88222]",
    },
  ];
  return (
    <section className="mt-30 flex gap-30  justify-center">
      <div className=" h-[450px] rounded-4xl border-[10px] w-72">
        {/* first section inside mobileApp card*/}
        <div>
          <div className="flex justify-between px-3.5 py-3">
            <span className="text-sm font-semibold">9:47</span>
            <span>●●● 5G </span>
          </div>

          <div className="flex flex-col p-3">
            <span className="pb-3">Total to collect</span>
            <span className="font-bold text-3xl">₹ 84,302</span>
          </div>

          <div className="flex items-center px-3 justify-between">
            <div className="bg-[#26A257] px-4 py-1 rounded-2xl text-white">
              All
            </div>
            <div className="bg-white border px-3 py-1 border-gray-400 rounded-2xl">
              Paid
            </div>
            <div className="bg-white border border-gray-400  rounded-2xl px-3 py-1">
              Due
            </div>
          </div>
        </div>

        {/* second section inside mobileApp card */}
        <div className="relative max-w-sm mx-auto bg-white h-60 p-4 rounded-4xl mt-3 font-sans">
          {contacts.map((contact) => (
            <React.Fragment key={contact.id}>
              {/* List Item */}
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-5">
                  {/* Avatar */}
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-white font-bold text-[8px] ${contact.avatarBg}`}
                  >
                    {contact.initials}
                  </div>

                  {/* Name */}
                  <h2 className="text-[#072a33] font-semibold text-xs">
                    {contact.name}
                  </h2>
                </div>

                {/* Badge */}
                <div
                  className={`px-4 py-1.5 rounded-full font-bold text-[10px] ${contact.badgeStyles}`}
                >
                  {contact.status}
                </div>
              </div>

              {/* Divider line */}
              <hr className="border-t-[1.5px] border-[#e8e4d9]" />
            </React.Fragment>
          ))}

          {/* Floating Action Button (FAB) */}
          <button
            className="absolute bottom-2 right-4 w-10 h-10 rounded-full bg-[#279f5c] text-white flex items-center justify-center shadow-[0_12px_24px_rgba(39,159,92,0.4)] hover:bg-[#1f874d] transition-colors"
            aria-label="Add new"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="w-2xl py-3 leading-6">
        <span className="font-bold text-sm text-green-800">MOBILE APP</span>
        <h2 className="text-black font-bold text-xl mt-3 mb-2">
          Your business, always with you.
        </h2>
        <span className="text-[15px] font-semibold ">
          Whether you're at your shop or at home, your records are always within
          reach. Manage everything on the go—even without an internet
          connection.
        </span>
        <h3 className="font-bold text-xl mt-3 mb-2"> Offline Mode</h3>
        <span className="text-gray-500 ">
          No internet? No problem. Record transactions anytime. Your data
          automatically syncs once you're back online.
        </span>
        <h4 className="font-bold text-xl mt-3 mb-2">Smart Reminders</h4>
        <span className="text-gray-500 ">
          Automatically send friendly WhatsApp payment reminders to customers
          before their due dates—no manual follow-up needed.
        </span>
        <h5 className="font-bold text-xl mt-3 mb-2">
          Available in Hindi & English
        </h5>
        <span className="text-gray-500 ">
          Use the app in the language you're most comfortable with. Switch
          seamlessly between Hindi and English anytime.
        </span>
      </div>
    </section>
  );
};

export default MobileApp;
