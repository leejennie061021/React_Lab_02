import "./spinner.css";

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <p>Loading page...</p>
    </div>
  );
}
