
interface ProgressCircleProps {
  progress: number; // 0-100
}

export const ProgressCircle = ({ progress }: ProgressCircleProps) => {
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (progress / 100) * circumference;
  
  return (
    <div className="relative inline-flex items-center justify-center">
      <svg className="w-20 h-20" viewBox="0 0 100 100">
        <circle
          className="text-gray-200"
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          r="40"
          cx="50"
          cy="50"
        />
        <circle
          className="text-kentucky-blue"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="40"
          cx="50"
          cy="50"
        />
      </svg>
      <span className="absolute text-xl font-semibold">{progress}%</span>
    </div>
  );
};

export default ProgressCircle;
