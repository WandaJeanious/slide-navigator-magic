
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
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
        <div className="flex items-center gap-2 mb-1">
          <Link 
            to="/" 
            className="text-muted-foreground hover:text-kentucky-blue transition-colors"
            title="Back to home"
          >
            <Home size={18} />
          </Link>
          <span className="text-muted-foreground">/</span>
          <h1 className="text-3xl font-bold text-kentucky-blue">{title}</h1>
        </div>
        {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
      </div>
      {progress !== undefined && (
        <ProgressCircle progress={progress} />
      )}
    </div>
  );
};

export default CourseHeader;
