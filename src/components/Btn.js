// style
import './Btn.css';

export default function Btn({ btn, handleClick }) {
  return (
    <button className="btn" onClick={handleClick}>
        {btn && btn.text}
    </button>
  );
}
