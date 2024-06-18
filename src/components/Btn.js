import './Btn.css';

export default function Btn({ props, handleClick }) {
  return (
    <button className="btn" onClick={handleClick}>
        {props.text}
    </button>
  );
}
