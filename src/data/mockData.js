import theme from "../themes/theme";

const { tokens } = theme;

const mockDataTeam = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    access: "admin",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    access: "manager",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    access: "user",
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    access: "admin",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    access: "user",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    access: "manager",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    access: "user",
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    access: "user",
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    access: "admin",
  },
];

const mockDataContacts = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    address: "0912 Won Street, Alabama, SY 10001",
    city: "New York",
    zipCode: "10001",
    registrarId: 123512,
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    address: "1234 Main Street, New York, NY 10001",
    city: "New York",
    zipCode: "13151",
    registrarId: 123512,
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    address: "3333 Want Blvd, Estanza, NAY 42125",
    city: "New York",
    zipCode: "87281",
    registrarId: 4132513,
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    address: "1514 Main Street, New York, NY 22298",
    city: "New York",
    zipCode: "15551",
    registrarId: 123512,
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    address: "11122 Welping Ave, Tenting, CD 21321",
    city: "Tenting",
    zipCode: "14215",
    registrarId: 123512,
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    address: "1234 Canvile Street, Esvazark, NY 10001",
    city: "Esvazark",
    zipCode: "10001",
    registrarId: 123512,
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    address: "22215 Super Street, Everting, ZO 515234",
    city: "Evertin",
    zipCode: "51523",
    registrarId: 123512,
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    address: "4123 Ever Blvd, Wentington, AD 142213",
    city: "Esteras",
    zipCode: "44215",
    registrarId: 512315,
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    address: "51234 Avery Street, Cantory, ND 212412",
    city: "Colunza",
    zipCode: "111234",
    registrarId: 928397,
  },
  {
    id: 10,
    name: "Enteri Redack",
    email: "enteriredack@gmail.com",
    age: 42,
    phone: "(222)444-5555",
    address: "4123 Easer Blvd, Wentington, AD 142213",
    city: "Esteras",
    zipCode: "44215",
    registrarId: 533215,
  },
  {
    id: 11,
    name: "Steve Goodman",
    email: "stevegoodmane@gmail.com",
    age: 11,
    phone: "(444)555-6239",
    address: "51234 Fiveton Street, CunFory, ND 212412",
    city: "Colunza",
    zipCode: "1234",
    registrarId: 92197,
  },
];

const mockDataInvoices = [
  {
    id: 1,
    title: "Frontend Developer",
    salary: "₱600,000 - ₱800,000",
    description:
      "We are seeking a talented Frontend Developer to join our team...",
    location: "DA Office",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "2+ years of experience in frontend development",
      "Proficiency in HTML, CSS, and JavaScript",
    ],
    benefits: [
      "Health insurance",
      "Remote work options",
      "Professional development opportunities",
    ],
  },
  {
    id: 2,
    title: "UX Designer",
    salary: "₱700,000 - ₱900,000",
    description:
      "We are looking for a creative UX Designer to enhance user experiences...",
    location: "DA Office",
    requirements: [
      "Bachelor's degree in Design or related field",
      "3+ years of experience in UX design",
      "Strong portfolio demonstrating user-centered design solutions",
    ],
    benefits: [
      "Flexible work hours",
      "Paid parental leave",
      "Employee stock purchase plan",
    ],
  },
  {
    id: 3,
    title: "Data Analyst",
    salary: "₱500,000 - ₱700,000",
    description:
      "We are hiring a Data Analyst to interpret data and turn it into information...",
    location: "DA Office",
    requirements: [
      "Bachelor's degree in Statistics, Mathematics, or related field",
      "Proficiency in SQL and data visualization tools",
      "Strong analytical and problem-solving skills",
    ],
    benefits: [
      "401(k) with company match",
      "Paid vacation and holidays",
      "Wellness program",
    ],
  },
  {
    id: 4,
    title: "Sales Representative",
    salary: "₱400,000 - ₱600,000",
    description:
      "We are seeking an enthusiastic Sales Representative to join our team...",
    location: "DA Office",
    requirements: [
      "High school diploma or equivalent",
      "Excellent communication and negotiation skills",
      "Proven sales experience",
    ],
    benefits: [
      "Commission-based incentives",
      "Training and development programs",
      "Team-building activities",
    ],
  },
  {
    id: 5,
    title: "Full Stack Developer",
    salary: "₱800,000 - ₱1,000,000",
    description:
      "We are hiring a Full Stack Developer to work on exciting projects...",
    location: "DA Office",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years of experience in full stack development",
      "Proficiency in HTML, CSS, JavaScript, and a backend language",
    ],
    benefits: [
      "Flexible work schedule",
      "Health and wellness benefits",
      "Company-sponsored events",
    ],
  },
  {
    id: 6,
    title: "Marketing Manager",
    salary: "₱900,000 - ₱1,200,000",
    description:
      "We are seeking a dynamic Marketing Manager to lead our marketing efforts...",
    location: "DA Office",
    requirements: [
      "Bachelor's degree in Marketing, Business, or related field",
      "5+ years of experience in marketing roles",
      "Proven track record of successful marketing campaigns",
    ],
    benefits: [
      "Performance bonuses",
      "Company car allowance",
      "Paid professional development courses",
    ],
  },
  {
    id: 7,
    title: "Graphic Designer",
    salary: "₱500,000 - ₱700,000",
    description:
      "We are looking for a creative Graphic Designer to produce visually stunning designs...",
    location: "DA Office",
    requirements: [
      "Bachelor's degree in Graphic Design or related field",
      "Proficiency in Adobe Creative Suite",
      "Strong portfolio showcasing design skills",
    ],
    benefits: [
      "Flexible work environment",
      "Annual performance bonus",
      "Employee referral program",
    ],
  },
  {
    id: 8,
    title: "Project Manager",
    salary: "₱800,000 - ₱1,000,000",
    description:
      "We are seeking an experienced Project Manager to oversee project execution...",
    location: "DA Office",
    requirements: [
      "Bachelor's degree in Project Management or related field",
      "Proven track record of managing complex projects",
      "Excellent leadership and communication skills",
    ],
    benefits: [
      "Generous vacation policy",
      "Employee stock options",
      "Professional development stipend",
    ],
  },
  {
    id: 9,
    title: "Customer Service Representative",
    salary: "₱350,000 - ₱500,000",
    description:
      "We are hiring a Customer Service Representative to provide exceptional support...",
    location: "DA Office",
    requirements: [
      "High school diploma or equivalent",
      "Excellent verbal and written communication skills",
      "Ability to handle customer inquiries and resolve issues",
    ],
    benefits: [
      "Healthcare coverage",
      "Employee assistance program",
      "Opportunity for career growth",
    ],
  },
  {
    id: 10,
    title: "Quality Assurance Analyst",
    salary: "₱600,000 - ₱800,000",
    description:
      "We are seeking a detail-oriented Quality Assurance Analyst to ensure product quality...",
    location: "DA Office",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "Experience in software testing and quality assurance",
      "Knowledge of test automation frameworks",
    ],
    benefits: [
      "401(k) retirement plan",
      "Flexible spending accounts",
      "Team-building activities",
    ],
  },
  {
    id: 11,
    title: "Human Resources Manager",
    salary: "₱900,000 - ₱1,200,000",
    description:
      "We are looking for an HR Manager to oversee all aspects of human resources...",
    location: "DA Office",
    requirements: [
      "Bachelor's degree in Human Resources or related field",
      "5+ years of experience in HR roles",
      "Strong knowledge of labor laws and regulations",
    ],
    benefits: [
      "Competitive salary package",
      "Paid parental leave",
      "Employee wellness program",
    ],
  },
  {
    id: 12,
    title: "Content Writer",
    salary: "₱400,000 - ₱600,000",
    description:
      "We are seeking a talented Content Writer to create engaging and informative content...",
    location: "DA Office",
    requirements: [
      "Bachelor's degree in English, Journalism, or related field",
      "Excellent writing and editing skills",
      "Experience in content creation for digital platforms",
    ],
    benefits: [
      "Flexible work hours",
      "Professional growth opportunities",
      "Company-provided laptop",
    ],
  },
];

const mockTransactions = [
  {
    txId: "Super Ferry",
    user: "Ray Hernandez",
    date: "2023-06-28",
    cost: "2.00",
  },
  {
    txId: "Titanic",
    user: "Matthew Romero",
    date: "22023-06-24",
    cost: "2.00",
  },
  {
    txId: "Royal Mail Ship",
    user: "Mark Salem",
    date: "2023-06-19",
    cost: "2.00",
  },
  {
    txId: "Santa Maria",
    user: "Barge 1",
    date: "22023-06-12",
    cost: "2.00",
  },
  {
    txId: "Caravel",
    user: "Barge 2",
    date: "2022-11-02",
    cost: "2.00",
  },
  {
    txId: "Aframax",
    user: "Barge 3",
    date: "2021-09-01",
    cost: "2.00",
  },
  {
    txId: "RMS Luisitania",
    user: "Barge 4",
    date: "2019-04-15",
    cost: "2.00",
  },
  {
    txId: "Capesize",
    user: "Barge 5",
    date: "2022-04-01",
    cost: "2.00",
  },
];

const mockBarData = [
  {
    country: "Item Inventory",
    Total: 90,
    TotalColor: "hsl(111, 70%, 50%)",
  },
  {
    country: "Item Withdrawal",
    Total: 38,
    TotalColor: "hsl(111, 70%, 50%)",
  },
  {
    country: "Item Transfer",
    Total: 23,
    TotalColor: "hsl(96, 70%, 50%)",
  },
  {
    country: "Item Delivery",
    Total: 52,
    TotalColor: "hsl(326, 70%, 50%)",
  },
  {
    country: "Item Return",
    Total: 80,
    TotalColor: "hsl(325, 70%, 50%)",
  },
];

const mockBarDataUsers = [
  {
    country: "Total Users",
    Total: 12,
    TotalColor: "hsl(111, 70%, 50%)",
  },
  {
    country: "TAD Users",
    Total: 24,
    TotalColor: "hsl(111, 70%, 50%)",
  },
  {
    country: "IFED Users",
    Total: 63,
    TotalColor: "hsl(96, 70%, 50%)",
  },
  {
    country: "HR Users",
    Total: 5,
    TotalColor: "hsl(326, 70%, 50%)",
  },
];

const mockPieData = [
  {
    id: "Expenses",
    label: "Expenses",
    value: 20,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "Sales",
    label: "Sales",
    value: 16,
    color: "hsl(162, 70%, 50%)",
  },
];

const mockLineData = [
  {
    id: "Period 1",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "Barge 1",
        y: 88,
      },
      {
        x: "Barge 2",
        y: 232,
      },
      {
        x: "Barge 3",
        y: 281,
      },
      {
        x: "Barge 4",
        y: 1,
      },
      {
        x: "Barge 5",
        y: 35,
      },
      {
        x: "Barge 6",
        y: 236,
      },
    ],
  },
  {
    id: "Period 2",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "Barge 1",
        y: 189,
      },
      {
        x: "Barge 2",
        y: 97,
      },
      {
        x: "Barge 3",
        y: 87,
      },
      {
        x: "Barge 4",
        y: 299,
      },
      {
        x: "Barge 5",
        y: 251,
      },
      {
        x: "Barge 6",
        y: 33,
      },
    ],
  },
  {
    id: "Period 3",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "Barge 1",
        y: 152,
      },
      {
        x: "Barge 2",
        y: 8,
      },
      {
        x: "Barge 3",
        y: 197,
      },
      {
        x: "Barge 4",
        y: 107,
      },
      {
        x: "Barge 5",
        y: 170,
      },
      {
        x: "Barge 6",
        y: 189,
      },
    ],
  },
];

const mockPurchaseRequest = [
  {
    id: 1,
    name: "Jon Snow",
    date: "08/02/2023",
    status: "Present",
    setting: "WFH",
    clockin: "07:56:34",
    clockout: "05:23:12",
    late: "--:--:--",
    undertime: "--:--:--",
    overtime: "--:--:--",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    date: "08/02/2023",
    status: "Absent",
    setting: "",
    clockin: "--:--:--",
    clockout: "--:--:--",
    late: "--:--:--",
    undertime: "--:--:--",
    overtime: "--:--:--",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    date: "08/02/2023",
    status: "Present",
    setting: "WFH",
    clockin: "07:56:34",
    clockout: "05:23:12",
    late: "--:--:--",
    undertime: "--:--:--",
    overtime: "--:--:--",
  },
  {
    id: 4,
    name: "Anya Stark",
    date: "08/02/2023",
    status: "Present",
    setting: "ON-SITE",
    clockin: "07:56:34",
    clockout: "05:23:12",
    late: "--:--:--",
    undertime: "--:--:--",
    overtime: "--:--:--",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    date: "08/03/2023",
    status: "Overtime",
    setting: "ON-SITE",
    clockin: "07:56:34",
    clockout: "07:23:12",
    late: "--:--:--",
    undertime: "--:--:--",
    overtime: "2:00:00",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    date: "08/03/2023",
    status: "Present",
    setting: "WFH",
    clockin: "07:56:34",
    clockout: "04:00:00",
    late: "--:--:--",
    undertime: "01:00:00",
    overtime: "--:--:--",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    date: "08/03/2023",
    status: "Late",
    setting: "ON-SITE",
    clockin: "09:56:34",
    clockout: "05:23:12",
    late: "01:04:26",
    undertime: "--:--:--",
    overtime: "--:--:--",
  },
  {
    id: 8,
    name: "Rossini Frances",
    date: "08/03/2023",
    status: "Present",
    setting: "WFH",
    clockin: "07:56:34",
    clockout: "05:23:12",
    late: "--:--:--",
    undertime: "--:--:--",
    overtime: "--:--:--",
  },
  {
    id: 9,
    name: "Harvey Roxie",
    date: "08/03/2023",
    status: "Present",
    setting: "WFH",
    clockin: "07:56:34",
    clockout: "05:23:12",
    late: "--:--:--",
    undertime: "--:--:--",
    overtime: "--:--:--",
  },
];

export default {
  mockPurchaseRequest,
  mockDataTeam,
  mockDataContacts,
  mockDataInvoices,
  mockTransactions,
  mockBarData,
  mockBarDataUsers,
  mockPieData,
  mockLineData,
};
