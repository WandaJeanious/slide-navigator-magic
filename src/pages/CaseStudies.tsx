
import CourseHeader from "@/components/CourseHeader";
import CourseNav from "@/components/CourseNav";
import SlideContent from "@/components/SlideContent";
import VideoEmbed from "@/components/VideoEmbed";

const CaseStudies = () => {
  const slides = [
    {
      title: "Ms. Josie's Classroom: A Case Study",
      content: (
        <div className="space-y-4">
          <p>
            Ms. Josie demonstrates effective implementation of UDL principles in her early childhood classroom. 
            Let's look at how she integrates different aspects of UDL:
          </p>
          
          <div className="px-6 py-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="font-semibold mb-2">Transportation Topic Implementation:</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Selects relevant lifestyles and experiences to weave into planning</li>
              <li>Included familiar vehicles in books, pictures, puzzles, dramatic play area, and a computer game about construction</li>
              <li>Used large group and small group time to talk about items that the vehicles and equipment haul</li>
              <li>Explored math concepts with ramps and vehicles</li>
              <li>Encouraged language by reading stories</li>
              <li>Supported engagement at home by communicating with families</li>
            </ul>
          </div>
          
          <p>
            Ms. Josie accounts for variances in children's physical, emotional, cognitive and verbal differences 
            through her teaching approach and classroom design.
          </p>
        </div>
      ),
      image: "public/lovable-uploads/f8c5bffc-a85c-48ea-9278-1fe5882469b7.png"
    },
    {
      title: "Case Study: Support for Communication",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
            <h4 className="font-semibold mb-2">Example:</h4>
            <p>
              Amena showed Jamil, the helper of the day, how to use picture symbols of available snacks to help Andy, 
              a boy with a communication difficulty, choose his snack. As Amena went around the table verbally asking 
              each child to make a choice between two snacks, she used two picture cards to help Andy make his choice.
            </p>
          </div>
          
          <h4 className="font-bold mb-2">Key UDL Principles Demonstrated:</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Providing multiple means of representation (verbal and visual)</li>
            <li>Supporting communication for all children</li>
            <li>Including peers in the support process</li>
            <li>Maintaining the same activity (snack choice) while accommodating individual needs</li>
          </ul>
          
          <p className="mt-4">
            This approach doesn't single out the child with communication difficulties, but rather enhances 
            the experience for everyone while ensuring all children can participate successfully.
          </p>
        </div>
      ),
      image: "public/lovable-uploads/2a2f503e-562a-46d2-a485-5f5b6c988021.png"
    },
    {
      title: "Case Study: Adaptations of Space and Materials",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
            <h4 className="font-semibold mb-2">Example:</h4>
            <p>
              Preschool teacher Kelly saw Tara, a 4-year-old child with cerebral palsy, use her walker to walk 
              from the block corner toward the art area during free playtime. Kelly intentionally prompted Tara's 
              peers at the block corner to clear the alley next to the corner by removing some toys so that Tara 
              could independently gain access to the space.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <img 
                src="public/lovable-uploads/4f415182-ba90-4ea7-984f-371e95c5204c.png" 
                alt="Children's tricycles with accommodations" 
                className="rounded-lg shadow-md h-40 object-cover w-full"
              />
            </div>
            <div>
              <img 
                src="public/lovable-uploads/fe88df29-4959-46ed-82f0-425be0885dae.png" 
                alt="Child using adapted tricycle" 
                className="rounded-lg shadow-md h-40 object-cover w-full"
              />
            </div>
          </div>
          
          <h4 className="font-bold mt-4 mb-2">Key UDL Principles Demonstrated:</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Adaptations of space to ensure accessibility</li>
            <li>Peer involvement in creating inclusive environments</li>
            <li>Supporting independence</li>
            <li>Proactive rather than reactive approach to inclusion</li>
          </ul>
        </div>
      )
    },
    {
      title: "Family Perspective: Assistive Technology",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
            <h4 className="font-semibold mb-2">Family Testimonial:</h4>
            <p className="italic">
              "We have borrowed a Leckey stander and a wedge for positioning. We used the stander daily to help 
              with weight bearing through his legs. We were waiting for one to come from first steps and having 
              access to one within a week of requesting was amazing and let us get him the proper tools for 
              development without any wait time."
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold mb-2">Benefits of Assistive Technology:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Can be brought in by a family or a professional</li>
                <li>Can be high or low tech</li>
                <li>Can be for a specific child only OR sometimes for all children</li>
              </ul>
            </div>
            <div>
              <img 
                src="public/lovable-uploads/ab54f918-feb6-4f1d-b528-417eacb371b5.png" 
                alt="Child with assistive technology" 
                className="rounded-lg shadow-md h-40 object-cover w-full"
              />
            </div>
          </div>
          
          <div className="mt-4">
            <VideoEmbed title="Assistive Technology and Early Literacy" placeholder={true} />
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
            title="Case Studies" 
            subtitle="Real-world examples of UDL implementation in early childhood settings"
            progress={85}
          />
          
          <SlideContent slides={slides} />
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
