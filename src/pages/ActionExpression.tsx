
import CourseHeader from "@/components/CourseHeader";
import CourseNav from "@/components/CourseNav";
import SlideContent from "@/components/SlideContent";

const ActionExpression = () => {
  const slides = [
    {
      title: "Examples of Action and Expression in an ECE Environment",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide whole group support.</li>
            <li>Allow for multiple ways to correctly respond to the same prompt – verbal responses, drawing, use of communication board, etc.</li>
            <li>Arrange the environment to accommodate all children's physical needs (e.g., ramp access to areas of the program)</li>
            <li>Arrange furniture so there is enough space for all children (e.g., wide space between shelves, room for a walker at tables).</li>
            <li>Frequent check-ins with children to ensure they understand directions or need help with a task.</li>
          </ul>
        </div>
      ),
      image: "public/lovable-uploads/e7f7d9b6-c4ca-4b8c-9af3-10200f649c10.png"
    },
    {
      title: "Action and Expression: The HOW of Learning",
      content: (
        <div className="space-y-4">
          <p>
            Action and Expression refers to how learners navigate a learning environment and express what they know. 
            It represents the "how" of learning.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <img 
              src="public/lovable-uploads/c90cba16-8c23-4470-9ea1-d7f9cc39abfb.png" 
              alt="The HOW of learning brain diagram" 
              className="mx-auto h-[200px] mb-2"
            />
            <p className="text-center text-xs text-gray-600">
              Image Credit: https://www.cast.org/impact/universal-design-for-learning-udl
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Action and Expression in Practice",
      content: (
        <div className="space-y-4">
          <div className="mb-4">
            <h4 className="font-bold mb-1">✓ Allow for multiple methods and complexity in responding</h4>
            <p>
              Give children multiple ways to show their answer if you want to evaluate what they know.
            </p>
          </div>
          
          <div className="px-6 py-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="font-semibold mb-2">Example:</h4>
            <p>
              In a preschool classroom, some children may point, some may give a one-word answer, and others 
              may answer in a complete sentence and tell you everything they know about it!
            </p>
          </div>
          
          <div className="mt-4">
            <h4 className="font-bold mb-2">Examples and Relation to UDL:</h4>
            <p>
              Kelly observed Chris, a boy with a developmental delay, working hard to solve a number puzzle 
              during free playtime. Kelly asked him how he was trying to figure out how to put the pieces 
              together. When Chris explained his strategy, Kelly said, "I can see you're working very hard 
              and your strategy seems very helpful." Kelly invited Chris to share his strategy with his peers 
              during circle time.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "What Should Early Childhood Professionals NOT Do?",
      content: (
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <blockquote className="border-l-4 border-kentucky-blue pl-4 italic text-gray-700">
                "Don't assume you have all the answers. ASK. Most families who have children with unique 
                abilities and needs want you to ask. We want you to collaborate and to make your job easier 
                and our child's time with you more enjoyable. I ask every person who I think may know of 
                resources because the worst they're going to say is no and I am that much wiser where to go next time."
              </blockquote>
            </div>
            <div className="md:w-1/2">
              <img 
                src="public/lovable-uploads/2fcf07cd-2879-4337-9339-f0ffef2633c2.png" 
                alt="Child with supportive equipment" 
                className="rounded-lg shadow-md max-h-[250px] mx-auto"
              />
            </div>
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
            title="Action and Expression" 
            subtitle="Providing multiple means for children to navigate learning environments and demonstrate knowledge"
            progress={40}
          />
          
          <SlideContent slides={slides} />
        </div>
      </div>
    </div>
  );
};

export default ActionExpression;
