
export const ASSET_PATHS = {
    guitar: "/assets/guitar.jpg",
    fireworks: "/assets/fireworks.jpg",
    laptop: "/assets/laptop.jpg",
    man: "/assets/man.jpg",
    plane: "/assets/plane.jpg",
    CV_FILE:"/assets/CV_EN.pdf",
    wave: "/assets/wave.svg",
    phone: "/assets/phone.jpg",
    image1: "/assets/the_calm_corner.png",
    image2: "/assets/library.png",
    image3: "/assets/url_shortner.png",
};

export const RESUME_BUTTON = "Download resume";
export const PROJECTS_BUTTON = "View projects";
export const PROJECTS_LINK = "#projects";

// Header
export const WORK_TITLE = "Front-end Developer";
export const AVALIABLE = "Available";

// Navbar
export const FIRST_NAME = "Błażej";
export const LAST_NAME = "Federowicz";

export const NAVBAR_LINKS = [
    {name: "Home", href: "#home"},
    {name: "About", href: "#about"},
    {name: "Projects", href: "#projects"},
    {name: "Expertise", href: "#expiriance"},
    {name: "Contact", href: "#contact"},
];
export const COMPONENTS_IDS = {
    HOME: "home",
    ABOUT: "about",
    PROJECTS: "projects",
    EXPIRIANCE: "expiriance",
    CONTACT: "contact",
}

export const SOCIAL_LINKS = [
    {name: "Github", href: "https://github.com/blazejfederowicz", icon: "bi bi-github"},
    {name: "Linkedin", href: "https://www.linkedin.com/in/błażej-federowicz-6a25b0320/", icon: "bi bi-linkedin"},
]

export const OPEN_USER = "Open user menu"
export const OPEN_MENU = "Open main menu";

// About
export const FRONTEND_SKILLS = [
    {name: "HTML", value: "96%"},
    {name: "CSS", value: "89%"},
    {name: "TypeScript", value: "81%"},
    {name: "JQuery", value: "75%"},
    {name: "React.JS", value: "77%"},
    {name: "Next.JS", value: "68%"},
    {name: "Vue.JS", value: "50%"},
    {name: ["Bootstrap", "Tailwind"], value: ["40%", "60%"]},
]

export const BACKEND_SKILLS = [
    {name: "Node.JS", value: "70%"},
    {name: "Express.JS", value: "65%"},
    {name: "Laravel", value: "31%"},
    {name: "MySQL", value: "50%"},
    {name: "PostgreSQL", value: "62%"},
]

export const FRONTEND = "Front-end"
export const BACKEND = "Back-end"

export const BIRTHDAY = "Birthday : "
export const AGE = "Age : "
export const EMAIL = "Email : "
export const LOCATION = "Location : "
export const LANGUAGES = "Languages : "
export const FREELANCE = "Freelance : "

const calcAge = new Date().getMonth() < 1 && new Date().getDay() < 25 ? (new Date().getFullYear() - 2004) - 1 : new Date().getFullYear() - 2004

export const CONTACT_INFO = [
  {name: "Birthday : ", value: "25th January 2004"},
  {name: "Age : ", value: calcAge},
  {name: "Email : ", value: "blazejfederowicz@gmail.com"},
  {name: "Location : ", value: "Poland"},
  {name: "Languages : ", value: ["Polish", "English"]},
  {name: "Freelance : ", value: "Available"}
]

export const ABOUT_TEXT = (
  <>
    I completed secondary school with a <span className="font-bold">vocational qualification</span> as an <span className="font-bold">Information Technology Technician</span>. I am <span className="font-bold">passionate</span> about building <span className="font-bold">web applications</span> that offer smooth and intuitive <span className="font-bold">user experiences</span>. Outside of coding, I enjoy playing guitar, and to unwind, I hit the gym.
  </>
);

export const ABOUT_ME = (
  <>
    <span className="font-bold">About</span> Me
  </>
)

// Routes

export const API_ROUTES = {
    EXPERIENCE: process.env.NEXT_PUBLIC_BASE_URL + "/api/experience",
    EDUCATION: process.env.NEXT_PUBLIC_BASE_URL + "/api/education"
}

export const ERROR_MESSAGES = {
    FETCH_EXPERIENCE: "Failed to fetch professional experience data",
    FETCH_EDUCATION: "Failed to fetch education data",
}

// Experience
export const EXPERIENCE_TITLE =<><span className="font-bold">Professional</span> Experience</>;
export const EDUCATION_TITLE = "Education"

// Footer
export const FOOTER_TEXT = "© Błażej Federowicz Inc. All Rights Reserved " + new Date().getFullYear()
export const FOOTER_QUOTE = "Quality is a product of a conflict between programmers and testers. ― Yegor Bugayenk"

//Contact
export const CONTACT_TITLE = "Contact Information"
export const CONTACT_TEXT = (<><span className="font-bold">Contact</span> Me</>)
export const CONTACT_LOCATION = "Pomorskie, Poland"
export const LOCATION_TEXT = "Location"
export const CONTACT_MESSAGE = "Send Me a Message"
export const CONTACT_EMAIL = "Email"
export const CONTACT_EMAIL_ADDRESS = "blazejfederowicz@gmail.com"
export const CONTACT_SOCIALS = "Social Profiles"
export const CONTACT_SEND = "Send Message"
export const CONTACT_SOCIAL_LINKS = [
  {href:"https://github.com/blazejfederowicz", icon:"bi bi-github"},
  {href:"https://www.linkedin.com/in/błażej-federowicz-6a25b0320/", icon:"bi bi-linkedin"},
  {href:"mailto:blazejfederowicz@gmail.com", icon:"bi bi-envelope"}
]
export const CONTACT_FORM = [
  {label: "Name", attr: "name", placeholder: "Your name"},
  {label: "Email", attr: "email", placeholder: "your.email@example.com"},
  {label: "Title", attr: "title", placeholder: "Your title"},
  {label: "Message", attr: "message", placeholder: "Your message"}
]

// Reducer
export const enum ACTION_TYPES {
  INPUT_CHANGE= "INPUT_CHANGE",
  SET_ERROR= "SET_ERROR",
  CLEAR_FORM= "CLEAR_FORM",
  SET_PENDING= "SET_PENDING",
  SET_FULLFIELD= "SET_FULLFIELD",
  SET_REJECTED= "SET_REJECTED"
}

export const ERROR_MESSAGE = (name:string) => `Valid ${name} is required`
export const FULLFIELD_MESSAGE = "Message sent!"
export const REJECTED_MESSAGE = "Something went wrong, please try again later"