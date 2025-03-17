
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ModuleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
  completed?: boolean;
  current?: boolean;
}

export const ModuleCard = ({ 
  title, 
  description, 
  icon, 
  to, 
  completed, 
  current 
}: ModuleCardProps) => {
  return (
    <Link 
      to={to}
      className={cn(
        "module-card flex flex-col h-full",
        current && "module-card-active"
      )}
    >
      <div className="flex items-start mb-4">
        <div className="bg-kentucky-blue/10 p-3 rounded-full text-kentucky-blue mr-4">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        {completed && (
          <div className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
            Completed
          </div>
        )}
      </div>
      <p className="text-muted-foreground mb-4 flex-1">{description}</p>
      <div className="flex justify-end">
        <div className="inline-flex items-center gap-1 text-kentucky-blue hover:underline">
          <span>Continue</span>
          <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
};

export default ModuleCard;
