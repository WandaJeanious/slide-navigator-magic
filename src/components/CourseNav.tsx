
import { Link, useLocation } from "react-router-dom";
import { Book, CheckSquare, Home, Layers, Video } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const NavItem = ({ to, icon, label }: NavItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={cn(
        "nav-item",
        isActive && "nav-item-active"
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export const CourseNav = () => {
  return (
    <div className="flex flex-col gap-2 p-4 glass-card">
      <h3 className="text-lg font-semibold mb-3 text-kentucky-blue">Course Navigation</h3>
      <NavItem to="/" icon={<Home size={18} />} label="Home" />
      <NavItem to="/introduction" icon={<Book size={18} />} label="Introduction" />
      <NavItem to="/universal-design" icon={<Layers size={18} />} label="Universal Design" />
      <NavItem to="/action-expression" icon={<Layers size={18} />} label="Action & Expression" />
      <NavItem to="/representation" icon={<Layers size={18} />} label="Representation" />
      <NavItem to="/engagement" icon={<Layers size={18} />} label="Engagement" />
      <NavItem to="/case-studies" icon={<Book size={18} />} label="Case Studies" />
      <NavItem to="/resources" icon={<Video size={18} />} label="Resources" />
      <NavItem to="/quiz" icon={<CheckSquare size={18} />} label="Assessment" />
    </div>
  );
};

export default CourseNav;
