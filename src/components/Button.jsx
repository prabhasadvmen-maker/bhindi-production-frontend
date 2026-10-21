export const Button = ({ children, variant = 'primary', onClick, type = 'button', ...props }) => {
  const styles = {
    padding: '0.6rem 1.2rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.95rem',
    transition: 'all 0.2s ease',
    backgroundColor: variant === 'primary' ? '#646cff' : '#2a2b36',
    color: '#ffffff',
  };

  return (
    <button type={type} onClick={onClick} style={styles} {...props}>
      {children}
    </button>
  );
};
