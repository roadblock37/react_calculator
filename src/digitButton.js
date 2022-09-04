import { ACTIONS } from "./App"
import "./index.css"

export default function DigitButton({ digit, dispatch }) {
    return <button className="digitButton" onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}>
    {digit}
    </button>
}