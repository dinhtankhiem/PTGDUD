import "./StatusBadge.css";

function StatusBadge(props) {
  const status = props.status;

  // Tao class theo status
  const badgeClass = `status-badge status-${status}`;

  return (
    <div className={badgeClass}>
      Trang thai: {status}
    </div>
  );
}

export default StatusBadge;
