import CourseHeader from "@/components/CourseHeader";
import CourseNav from "@/components/CourseNav";
import SlideContent from "@/components/SlideContent";
import VideoEmbed from "@/components/VideoEmbed";

const Representation = () => {
  const slides = [
    {
      title: "Representation: The WHAT of Learning",
      content: (
        <div className="space-y-4">
          <p>
            Representation refers to the ways we present information and content to learners. 
            It represents the "what" of learning.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <img 
              src="/lovable-uploads/fe88df29-4959-46ed-82f0-425be0885dae.png" 
              alt="The WHAT of learning brain diagram" 
              className="mx-auto h-[200px] mb-2"
            />
            <p className="text-center text-xs text-gray-600">
              Image Credit: https://www.cast.org/impact/universal-design-for-learning-udl
            </p>
          </div>
          <div className="mt-2">
            <VideoEmbed title="UDL: Multiple Means of Representation" placeholder={true} />
          </div>
        </div>
      )
    },
    {
      title: "Examples of Multiple Means of Representation",
      content: (
        <div className="space-y-4">
          <p>In early childhood settings, we can provide multiple means of representation by:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Using visual supports alongside verbal instructions</li>
            <li>Offering information through multiple sensory channels (visual, auditory, tactile)</li>
            <li>Providing options for language learning (pictures, objects, demonstrations)</li>
            <li>Breaking down complex concepts into manageable parts</li>
            <li>Making connections to children's prior knowledge and experiences</li>
            <li>Using diverse examples that represent all children in the classroom</li>
          </ul>
        </div>
      ),
      image: "/lovable-uploads/db4f23e4-87df-46ba-8d62-44f72d0100da.png"
    },
    {
      title: "Representation in Practice",
      content: (
        <div className="space-y-4">
          <div className="mb-4">
            <h4 className="font-bold mb-1">✓ Provide multiple formats when presenting information</h4>
            <p>
              Offer visual, auditory, and tactile experiences to support learning.
            </p>
          </div>
          
          <div className="px-6 py-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="font-semibold mb-2">Example:</h4>
            <p>
              When teaching about the life cycle of a butterfly, provide:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Picture books about butterflies</li>
              <li>Real caterpillars to observe</li>
              <li>A song about butterfly life cycles</li>
              <li>A movement activity where children act out the stages</li>
              <li>Tactile materials representing each stage</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Representation in Inclusive Environments",
      content: (
        <div className="space-y-4">
          <p>
            When we provide multiple means of representation, we recognize that children access and process 
            information in different ways. This is particularly important for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Children learning English as an additional language</li>
            <li>Children with sensory processing differences</li>
            <li>Children with different learning preferences</li>
            <li>Children with varying levels of background knowledge</li>
          </ul>
          <p className="mt-2">
            By providing options for perception, language, and comprehension, we create learning experiences 
            that are accessible to all children from the start, rather than modifying after the fact.
          </p>
        </div>
      ),
      image: "/lovable-uploads/aa1266f5-b006-4ae5-ac72-a351e583309b.png"
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
            subtitle="Providing multiple ways for children to access and understand information"
            progress={55}
          />
          
          <SlideContent slides={slides} />
        </div>
      </div>
    </div>
  );
};

export default Representation;
