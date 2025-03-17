
import { ProgressCircle } from "./ProgressCircle";

interface CourseHeaderProps {
  title: string;
  subtitle?: string;
  progress?: number;
}

export const CourseHeader = ({ title, subtitle, progress }: CourseHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-8 p-6 glass-card animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-kentucky-blue">{title}</h1>
        {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
      </div>
      {progress !== undefined && (
        <ProgressCircle progress={progress} />
      )}
    </div>
  );
};

export default CourseHeader;
