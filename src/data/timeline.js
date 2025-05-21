const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1; // Months are 0-indexed

export default [
    {
        year: "Today",
        title: "Software Developer",
        company: "Data#3",
        duration: `${Math.ceil(
            (currentYear - 2024) * 12 + currentMonth - 6
        )} months`,
        details:
            "At Data#3, I develop and deploy scalable backend solutions using object-oriented programming principles and modern web technologies. I focus on optimizing system performance, ensuring data integrity, and integrating RESTful APIs to enhance interoperability. Collaborating in Agile teams, I align technical solutions with business objectives to drive impactful outcomes.",
    },
    {
        year: "2023",
        title: "Software Developer - Senior Analyst",
        company: "Accenture",
        duration: "1.75 years",
        details:
            "Led the development and support of CRM systems, managing multiple production applications to ensure reliability and performance. Optimized data integrity and performance by designing scalable data distribution strategies and managing relational databases. Engaged with senior stakeholders to translate business objectives into scalable software solutions, standardizing development workflows for efficiency. Developed and maintained a customized SaaS cloud solution supporting over 2,000 users across multiple countries. Built backend functionality with modular, scalable logic and integrated third-party services to extend system capabilities. Enhanced system reliability using event-driven architecture and automated deployment processes for faster, more reliable releases.",
    },
    {
        year: "2022",
        title: "Software Developer - Analyst",
        company: "Accenture",
        duration: "8 months",
        details:
            "Contributed to an international SaaS project, gaining hands-on experience with development best practices, security models, and data management strategies. Supported ongoing development and maintenance through bug fixes, enhancements, and test case creation.",
    },
    {
        year: "2021",
        title: "Technical Service Professional",
        company: "Macquarie Telecom",
        duration: "4 months",
        details:
            "Acted as the first point of contact for resolving nationwide connectivity issues, applying network and cloud fundamentals to real-world scenarios. Developed foundational skills in troubleshooting and customer service within the IT sector.",
    },
    {
        year: "2017",
        title: "Bachelor's Degree in Mechatronic Engineering and Project Management",
        company: "The University of Sydney",
        duration: "5 Years",
        details:
            "Pursuing a double degree, I studied mechatronic engineering concepts such as system design, control systems, and programming, alongside project management skills like stakeholder engagement, resource management, and agile methodologies.",
    },
];
