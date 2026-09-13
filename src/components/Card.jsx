const accentBg = {
  blue: "bg-blue-500",
  green: "bg-green-500",
  purple: "bg-purple-500",
};

const accentButtonText = {
  blue: "text-blue-600",
  green: "text-green-600",
  purple: "text-purple-600",
};

function Card({
  title,
  description,
  image,
  buttonText = "Learn more",
  onButtonClick,
  accent = "blue",
}) {
  return (
    <div
      className={`w-full max-w-sm rounded-2xl border border-gray-200 ${accentBg[accent]} shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden`}
      
    >
      {image && (
        <img src={image} alt={title} className="w-full h-40 sm:h-48 object-cover" />
      )}

      <div className="p-4 sm:p-5">
        <h3 className="text-base sm:text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-100 mt-2">{description}</p>

        {onButtonClick && (
          <button
            onClick={onButtonClick}
            className="mt-4 px-3 py-1.5 text-sm font-medium bg-white rounded-lg hover:bg-gray-100 transition-colors"
          >
            <span className={accentButtonText[accent]}>{buttonText} →</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;