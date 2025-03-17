
import CourseHeader from "@/components/CourseHeader";
import CourseNav from "@/components/CourseNav";
import VideoEmbed from "@/components/VideoEmbed";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Download, BookOpen } from "lucide-react";

const Resources = () => {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/4">
          <CourseNav />
        </div>
        
        <div className="w-full lg:w-3/4">
          <CourseHeader 
            title="Resources" 
            subtitle="Additional materials to support your inclusive practices"
            progress={80}
          />
          
          <Tabs defaultValue="videos" className="w-full mb-8">
            <TabsList className="w-full justify-start mb-6">
              <TabsTrigger value="videos" className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-video"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>
                Videos
              </TabsTrigger>
              <TabsTrigger value="downloadable" className="flex items-center gap-2">
                <Download size={16} />
                Downloadable Resources
              </TabsTrigger>
              <TabsTrigger value="websites" className="flex items-center gap-2">
                <ExternalLink size={16} />
                Websites
              </TabsTrigger>
              <TabsTrigger value="books" className="flex items-center gap-2">
                <BookOpen size={16} />
                Books
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="videos" className="animate-fade-in">
              <div className="glass-card p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Recommended Videos</h3>
                <p className="mb-6">
                  These videos provide additional insights and practical examples of UDL implementation in early childhood settings.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <VideoEmbed title="UDL in Early Childhood Education" placeholder={true} />
                    <h4 className="font-semibold mt-3">UDL in Early Childhood Education</h4>
                    <p className="text-sm text-muted-foreground">An overview of UDL principles for early learners</p>
                  </div>
                  <div>
                    <VideoEmbed title="Creating Inclusive Environments" placeholder={true} />
                    <h4 className="font-semibold mt-3">Creating Inclusive Environments</h4>
                    <p className="text-sm text-muted-foreground">Practical tips for setting up inclusive classrooms</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <VideoEmbed title="Supporting Diverse Learners" placeholder={true} />
                    <h4 className="font-semibold mt-3">Supporting Diverse Learners</h4>
                    <p className="text-sm text-muted-foreground">Strategies for meeting the needs of all children</p>
                  </div>
                  <div>
                    <VideoEmbed title="Family Engagement and UDL" placeholder={true} />
                    <h4 className="font-semibold mt-3">Family Engagement and UDL</h4>
                    <p className="text-sm text-muted-foreground">How to partner with families in inclusive settings</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="downloadable" className="animate-fade-in">
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-4">Downloadable Resources</h3>
                <p className="mb-6">
                  Print these resources to use in your classroom or share with colleagues.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-md hover:bg-gray-50 transition-colors">
                    <div>
                      <h4 className="font-semibold">UDL Classroom Checklist</h4>
                      <p className="text-sm text-muted-foreground">A printable checklist to evaluate your classroom environment</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download size={16} className="mr-2" />
                      Download PDF
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-md hover:bg-gray-50 transition-colors">
                    <div>
                      <h4 className="font-semibold">Inclusive Lesson Planning Template</h4>
                      <p className="text-sm text-muted-foreground">A template for creating lessons with UDL principles</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download size={16} className="mr-2" />
                      Download PDF
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-md hover:bg-gray-50 transition-colors">
                    <div>
                      <h4 className="font-semibold">Visual Supports Collection</h4>
                      <p className="text-sm text-muted-foreground">Printable visual supports for classroom use</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download size={16} className="mr-2" />
                      Download ZIP
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-md hover:bg-gray-50 transition-colors">
                    <div>
                      <h4 className="font-semibold">Family Communication Templates</h4>
                      <p className="text-sm text-muted-foreground">Customizable templates for communicating with families</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download size={16} className="mr-2" />
                      Download DOCX
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="websites" className="animate-fade-in">
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-4">Recommended Websites</h3>
                <p className="mb-6">
                  These websites offer valuable resources, research, and support for implementing UDL in early childhood settings.
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 border rounded-md hover:bg-gray-50 transition-colors">
                    <h4 className="font-semibold flex items-center">
                      CAST: Center for Applied Special Technology
                      <ExternalLink size={16} className="ml-2 text-muted-foreground" />
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">www.cast.org</p>
                    <p>The original developers of the UDL framework, offering comprehensive resources and research.</p>
                  </div>
                  
                  <div className="p-4 border rounded-md hover:bg-gray-50 transition-colors">
                    <h4 className="font-semibold flex items-center">
                      National Center on Universal Design for Learning
                      <ExternalLink size={16} className="ml-2 text-muted-foreground" />
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">www.udlcenter.org</p>
                    <p>Provides guidelines, examples, and research supporting UDL implementation.</p>
                  </div>
                  
                  <div className="p-4 border rounded-md hover:bg-gray-50 transition-colors">
                    <h4 className="font-semibold flex items-center">
                      NAEYC: National Association for the Education of Young Children
                      <ExternalLink size={16} className="ml-2 text-muted-foreground" />
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">www.naeyc.org</p>
                    <p>Resources on developmentally appropriate practices and inclusion for young children.</p>
                  </div>
                  
                  <div className="p-4 border rounded-md hover:bg-gray-50 transition-colors">
                    <h4 className="font-semibold flex items-center">
                      Head Start Early Childhood Learning & Knowledge Center
                      <ExternalLink size={16} className="ml-2 text-muted-foreground" />
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">eclkc.ohs.acf.hhs.gov</p>
                    <p>Comprehensive resources for early childhood professionals, including inclusion practices.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="books" className="animate-fade-in">
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-4">Recommended Books</h3>
                <p className="mb-6">
                  These books provide in-depth knowledge about UDL and inclusion in early childhood settings.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 border rounded-md hover:bg-gray-50 transition-colors h-full">
                    <h4 className="font-semibold">Universal Design for Learning in the Early Childhood Classroom</h4>
                    <p className="text-sm text-muted-foreground mb-2">By Susan Liddicoat & Kathy Brodie</p>
                    <p className="mb-2">A practical guide to implementing UDL principles in early childhood settings.</p>
                    <Button variant="link" className="p-0">
                      <ExternalLink size={14} className="mr-1" />
                      View on Amazon
                    </Button>
                  </div>
                  
                  <div className="p-4 border rounded-md hover:bg-gray-50 transition-colors h-full">
                    <h4 className="font-semibold">Including One, Including All</h4>
                    <p className="text-sm text-muted-foreground mb-2">By Leslie Roffman & Todd Wanerman</p>
                    <p className="mb-2">A practical guide to designing inclusive preschool environments.</p>
                    <Button variant="link" className="p-0">
                      <ExternalLink size={14} className="mr-1" />
                      View on Amazon
                    </Button>
                  </div>
                  
                  <div className="p-4 border rounded-md hover:bg-gray-50 transition-colors h-full">
                    <h4 className="font-semibold">Universal Design for Learning in the Classroom</h4>
                    <p className="text-sm text-muted-foreground mb-2">By Tracey E. Hall, Anne Meyer & David H. Rose</p>
                    <p className="mb-2">Practical applications of UDL across education settings.</p>
                    <Button variant="link" className="p-0">
                      <ExternalLink size={14} className="mr-1" />
                      View on Amazon
                    </Button>
                  </div>
                  
                  <div className="p-4 border rounded-md hover:bg-gray-50 transition-colors h-full">
                    <h4 className="font-semibold">The Inclusive Classroom: Strategies for Effective Differentiated Instruction</h4>
                    <p className="text-sm text-muted-foreground mb-2">By Margo A. Mastropieri & Thomas E. Scruggs</p>
                    <p className="mb-2">Research-based strategies for creating inclusive learning environments.</p>
                    <Button variant="link" className="p-0">
                      <ExternalLink size={14} className="mr-1" />
                      View on Amazon
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Resources;
