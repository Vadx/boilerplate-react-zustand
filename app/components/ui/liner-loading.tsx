interface LinearLoadingProps {
  className?: string;
}

const LinearLoading = ({ className }: LinearLoadingProps) => {
  return (
    <div className={`progress-container ${className}`}>
      <div className="progress-bar-primary" />
      <div className="progress-bar-secondary" />
    </div>
  );
};

export default LinearLoading;
