import { ACTIONS } from "./App"

export default function OperationButton({ operation, dispatch }) {
    return <button className="digitButton" onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: {operation} })}>
    {operation}
    </button>
}