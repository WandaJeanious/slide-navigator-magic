
import CourseHeader from "@/components/CourseHeader";
import CourseNav from "@/components/CourseNav";
import SlideContent from "@/components/SlideContent";

const Representation = () => {
  const slides = [
    {
      title: "Examples of Representation in an ECE Environment",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <ul className="list-disc pl-6 space-y-2">
                <li>Verbal presentation (singing, talking)</li>
                <li>Hands-on learning</li>
                <li>Visual schedules</li>
                <li>Visual steps to tasks</li>
                <li>Showing the actual materials or tools students will use to complete a task</li>
                <li>Model steps for completing a task, while verbally describing the steps</li>
                <li>When presenting new vocabulary or concepts – state or read the word, pause, show an image, state the word, then define it</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc pl-6 space-y-2">
                <li>Repeat and restate key concepts in different ways so that everyone understands.</li>
                <li>Break instructions into smaller distinct steps.</li>
                <li>With multilingual children use primary language and English to present key words or concepts.</li>
                <li>Offer opportunities for children to share culturally relevant materials or pictures with the other children.</li>
                <li>Use signs and help children learn frequently used signs to facilitate communication.</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      image: "public/lovable-uploads/db4f23e4-87df-46ba-8d62-44f72d0100da.png"
    },
    {
      title: "Representation: The WHAT of Learning",
      content: (
        <div className="space-y-4">
          <p>
            Representation refers to how information is presented to learners. It represents the "what" of learning.
          </p>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <img 
              src="public/lovable-uploads/5a1a70b4-2f8a-437c-861c-23e2132cad3f.png" 
              alt="The WHAT of learning brain diagram" 
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
      title: "Representation in Practice",
      content: (
        <div className="space-y-4">
          <h4 className="font-bold mb-2">Key Strategies for Effective Representation:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Present materials with a variety of modes of access for diverse learners.</li>
            <li>Account for visual, tactile, auditory learning.</li>
            <li>Account for varying level(s) of challenge within one lesson/activity.</li>
          </ul>
          
          <div className="px-6 py-4 bg-gray-50 rounded-lg border border-gray-200 mt-4">
            <h4 className="font-semibold mb-2">Example Activity: Sorting balls by color</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <span className="font-medium">Modification:</span> Sorting balls into baskets (accounts for fine motor 
                variances), finding 2 similarly colored balls when prompted
              </li>
              <li>
                <span className="font-medium">Stretch:</span> Sorting by color into a sorting tunnel and then 
                naming/matching the color with a flashcard or a different object in the room.
              </li>
            </ul>
          </div>
        </div>
      ),
      image: "public/lovable-uploads/aa1266f5-b006-4ae5-ac72-a351e583309b.png"
    },
    {
      title: "What Can UDL Look Like in an ECE Classroom?",
      content: (
        <div className="space-y-4">
          <p className="mb-4">
            Here are some examples of how representation can be implemented in early childhood classrooms:
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <img 
                src="public/lovable-uploads/83918765-a053-4971-9148-9a7c4479a940.png" 
                alt="Classroom label example" 
                className="rounded-lg shadow-md mb-2 h-32 object-cover w-full"
              />
              <p className="text-sm text-center">Multilingual labels for areas</p>
            </div>
            <div>
              <img 
                src="public/lovable-uploads/952438bd-b54a-48b1-aff2-7af3e26a6b34.png" 
                alt="Visual schedule example" 
                className="rounded-lg shadow-md mb-2 h-32 object-cover w-full"
              />
              <p className="text-sm text-center">Visual schedules and routines</p>
            </div>
            <div>
              <img 
                src="public/lovable-uploads/b00b9721-9486-4b64-983e-36ee22fddd44.png" 
                alt="Classroom labels with images" 
                className="rounded-lg shadow-md mb-2 h-32 object-cover w-full"
              />
              <p className="text-sm text-center">Center labels with images</p>
            </div>
            <div>
              <img 
                src="public/lovable-uploads/f3e44582-f95c-4496-978c-5645b36cdbd3.png" 
                alt="Handwashing instructions" 
                className="rounded-lg shadow-md mb-2 h-32 object-cover w-full"
              />
              <p className="text-sm text-center">Visual step-by-step instructions</p>
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
            title="Representation" 
            subtitle="Providing multiple means of representing information to learners"
            progress={55}
          />
          
          <SlideContent slides={slides} />
        </div>
      </div>
    </div>
  );
};

export default Representation;
