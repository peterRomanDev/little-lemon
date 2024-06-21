// style
import './Btn.css';

export default function Btn({ btn, handleClick }) {
  // a button component

  return (
    <button className="btn" onClick={handleClick}>
        {btn && btn.text}
    </button>
  );
}
