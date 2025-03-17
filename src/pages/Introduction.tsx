import CourseHeader from "@/components/CourseHeader";
import CourseNav from "@/components/CourseNav";
import SlideContent from "@/components/SlideContent";

const Introduction = () => {
  const slides = [
    {
      title: "What is Inclusion?",
      content: (
        <div>
          <p className="mb-4">
            Early childhood inclusion embodies the values, policies, and practices that support the right of every 
            infant and young child and their family, regardless of ability, to participate in a broad range of 
            activities and contexts as full members of families, communities, and society.
          </p>
          <p className="mb-4">
            The desired results of inclusive experiences for children with and without disabilities and their families include:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>A sense of belonging and membership</li>
            <li>Positive social relationships and friendships</li>
            <li>Development and learning to reach their full potential</li>
          </ul>
          <p>
            <em>- DEC/NAEYC (2009)</em>
          </p>
        </div>
      )
    },
    {
      title: "A Family Perspective on Childcare",
      content: (
        <div>
          <p className="mb-4">
            What advice would you have for child care providers about inclusion of children with special needs 
            into their classroom? Do you have any personal success stories or situations where a "do over" would 
            have been nice?
          </p>
          <blockquote className="border-l-4 border-kentucky-blue pl-4 italic text-gray-700 my-4">
            "Reaching out and making sure they are included is so important. Many times the efforts taken to 
            include a child with special needs are also helping those who do not or may be undiagnosed. Using 
            explicit instructions, writing things out, and repeating rules or expectations benefits an entire 
            classroom and not just the individual."
          </blockquote>
        </div>
      )
    },
    {
      title: "What Do We Think Of...",
      content: (
        <div>
          <p className="mb-4">
            When we think about inclusion in early childhood education, we often need to reflect on our own 
            perspectives and biases. Consider the following questions:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>What assumptions do we make about children with different abilities?</li>
            <li>How do our personal experiences shape our approach to inclusive practices?</li>
            <li>What fears or concerns might we have about implementation?</li>
          </ul>
          <p>
            Taking time to reflect on these questions helps us identify areas where we can grow professionally 
            and improve our inclusive practices.
          </p>
        </div>
      ),
      image: "/lovable-uploads/52dce011-67b0-4117-afb0-e3dc17eaf3c8.png"
    },
    {
      title: "Accessible vs Universal Design",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-bold mb-2">Accessible Design:</h4>
            <p>
              Accessible design specifically considers the needs of people with disabilities. It focuses on creating 
              products and environments that can be used independently by people with various disabilities. 
              Accessibility has been mandated through legislation like the Americans with Disabilities Act (ADA).
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Examples: Ramp access, door button access, Braille signage
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-2">Universal Design:</h4>
            <p>
              Universal Design is a broader concept that considers all people and populations. It creates products 
              and environments that benefit everyone, not just individuals with disabilities. Universal Design 
              considers human characteristics such as age, gender, stature, and native language.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Examples: Menus in multiple languages with pictures, height-adjusted (eye-level) enhancements for children
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="container max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/4">
          <CourseNav />
        </div>
        
        <div className="w-full lg:w-3/4">
          <CourseHeader 
            title="Introduction to Inclusive Practices" 
            subtitle="Understanding the fundamentals of inclusion in early childhood education"
            progress={10}
          />
          
          <SlideContent slides={slides} />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
