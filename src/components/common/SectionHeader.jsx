export const SectionHeader = ({ label, className = '' }) => {
  return (
    <div className={`flex items-center gap-3 text-xs tracking-[0.25em] uppercase font-bold text-[#799a53] ${className}`}>
      <span>{label}</span>
      <span className="w-8 h-[2px] bg-[#799a53] inline-block"></span>
    </div>
  );
};
