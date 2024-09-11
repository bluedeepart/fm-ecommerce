// eslint-disable-next-line react/prop-types
function Button({ children, cssClasses = '', type, onClick, ...props }) {
  const btnType = type === 'primary' ? 'btn-primary' : '';
  return (
    <button className={`${btnType} ${cssClasses}`} onClick={onClick}
      {...props}>
      {children}
    </button>
  );
}

export default Button;
