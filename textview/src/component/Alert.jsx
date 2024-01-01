const Alert = ({alert}) => {
  return (
    <div style={{height:'50px'}} className="mb-3">
    {alert && <div class="alert alert-success" role="alert">
      <strong>{alert.type}: </strong>{alert.message}
    </div>}
    </div>
  );
};

export default Alert;
