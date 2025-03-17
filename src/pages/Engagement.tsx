
import CourseHeader from "@/components/CourseHeader";
import CourseNav from "@/components/CourseNav";
import SlideContent from "@/components/SlideContent";

const Engagement = () => {
  const slides = [
    {
      title: "Examples of Engagement in an ECE Environment",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide similar materials on varying skill levels.</li>
            <li>Assist children in locating materials that would be interesting to them.</li>
            <li>Provide opportunities for choices</li>
            <li>Materials should be in easy to access and open containers for children to play with.</li>
            <li>Provide materials relevant to children and community.</li>
            <li>Provide opportunities to move and wiggle.</li>
            <li>Check schedule to ensure there is a good balance between types of activities</li>
          </ul>
        </div>
      ),
      image: "public/lovable-uploads/da1d1e68-8ea9-449f-bed3-bfef82eaac44.png"
    },
    {
      title: "Engagement: The WHY of Learning",
      content: (
        <div className="space-y-4">
          <p>
            Engagement focuses on the affective networks of the brain and represents the "why" of learning. 
            It's about stimulating interest and motivation for learning.
          </p>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <img 
              src="public/lovable-uploads/7333596f-7ad6-43ae-8ffd-62afd2b6d330.png" 
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
      title: "Ms. Josie's Classroom",
      content: (
        <div className="space-y-4">
          <h4 className="font-bold mb-2">Transportation Topic</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Sings "Wheels on the Bus" throughout the day
              <ul className="list-disc pl-6 mt-1">
                <li>Uses visual cues, signs and some Spanish words</li>
              </ul>
            </li>
            <li>
              Story of the week is "Away We Go!"
              <ul className="list-disc pl-6 mt-1">
                <li>Shows illustrations and points out key words in sign or Spanish</li>
                <li>Explains the meaning of the key words</li>
              </ul>
            </li>
            <li>
              Hands-On Experiences throughout the Classroom
              <ul className="list-disc pl-6 mt-1">
                <li>Vehicles in the block area</li>
                <li>Cardboard boxes in dramatic play area</li>
                <li>Transportation books in the library</li>
                <li>Vehicles in the sensory table with a variety of other objects during the week</li>
              </ul>
            </li>
            <li>Activities are provided for families to further the topic at home</li>
          </ul>
        </div>
      ),
      image: "public/lovable-uploads/f6d73fa7-91a9-4d12-bc97-7040b1f81b9f.png"
    },
    {
      title: "Strategies for Improving Engagement",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium">✓ Stimulate interest and create motivated learners</span>
            </li>
            <li>
              <span className="font-medium">✓ Safe exploration of materials</span> based on learning style, developmental ability and preferred method of engagement
            </li>
            <li>
              <span className="font-medium">✓ Motivation = longer engagement</span> and persistent learning
            </li>
            <li>
              <span className="font-medium">✓ Make meaningful connections</span> with the materials
            </li>
            <li>
              <span className="font-medium">✓ Activities that are too difficult or too easy</span> are not setting the child up for success, engagement, or to be motivated
            </li>
          </ul>
          
          <div className="px-6 py-4 bg-gray-50 rounded-lg border border-gray-200 mt-4">
            <p>
              Think about your own classroom or environment: What are you already doing that supports engagement? 
              What "low-tech" options could benefit your students? What resources do you need to make those options available?
            </p>
          </div>
        </div>
      ),
      image: "public/lovable-uploads/f995ac9d-2ada-4c59-b06e-2003311ada13.png"
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
            subtitle="Stimulating interest and motivation in learning"
            progress={70}
          />
          
          <SlideContent slides={slides} />
        </div>
      </div>
    </div>
  );
};

export default Engagement;
