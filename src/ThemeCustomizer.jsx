function ThemeCustomizer({ state, dispatch }) {
    return (
        <div className="w-full max-w-sm sm:w-80 rounded-2xl border border-gray-200 bg-white text-gray-900 shadow-sm p-4 sm:p-5">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
                Theme Customizer
            </h2>

            {/* Theme */}
            <div className="mb-5">
                <p className="text-sm font-medium text-gray-700 mb-2">Theme</p>
                <div className="flex gap-2">
                    <button
                        onClick={() => dispatch({ type: "TOGGLE_THEME", payload: "light" })}
                        className={`flex-1 px-3 py-2 text-sm rounded-lg border ${
                            state.theme === "light" ? "border-gray-900 bg-gray-100" : "border-gray-300 hover:bg-gray-50"
                        }`}
                    >
                        Light
                    </button>
                    <button
                        onClick={() => dispatch({ type: "TOGGLE_THEME", payload: "dark" })}
                        className={`flex-1 px-3 py-2 text-sm rounded-lg border ${
                            state.theme === "dark" ? "border-gray-900 bg-gray-100" : "border-gray-300 hover:bg-gray-50"
                        }`}
                    >
                        Dark
                    </button>
                </div>
            </div>

            {/* Font Size */}
            <div className="mb-5">
                <p className="text-sm font-medium text-gray-700 mb-2">Font Size</p>
                <div className="flex items-center justify-between">
                    <button
                        onClick={() => dispatch({ type: "DECREASE_FONT" })}
                        className="w-9 h-9 shrink-0 rounded-lg border border-gray-300 hover:bg-gray-50 text-lg"
                    >
                        −
                    </button>
                    <span className="text-sm text-gray-900">{state.fontSize}px</span>
                    <button
                        onClick={() => dispatch({ type: "INCREASE_FONT" })}
                        className="w-9 h-9 shrink-0 rounded-lg border border-gray-300 hover:bg-gray-50 text-lg"
                    >
                        +
                    </button>
                </div>
            </div>

            {/* Accent */}
            <div className="mb-5">
                <p className="text-sm font-medium text-gray-700 mb-2">Accent</p>
                <div className="flex gap-3">
                    <button
                        onClick={() => dispatch({ type: "SET_ACCENT", payload: "blue" })}
                        className={`w-8 h-8 shrink-0 rounded-full bg-blue-500 ${
                            state.accent === "blue" ? "ring-2 ring-offset-2 ring-blue-500" : ""
                        }`}
                    />
                    <button
                        onClick={() => dispatch({ type: "SET_ACCENT", payload: "green" })}
                        className={`w-8 h-8 shrink-0 rounded-full bg-green-500 ${
                            state.accent === "green" ? "ring-2 ring-offset-2 ring-green-500" : ""
                        }`}
                    />
                    <button
                        onClick={() => dispatch({ type: "SET_ACCENT", payload: "purple" })}
                        className={`w-8 h-8 shrink-0 rounded-full bg-purple-500 ${
                            state.accent === "purple" ? "ring-2 ring-offset-2 ring-purple-500" : ""
                        }`}
                    />
                </div>
            </div>

            {/* Reset */}
            <button
                onClick={() => dispatch({ type: "RESET" })}
                className="w-full py-2 text-sm font-medium rounded-lg border border-gray-300 hover:bg-gray-50"
            >
                Reset
            </button>
        </div>
    );
}

export default ThemeCustomizer;