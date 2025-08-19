import PropTypes from "prop-types";
import { Code } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "react-feather";

function PortfolioItem({ title, imgUrl, description, stack, link, index }) {
    const isGithub = link && link.includes("github.com");

    return (
        <div className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden card-hover transition-all duration-300 hover:border-gray-300 shadow-lg">
            <div className="relative overflow-hidden">
                <img
                    src={imgUrl || "/placeholder.svg"}
                    alt={title}
                    className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6">
                <h3 className="text-xl md:text-2xl font-space-grotesk font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                    {title}
                </h3>

                <p className="text-gray-600 mb-4 text-base">{description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {stack.map((item, stackIndex) => (
                        <span
                            key={stackIndex}
                            /* Updated tech badges from purple to emerald green theme */
                            className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-emerald-600/20 to-emerald-800/20 text-emerald-700 border border-emerald-500/30 rounded-full backdrop-blur-sm"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                <div className="flex items-center justify-between">
                    {link ? (
                        <a
                            href={link}
                            /* Updated button gradient from purple to emerald green */
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-emerald-900 transition-all duration-300 text-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {" "}
                            {isGithub ? (
                                <>
                                    {" "}
                                    <FaGithub size={16} className="mr-2" />
                                    View Code{" "}
                                </>
                            ) : (
                                <>
                                    <ExternalLink size={16} className="mr-2" />
                                    Go to Site
                                </>
                            )}
                        </a>
                    ) : (
                        <button className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-600 font-semibold rounded-lg cursor-not-allowed text-sm">
                            <Code className="mr-2 h-4 w-4" />
                            Coming Soon
                        </button>
                    )}

                    <div className="text-gray-500 text-sm font-medium">
                        0{index + 1}
                    </div>
                </div>
            </div>
        </div>
    );
}

PortfolioItem.propTypes = {
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string,
    index: PropTypes.number.isRequired,
};

export default PortfolioItem;
