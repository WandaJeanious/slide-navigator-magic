
import CourseHeader from "@/components/CourseHeader";
import CourseNav from "@/components/CourseNav";
import SlideContent from "@/components/SlideContent";

const Engagement = () => {
  const slides = [
    {
      title: "Engagement: The WHY of Learning",
      content: (
        <div className="space-y-4">
          <p>
            Engagement refers to the ways we stimulate interest and motivation for learning. 
            It represents the "why" of learning.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <img 
              src="public/lovable-uploads/5a1a70b4-2f8a-437c-861c-23e2132cad3f.png" 
              alt="The WHY of learning brain diagram" 
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
      title: "Examples of Multiple Means of Engagement",
      content: (
        <div className="space-y-4">
          <p>In early childhood settings, we can provide multiple means of engagement by:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Offering choices in learning activities and materials</li>
            <li>Connecting learning to children's interests and cultural backgrounds</li>
            <li>Providing adjustable levels of challenge</li>
            <li>Creating opportunities for both collaboration and independent work</li>
            <li>Developing classroom routines that provide predictability while allowing flexibility</li>
            <li>Teaching self-regulation strategies appropriate for young children</li>
          </ul>
        </div>
      ),
      image: "public/lovable-uploads/f6d73fa7-91a9-4d12-bc97-7040b1f81b9f.png"
    },
    {
      title: "Engagement in Practice",
      content: (
        <div className="space-y-4">
          <div className="mb-4">
            <h4 className="font-bold mb-1">✓ Offer meaningful choices that connect to children's interests</h4>
            <p>
              Provide options that allow children to follow their interests while still achieving learning goals.
            </p>
          </div>
          
          <div className="px-6 py-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="font-semibold mb-2">Example:</h4>
            <p>
              During center time, offer multiple ways to explore a concept:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>For a unit on measurement, provide rulers, balance scales, measuring cups, and non-standard measuring tools (blocks, paper clips)</li>
              <li>Allow children to choose which materials to use and what to measure</li>
              <li>Provide documentation tools that match different abilities (clipboards with picture options, recording sheets, voice recorders)</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Supporting Self-Regulation in Young Children",
      content: (
        <div className="space-y-4">
          <p>
            An important aspect of engagement is supporting children's developing ability to self-regulate. 
            In UDL, we provide multiple means for developing these skills:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Environmental Supports</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Quiet spaces for calming</li>
                <li>Visual schedules and timers</li>
                <li>Clear, consistent boundaries</li>
                <li>Predictable routines</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Skill Development</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Naming and discussing emotions</li>
                <li>Breathing techniques</li>
                <li>Problem-solving strategies</li>
                <li>Transition warnings and support</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      image: "public/lovable-uploads/83918765-a053-4971-9148-9a7c4479a940.png"
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
            title="Engagement" 
            subtitle="Stimulating interest and motivation for learning in all children"
            progress={60}
          />
          
          <SlideContent slides={slides} />
        </div>
      </div>
    </div>
  );
};

export default Engagement;
