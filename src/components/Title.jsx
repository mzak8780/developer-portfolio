import PropTypes from "prop-types";

function Title({ children, id }) {
    return (
        <div className="text-center mb-8">
            <h2
                id={id && id}
                className="font-space-gortesk text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 tracking-tight"
            >
                <span className="bg-gradient-to-r from-emerald-600 via-slate-600 to-emerald-800 bg-clip-text text-transparent">
                    {children}
                </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-emerald-800 mx-auto rounded-full"></div>
        </div>
    );
}

Title.propTypes = {
    id: PropTypes.string,
    children: PropTypes.string.isRequired,
};

export default Title;
