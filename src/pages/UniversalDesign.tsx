
import CourseHeader from "@/components/CourseHeader";
import CourseNav from "@/components/CourseNav";
import SlideContent from "@/components/SlideContent";
import VideoEmbed from "@/components/VideoEmbed";

const UniversalDesign = () => {
  const slides = [
    {
      title: "What is Universal Design?",
      content: (
        <div className="space-y-4">
          <p>
            Universal Design is the design of products and their environments to be useable by all people, 
            to the greatest extent possible, without the need for adaptation or specialized design.
          </p>
          <p className="italic">- Mace (1985)</p>
          <div className="mt-4">
            <h4 className="font-semibold">Who benefits from Universal Design?</h4>
            <p className="font-bold text-kentucky-blue">Everyone!</p>
            <p>
              What is "essential for some" is always "good for all".
            </p>
            <p className="italic">- Meyer, Rose & Gordon (2014)</p>
          </div>
        </div>
      ),
      image: "public/lovable-uploads/3e1550e5-f7ed-42bc-9e20-30c3eb9074fe.png"
    },
    {
      title: "What is Universal Design for Learning (UDL)?",
      content: (
        <div className="space-y-4">
          <p>
            Universal Design for Learning (UDL) is a framework to improve and optimize teaching and learning 
            for all people based on scientific insights into how humans learn.
          </p>
          <div className="space-y-2 mt-4">
            <p><strong>The "WHY" of Learning:</strong> Engagement</p>
            <p><strong>The "WHAT" of Learning:</strong> Representation</p>
            <p><strong>The "HOW" of Learning:</strong> Action and Expression</p>
          </div>
          <div className="mt-4">
            <VideoEmbed title="Introduction to Universal Design for Learning" placeholder={true} />
          </div>
        </div>
      )
    },
    {
      title: "What Does UDL Mean for an Early Childhood Classroom?",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Considering the needs, preferences and learning style of each child (and the teachers!)</li>
            <li>Allowing for access and engagement with each area that children have access to (classrooms, playgrounds, gross motor areas, bathrooms, etc.)</li>
            <li>Representation, the "what" of learning, is key – get on the children's level and see what they see!</li>
            <li>Working with families to gain a deeper understanding of each child</li>
            <li>May call for reevaluation of curriculum, environments and interactions with teachers, children and families.</li>
          </ul>
        </div>
      ),
      image: "public/lovable-uploads/d4cf8365-fb7d-467a-b98c-e6d79ba1fac7.png"
    },
    {
      title: "Universal Design vs Universal Design for Learning",
      content: (
        <div>
          <div className="mb-6">
            <img 
              src="public/lovable-uploads/2b19ed54-d695-4078-a779-c9923150a62d.png" 
              alt="UDL vs UD Venn Diagram" 
              className="mx-auto max-h-[300px]"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold mb-2">Universal Design</h4>
              <p>Supports the access to Early Childhood environments for children and families</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Universal Design for Learning</h4>
              <p>Relates to materials and interactions with materials for children and families</p>
            </div>
            <div className="col-span-2 bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-bold mb-2 text-center">Accessibility and Inclusion</h4>
              <p className="text-center">for all children & families</p>
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
            title="Universal Design for Learning" 
            subtitle="Creating inclusive learning environments for all children"
            progress={25}
          />
          
          <SlideContent slides={slides} />
        </div>
      </div>
    </div>
  );
};

export default UniversalDesign;
