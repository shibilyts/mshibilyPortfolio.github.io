const logotext = "Mohammed Shibily";
const meta = {
  title: "Mohammed Shibily T S",
  description:
    "I’m Mohammed Shibily, Senior React Native Developer| Mobile App Developer",
};

const introdata = {
  title: "I’m Mohammed Shibily",
  animated: {
    first: "I am a React-Native Developer",
    second: "I develop mobile apps",
    third: "I develop mobile apps",
  },
  description:
    "Experienced Software Engineer with a demonstrated history of working in the information technology and services industry. Skilled in Mobile Application Development, React Native,C++, Java, NativeScript, and Product Innovation. Strong engineering professional with a Bachelor of Technology - BTech focused in Computer Science and Engineering from NSS COLLEGE OF ENGINEERING, AKATHETHARA. ",
  your_img_url: "https://i.ibb.co/R9mSJWH/IMG-1180-removebg-preview.png",
};

const dataabout = {
  title: "a bit about my self",
  aboutme:
    "Experienced Software Engineer with a demonstrated history of working in the information technology and services industry. Skilled in Mobile Application Development, React Native,C++, Java, NativeScript, and Product Innovation. Strong engineering professional with a Bachelor of Technology - BTech focused in Computer Science and Engineering from NSS COLLEGE OF ENGINEERING, AKATHETHARA.",
};
const worktimeline = [
  {
    jobtitle: "Senior Software Engineer",
    where: "Glidewell Dental",
    date: "Jul 2019 - Present",
  },
  {
    jobtitle: "Senior Software Engineer",
    where: "Innow8 Apps, Mohali",
    date: "Jul 2019 - Jun 2023",
  },
  {
    jobtitle: "Software Engineer",
    where: "iLeaf Solutions Pvt Limited, Cochin",
    date: "Dec 2017 - May 2019",
  },
];

const skills = [
  {
    name: "React-Native",
    value: 90,
  },
  {
    name: "Javascript",
    value: 80,
  },
  {
    name: "React",
    value: 80,
  },
  {
    name: "Android",
    value: 50,
  },
  {
    name: "iOS",
    value: 50,
  },
];

const services = [
  {
    title: "Mobile Apps",
    description:
      "I Develop Mobile Application with pixel perfect UI using React-Native. I do have experience integrating following tools with react native Redux, Firebase, Auth0, Amplify, Maps, Payment Gateways, Chat SDKs, Socket.io, Hooks, Redux-Saga, Redux-Thunk, etc.",
  },
];

const dataportfolio = [
  {
    img: "https://play-lh.googleusercontent.com/D-cQLcRAN4oZbyrocb7BDsQBJd3UoOx3qTlyMwqFNxEmHbbMsTXRm32-waVVXC4EmGQU=w480-h960-rw",
    desctiption:
      "Foresite Construction Management System. Role: Lead Mobile App Development . Duration: 1+ year (current project)",
    link: "https://play.google.com/store/apps/details?id=com.app.foresite&hl=en_IN&gl=US",
  },
  {
    img: "https://play-lh.googleusercontent.com/Uh9f5VzzO8h0HM6tR7u8ABfCXBwqVE-f9h1qS7aZOPWPjZmxxz2Z3xsQ559BdW4BaPKY=w240-h480-rw",
    desctiption:
      "Hush Lil Baby - Role: Individual Project(Personal Project). Duration: 2 days",
    link: "https://play.google.com/store/apps/details?id=com.app.hushlilbaby",
  },
  {
    img: "https://play-lh.googleusercontent.com/scs4qe5t56eYd3TxmVOmxKHImsmKntr1XwOe5b2dbT66gdo7UimimSfCzT2UKVgoaqg=w480-h960-rw",
    desctiption:
      "QRCode and Barcode Scanner App - Role: Individual Project(Personal Project). Duration: 1 week",
    link: "https://play.google.com/store/apps/details?id=com.sushi.qrscanner",
  },
  {
    img: "https://play-lh.googleusercontent.com/BmQeRA2TVq1vr0jPww8AruJ2Qc1RoRdBKXqIA0-5d71SuVcLTbIoQOqjj3V8xhjuUA=w240-h480-rw",
    desctiption:
      "Future Whiz(magic8ball) - Role: Individual Project(Personal Project). Duration: 2 days",
    link: "https://play.google.com/store/apps/details?id=com.futurewhiz",
  },
  {
    img: "https://play-lh.googleusercontent.com/sJv8Vbdza1dW12nWQJ1EEBGswmiIY8WpEQk55Z4YUJdSieYMZRZAXe1P70YA637FIH4=w480-h960-rw",
    desctiption:
      "Syfe - Fintech Mobile App. Role: Contract, Worked on some modules as per requirement. Duration: 3 months",
    link: "https://www.syfe.com/select-product",
  },
  {
    img: "https://play-lh.googleusercontent.com/zpIf4iiEj95q6wRJk46lAhfZ3Nr0c94Z4Z0HY0WvoCX3x5OjdyMQHacMie3ohz_-6zs=w480-h960-rw",
    desctiption:
      "AirBlack - EduTech Mobile App. Role: Contract, Worked on some modules as per requirement. Duration: 3 months",
    link: "https://play.google.com/store/apps/details?id=com.airblack&hl=en_IN&gl=US",
  },
  {
    img: "https://camaxonline.com/static/media/logo.f784f3b0bb9f25ed611d.png",
    desctiption:
      " CA MAX - A Complete Accounting System for all Businesses. Role: Individual Project(Developed from scratch). Duration: 5 months",
    link: "https://camaxonline.com/downloads",
  },
  {
    img: `data:image/jpeg;base64,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`,
    desctiption:
      "WishHealth - Doctor consultation booking Mobile App. Role: Lead developer (Assisted junior developers during POC and MVP development)  Duration: 4 months",
    link: "https://wishhealth.in/",
  },

  {
    img: "https://play-lh.googleusercontent.com/ThazSnQ8nUHnS9HBKl0KIT4yP_mYZbzjubp7ksEkqPEzp7Z5JepuAz7OgRS495b6XpQi=w480-h960-rw",
    desctiption:
      "Local Job Search App - Role: Feature Enhancement and Bug fix. Duration: 1 Month",
    link: "https://play.google.com/store/apps/details?id=com.agencycoda.com.agencycoda.campoabierto&hl=hi&gl=US",
  },
  {
    img: "https://cas-img.sgp1.digitaloceanspaces.com/wp-content/uploads/2021/02/01043558/text-logo.png",
    desctiption:
      "GameApart - Team building Game App. Role: MVP developement and Bug fix. Duration: 1 month",
    link: "https://heylime.com/",
  },
  {
    img: "https://www.yelsaconnect.co.nz/wp-content/uploads/2021/07/Yelsa-Connect-Logo-new.svg",
    desctiption:
      "Yelsa - Real Estate App - Role: Lead developer(MVP development). Duration: 6 months",
    link: "#",
  },
  {
    img: "https://play-lh.googleusercontent.com/oHHFVfadMGBn7mXsryLWIAa9jqSTue4eOSr7eSR_cH4XeFKLDleuNCFROFswVud8K3Q=s256-rw-no-tmp_taddar_shop_any_instagram_fashion_post_apk.WebP",
    desctiption:
      "Taddar - Online Product Suggestion App using image selected. Role: Feature Enhancement and Bugfix. Duration: 2 weeks",
    link: "https://appadvice.com/app/taddar/1475068524",
  },
  {
    img: "data:image/jpeg;base64,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",
    desctiption:
      "FoodClub - Foood Delivery App. Role: Lead Developer. Duration: 6 Months",
    link: "https://play.google.com/store/apps/details?id=com.onvo.foodclub",
  },
  {
    img: "https://play-lh.googleusercontent.com/TxLAY2T-27o0RLoANUKIKvez9irUcbQddp3u1-1eKSnhN4fguIMhE1_xirms5wzeMjw=s200-rw",
    desctiption:
      "VARES - Crypto wallet. Role: Developer - Feature Enhancement and Bugfix. Duration: 2 weeks ",
    link: "https://androidappsapk.co/detail-vares/",
  },
];

const contactConfig = {
  YOUR_EMAIL: "mohammedshibily.95@gmail.com",
  YOUR_FONE: "+91 (907) 266-6141 ",
  description:
    "Feel free to connect me if you have any mobile application development related queries",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_3gn25ul",
  YOUR_TEMPLATE_ID: "template_mmd44pk",
  YOUR_USER_ID: "rB700qd5KuJTxcgIS",
};

const socialprofils = {
  github: "https://github.com/shibilyts",
  linkedin: "https://www.linkedin.com/in/mohammed-shibily-ts-a69821b5",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
