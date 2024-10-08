export type Project = {
    title: string;
    techs: string[];
    link: string;
    isComingSoon?: boolean;
};

const projects: Project[] = [
    {
        title: "Kuwi - a family tree generator",
        techs: ["Python", "SQLAlchemy", "PostgreSQL"],
        link: "https://kuwiapp.com",
    },
    {
        title: "Wild Oasis - hotel website",
        techs: ["React", "Next.js", "TailwindCSS"],
        link: "https://wild-oasis-pascualcam.vercel.app/",
    },
    {
        title: "Wild Oasis - hotel admin",
        techs: ["React", "Next.js", "TailwindCSS"],
        link: "https://wild-oasis-admin-pascualcam.vercel.app/",
    },
    {
        title: "ML at Stanford",
        techs: ["Pandas", "Jupyter"],
        link: "https://github.com/pascualcam",
    },
    {
        title: "World Cup historical data",
        techs: ["Python"],
        link: "https://github.com/pascualcam",
        isComingSoon: true,
    },
    {
        title: "Tour de France",
        techs: ["Python"],
        link: "https://github.com/pascualcam/tour-de-tour",
        isComingSoon: true,
    },
    {
        title: "Algorithms",
        techs: ["Python", "Java", "C", "MATLAB"],
        link: "https://github.com/pascualcam/algorithms",
    },
    {
        title: "This website",
        techs: ["TailwindCSS", "TypeScript"],
        link: "https://pascualcam.com",
    },
];

export default projects;
