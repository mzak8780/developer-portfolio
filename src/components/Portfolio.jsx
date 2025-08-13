import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import Title from "./Title";

function Portfolio() {
    return (
        <div className="flex flex-col justify-center items-center py-20 px-6 lg:px-12 w-full max-w-7xl mx-auto white-section rounded-lg relative">
            {/* Crater background effect */}
            <div className="absolute top-0 left-0 z-0 pointer-events-none w-full h-full">
                <div className="crater crater-6 absolute"></div>
                <div className="crater crater-7 absolute"></div>
                <div className="crater crater-8 absolute"></div>
            </div>
            <div className="text-center mb-16 relative z-10">
                <Title id="projects-title">Featured Projects</Title>
                <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
                    full-stack development, from web applications to hardware A
                    collection of projects that showcase my skills in
                    integrations.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 w-full relative z-10">
                {portfolio.map((project, index) => (
                    <PortfolioItem
                        key={project.title}
                        imgUrl={project.imgUrl}
                        title={project.title}
                        stack={project.stack}
                        link={project.link}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
