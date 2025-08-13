const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1; // Months are 0-indexed

export default [
    {
        year: "Today",
        title: "Data Engineer",
        company: "REST Super",
        duration: `${Math.ceil(
            (currentYear - 2025) * 12 + currentMonth - 7
        )} months`,
        details:
            "At REST Super, I design, build, and maintain data pipelines that enable efficient extraction, transformation, and loading (ETL) of large datasets. I work with cloud-based tools and modern data engineering frameworks to ensure accuracy, security, and accessibility of data across the business. My role bridges technical implementation with strategic insights, empowering data-driven decision-making.",
    },
    {
        year: "2024",
        title: "Salesforce Software Developer",
        company: "Data#3",
        duration: `1.1 years`,
        details:
            "At Data#3, I developed and deployed scalable backend solutions using object-oriented programming principles and modern web technologies. I focused on optimizing system performance, ensuring data integrity, and integrating RESTful APIs to enhance interoperability. Working within Agile teams, I aligned technical solutions with business objectives to deliver impactful outcomes.",
    },
    {
        year: "2022",
        title: "Software Developer - Analyst / Senior Analyst",
        company: "Accenture",
        duration: "2.4 years",
        details:
            "Contributed to the development of a customized SaaS cloud solution used by over 2,000 users across multiple countries. Led CRM development and support for an IT operations project, managing multiple production applications while ensuring system reliability and performance. Designed scalable data distribution strategies, managed relational databases, and implemented event-driven architecture to enhance reliability and performance. Integrated third-party services, automated deployment processes, and standardized development workflows for efficiency. Collaborated with senior stakeholders to translate business objectives into scalable technical solutions while gaining hands-on experience in security models, data management, and development best practices.",
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
        duration: "5 years",
        details:
            "Pursuing a double degree, I studied mechatronic engineering concepts such as system design, control systems, and programming, alongside project management skills like stakeholder engagement, resource management, and agile methodologies.",
    },
];
