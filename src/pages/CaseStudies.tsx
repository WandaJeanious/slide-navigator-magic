
import { useState } from "react";
import CourseHeader from "@/components/CourseHeader";
import CourseNav from "@/components/CourseNav";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const caseStudies = [
  {
    title: "Case Study 1: Supporting Sensory Needs in the Classroom",
    image: "/lovable-uploads/f3e44582-f95c-4496-978c-5645b36cdbd3.png",
    background: "Maya is a 4-year-old in Ms. Johnson's preschool classroom. Maya has sensory processing differences and becomes overwhelmed in loud or busy environments. She often covers her ears during group activities and sometimes has difficulty transitioning between activities.",
    challenge: "How can Ms. Johnson support Maya's full participation in the classroom while addressing her sensory needs?",
    solution: [
      "Ms. Johnson created a designated 'quiet corner' with noise-canceling headphones, weighted blankets, and sensory tools that Maya (and other children) could access when feeling overwhelmed.",
      "She introduced a visual schedule with movable pieces so Maya could see what activities were coming next, allowing her to prepare for transitions.",
      "During circle time, Ms. Johnson provided a special carpet square with different texture options and placed it slightly outside the main circle but still included.",
      "She incorporated sensory breaks throughout the day for all children, normalizing the need for different types of sensory input."
    ],
    udlPrinciples: [
      "Multiple means of engagement: Providing options to maintain attention and reduce distractions",
      "Multiple means of representation: Visual schedules to support understanding of routines",
      "Multiple means of action and expression: Allowing for flexible participation in group activities"
    ],
    outcomes: "After implementing these strategies, Maya began participating more consistently in classroom activities. Other children also benefited from the sensory tools and clear schedules. The classroom became a more inclusive environment for all learning styles and needs."
  },
  {
    title: "Case Study 2: Supporting Language Diversity",
    image: "/lovable-uploads/f8c5bffc-a85c-48ea-9278-1fe5882469b7.png",
    background: "Mr. Torres's classroom includes five children who are dual language learners, with home languages including Spanish, Arabic, and Mandarin. Some children are in the early stages of English acquisition, while others are more fluent.",
    challenge: "How can Mr. Torres ensure all children can access learning experiences and express their understanding, regardless of their language proficiency?",
    solution: [
      "Mr. Torres labeled classroom items in multiple languages, including picture symbols alongside text.",
      "He incorporated visual supports throughout daily routines, such as pictorial schedules and visual cue cards.",
      "During story time, he chose books with simple text and strong visual supports, as well as books in children's home languages.",
      "He created activity centers where children could demonstrate understanding through multiple means - drawing, building, dramatic play - rather than requiring verbal responses.",
      "He partnered with families to learn key phrases in each child's home language and invited family members to share cultural stories and traditions."
    ],
    udlPrinciples: [
      "Multiple means of representation: Presenting information visually and in multiple languages",
      "Multiple means of action and expression: Allowing children to show what they know through various modalities",
      "Multiple means of engagement: Connecting to children's cultural backgrounds and experiences"
    ],
    outcomes: "All children showed increased engagement in classroom activities. Children learning English made steady progress in language acquisition while maintaining connections to their home languages. English-speaking children developed interest in and respect for other languages and cultures."
  },
  {
    title: "Case Study 3: Supporting Motor Development Differences",
    image: "/lovable-uploads/ab54f918-feb6-4f1d-b528-417eacb371b5.png",
    background: "Elijah is a 3-year-old who uses a walker for mobility. He attends Ms. Garcia's inclusive preschool classroom and wants to participate in all activities with his peers.",
    challenge: "How can Ms. Garcia ensure Elijah has equitable access to all learning centers and activities while supporting his independence?",
    solution: [
      "Ms. Garcia rearranged the classroom to ensure wider pathways between learning centers, allowing easy navigation with a walker or wheelchair.",
      "She adjusted table heights and provided alternative seating options throughout the classroom.",
      "For art activities, she attached paper to the table with tape and provided adapted art tools with larger grips.",
      "During outdoor play, she created inclusive games that could be played in various positions (standing, sitting, or kneeling) and provided a variety of balls with different textures, sizes, and weights.",
      "She incorporated fine and gross motor activities into daily routines that could be accomplished in multiple ways, allowing all children to build skills at their own level."
    ],
    udlPrinciples: [
      "Multiple means of engagement: Creating motivating activities accessible to all children",
      "Multiple means of representation: Demonstrating activities in different positions",
      "Multiple means of action and expression: Providing multiple ways to interact with materials and demonstrate skills"
    ],
    outcomes: "Elijah gained confidence in navigating the classroom independently and participating in all activities. Other children benefited from the inclusive environment, learning to appreciate diverse movement styles and developing empathy. The classroom culture shifted to naturally accommodate physical differences."
  }
];

const CaseStudies = () => {
  const [currentCase, setCurrentCase] = useState(0);
  
  const handleNext = () => {
    if (currentCase < caseStudies.length - 1) {
      setCurrentCase(currentCase + 1);
    }
  };
  
  const handlePrevious = () => {
    if (currentCase > 0) {
      setCurrentCase(currentCase - 1);
    }
  };
  
  const study = caseStudies[currentCase];
  
  return (
    <div className="container max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/4">
          <CourseNav />
        </div>
        
        <div className="w-full lg:w-3/4">
          <CourseHeader 
            title="Case Studies" 
            subtitle="Real-world examples of UDL implementation in early childhood settings"
            progress={70}
          />
          
          <div className="glass-card p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Applying UDL in Practice</h2>
            <p>
              These case studies illustrate how early childhood educators have implemented Universal Design for Learning 
              principles to create inclusive environments. Each case demonstrates how addressing barriers for one child 
              often creates better learning environments for all children.
            </p>
            <p className="mt-2">
              As you review these examples, consider how you might apply similar strategies in your own setting.
            </p>
          </div>
          
          <div className="glass-card p-6 animate-fade-in">
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="md:w-1/3">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="rounded-lg shadow-md w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4 text-kentucky-blue">{study.title}</h3>
                <div className="bg-blue-50 p-4 rounded-md mb-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Background</h4>
                  <p>{study.background}</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-md">
                  <h4 className="font-semibold text-amber-800 mb-2">Challenge</h4>
                  <p>{study.challenge}</p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-3">UDL Solution</h4>
              <ul className="list-disc pl-6 space-y-2">
                {study.solution.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-3">UDL Principles Applied</h4>
              <ul className="list-disc pl-6 space-y-2 text-kentucky-blue">
                {study.udlPrinciples.map((principle, index) => (
                  <li key={index}>{principle}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-md mb-6">
              <h4 className="font-semibold text-green-800 mb-2">Outcomes</h4>
              <p>{study.outcomes}</p>
            </div>
            
            <div className="flex justify-between mt-6">
              <Button 
                onClick={handlePrevious} 
                variant="outline" 
                className={cn(
                  "gap-2",
                  currentCase === 0 && "invisible"
                )}
              >
                <ArrowLeft size={16} />
                Previous Case
              </Button>
              
              <div className="flex items-center gap-2">
                {caseStudies.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setCurrentCase(index)}
                    className={cn(
                      "w-2.5 h-2.5 rounded-full transition-all",
                      index === currentCase 
                        ? "bg-kentucky-blue w-6" 
                        : "bg-gray-300 hover:bg-gray-400"
                    )}
                  />
                ))}
              </div>
              
              <Button 
                onClick={handleNext} 
                variant="outline" 
                className={cn(
                  "gap-2",
                  currentCase === caseStudies.length - 1 && "invisible"
                )}
              >
                Next Case
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
