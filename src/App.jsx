import React, { useReducer } from 'react'
import Card from './components/Card'
import ThemeCustomizer from './ThemeCustomizer'

const initialState = {
  theme: "light",
  fontSize: 16,
  accent: "blue"
}

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: action.payload };

    case "INCREASE_FONT":
      return { ...state, fontSize: state.fontSize + 1 };

    case "DECREASE_FONT":
      return { ...state, fontSize: state.fontSize - 1 };

    case "SET_ACCENT":
      return { ...state, accent: action.payload };

    case "RESET":
      return initialState;

    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div
      className={`flex flex-col justify-center items-center min-h-screen w-full transition-colors duration-300 px-4 py-8 sm:px-6 md:px-12 ${
        state.theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
      style={{ fontSize: `${state.fontSize}px` }}
    >
      <h1 className="mb-6 font-semibold">Text size is changing</h1>

      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-10 w-full max-w-4xl">
        <div className="flex justify-center md:block">
          <Card
            title="React Fundamentals"
            description="Covers components, props, state, and hooks."
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgfxYNBYvdp0nXoqJy3-nYx3eqfGBHmUUYpfakCNhD3h6PwdFxDpi_5AM&s=10"
            buttonText="View course"
            onButtonClick={() => console.log('clicked')}
            accent={state.accent}
          />
        </div>
        <div className="flex justify-center md:block">
          <ThemeCustomizer state={state} dispatch={dispatch} />
        </div>
      </div>
    </div>
  )
}

export default App