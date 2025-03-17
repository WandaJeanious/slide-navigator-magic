
import CourseHeader from "@/components/CourseHeader";
import ModuleCard from "@/components/ModuleCard";
import CourseNav from "@/components/CourseNav";
import { Book, CheckSquare, Layers, Video } from "lucide-react";

const Home = () => {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/4">
          <CourseNav />
        </div>
        
        <div className="w-full lg:w-3/4">
          <CourseHeader 
            title="Universal Design for Learning and Inclusivity in ECE" 
            subtitle="Early Childhood Education Professional Development"
            progress={0}
          />
          
          <div className="glass-card p-6 mb-8 animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">Welcome to the Course!</h2>
            <p className="mb-4">
              This interactive course will guide you through essential concepts of Universal Design for Learning (UDL) 
              and inclusivity in early childhood education environments. You'll learn practical strategies to create 
              accessible, engaging learning experiences for all children.
            </p>
            <p>
              Navigate through different modules using the navigation menu. Complete each section at your own pace, 
              and test your knowledge with the final assessment.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4">Course Modules</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <ModuleCard
              title="Introduction"
              description="Learn about the importance of inclusive practices in early childhood education."
              icon={<Book size={24} />}
              to="/introduction"
              current={true}
            />
            <ModuleCard
              title="Universal Design"
              description="Understand the principles of Universal Design and how they apply to learning environments."
              icon={<Layers size={24} />}
              to="/universal-design"
            />
            <ModuleCard
              title="Action & Expression"
              description="Explore how to provide multiple means of action and expression in your classroom."
              icon={<Layers size={24} />}
              to="/action-expression"
            />
            <ModuleCard
              title="Representation"
              description="Learn strategies for presenting information in multiple formats for diverse learners."
              icon={<Layers size={24} />}
              to="/representation"
            />
            <ModuleCard
              title="Engagement"
              description="Discover techniques to stimulate interest and motivation in all learners."
              icon={<Layers size={24} />}
              to="/engagement"
            />
            <ModuleCard
              title="Case Studies"
              description="Examine real-world examples of UDL implementation in early childhood settings."
              icon={<Book size={24} />}
              to="/case-studies"
            />
            <ModuleCard
              title="Resources"
              description="Access additional materials and references to support your inclusive practices."
              icon={<Video size={24} />}
              to="/resources"
            />
            <ModuleCard
              title="Assessment"
              description="Test your knowledge with an interactive quiz on key concepts covered in the course."
              icon={<CheckSquare size={24} />}
              to="/quiz"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
