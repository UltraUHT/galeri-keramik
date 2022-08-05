import React from "react";

const contactList = [
  {
    id: 1,
    name: "Tokopedia",
    link: "https://www.tokopedia.com/galerikeramik",
  },
  {
    id: 2,
    name: "Instagram",
    link: "https://www.instagram.com/galerikeramik/",
  },
];

function Contact() {
  return (
    <div
      className="flex justify-center w-full pt-[20px] pb-[40px] md:my-20"
      id="contact"
    >
      <div className="flex w-full flex-col gap-[10px] md:gap-[40px] max-w-[500px] md:max-w-[640px] lg:max-w-[840px]  xl:max-w-[980px] 2xl:max-w-[1280px] border-t pt-[20px] md:border-b md:pb-[60px]">
        <div className="flex w-full justify-between ">
          <div className="hidden md:flex md:w-1/5"></div>
          <div className="w-full  md:w-4/5 text-center md:text-left">
            <h2>Find Our Store</h2>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-between ">
          <div className="hidden md:flex md:w-1/5">
            <ul className="cursor-pointer flex flex-col gap-[20px]">
              {contactList.map((obj) => (
                <a
                  key={obj.id}
                  href={obj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="hover:underline underline-offset-4 hover:drop-shadow-md">
                    {obj.name}
                  </li>
                </a>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-4/5 px-4 sm:px-0 h-[220px] sm:h-[300px] md:h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.4749567740233!2d112.73590199193065!3d-7.252240799999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f9425270532d%3A0xcbfe28e7eace22fb!2sGALERI%20KERAMIK!5e0!3m2!1sen!2sid!4v1659339396978!5m2!1sen!2sid"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="px-4 flex flex-col md:hidden justify-center items-center pt-[20px] gap-[10px]">
            <div className="flex items-center justify-center gap-[10px]">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5Z"
                  fill="#525252"
                />
                <path
                  d="M8.25 1.55175V0H6.75V1.55175C5.43022 1.72026 4.20373 2.32213 3.26293 3.26293C2.32213 4.20373 1.72026 5.43022 1.55175 6.75H0V8.25H1.55175C1.72001 9.56987 2.3218 10.7965 3.26265 11.7374C4.20349 12.6782 5.43013 13.28 6.75 13.4482V15H8.25V13.4482C9.56992 13.2801 10.7966 12.6784 11.7375 11.7375C12.6784 10.7966 13.2801 9.56992 13.4482 8.25H15V6.75H13.4482C13.28 5.43013 12.6782 4.20349 11.7374 3.26265C10.7965 2.3218 9.56987 1.72001 8.25 1.55175ZM7.5 12C5.01825 12 3 9.98175 3 7.5C3 5.01825 5.01825 3 7.5 3C9.98175 3 12 5.01825 12 7.5C12 9.98175 9.98175 12 7.5 12Z"
                  fill="#525252"
                />
              </svg>
              Baliwerti 118, Surabaya
            </div>

            <a
              className="flex items-center justify-center gap-[10px]"
              href="mailto:galerikeramik@yahoo.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="16"
                height="11"
                viewBox="0 0 16 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4286 0H1.57143C1.28727 0 1.01475 0.112882 0.813814 0.313814C0.612882 0.514746 0.5 0.787268 0.5 1.07143V9.64286C0.5 9.92702 0.612882 10.1995 0.813814 10.4005C1.01475 10.6014 1.28727 10.7143 1.57143 10.7143H14.4286C14.7127 10.7143 14.9853 10.6014 15.1862 10.4005C15.3871 10.1995 15.5 9.92702 15.5 9.64286V1.07143C15.5 0.787268 15.3871 0.514746 15.1862 0.313814C14.9853 0.112882 14.7127 0 14.4286 0ZM13.25 1.07143L8 4.70357L2.75 1.07143H13.25ZM1.57143 9.64286V1.55893L7.69464 5.79643C7.78432 5.85864 7.89086 5.89198 8 5.89198C8.10914 5.89198 8.21568 5.85864 8.30536 5.79643L14.4286 1.55893V9.64286H1.57143Z"
                  fill="#525252"
                />
              </svg>
              galerikeramik@yahoo
            </a>
            <a
              className="flex items-center justify-center gap-[10px]"
              href="wa.me/+6285108889991"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.785 4.735C3.89084 5.495 3.56334 6.88083 4.335 7.99249C5.06015 9.03517 5.96543 9.94017 7.00834 10.665C8.12 11.4367 9.50583 11.1092 10.2658 10.215L10.2742 10.2192C11.2448 10.6691 12.275 10.9769 13.3333 11.1333V13.3333H13.33C6.685 13.3425 1.65917 8.25916 1.66667 1.67V1.66667H3.86667V1.6675C4.02334 2.72583 4.33167 3.75583 4.78084 4.72583L4.785 4.73416V4.735ZM13.3333 15H14.1667C14.3877 15 14.5996 14.9122 14.7559 14.7559C14.9122 14.5996 15 14.3877 15 14.1667V10.415C15.0002 10.2151 14.9285 10.0218 14.798 9.87032C14.6675 9.71887 14.4869 9.61938 14.2892 9.58999L13.5775 9.48499C12.6772 9.35137 11.8008 9.08926 10.975 8.70666L10.3475 8.41582C10.1713 8.33419 9.97211 8.31666 9.78436 8.36627C9.5966 8.41587 9.43206 8.52948 9.31917 8.68749L9.035 9.08499C8.78583 9.43416 8.31 9.53999 7.95917 9.29582C7.07955 8.68437 6.31595 7.92105 5.70417 7.04166C5.46 6.68999 5.56667 6.21416 5.915 5.96583L6.3125 5.68249C6.4707 5.56956 6.58445 5.40488 6.63406 5.21694C6.68367 5.029 6.66602 4.82963 6.58417 4.65333L6.2925 4.025C5.91028 3.19912 5.64845 2.3227 5.515 1.4225L5.40917 0.710833C5.37978 0.513093 5.28029 0.332507 5.12884 0.202017C4.97739 0.0715261 4.78408 -0.000172303 4.58417 3.1095e-07H0.833342C0.612328 3.1095e-07 0.400367 0.0877976 0.244086 0.244078C0.0878063 0.400358 9.02024e-06 0.612319 9.02024e-06 0.833333V1.6675C-0.00832431 9.17332 5.75834 15.0108 13.3325 15H13.3333Z"
                  fill="#525252"
                />
              </svg>
              +62 851 0888 9991
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
