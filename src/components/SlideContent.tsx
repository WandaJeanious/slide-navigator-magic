
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface SlideContentProps {
  slides: {
    title: string;
    content: React.ReactNode;
    image?: string;
  }[];
}

export const SlideContent = ({ slides }: SlideContentProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  
  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-lg">
        <div 
          className="slide-transition flex" 
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className="min-w-full glass-card p-8"
            >
              <h3 className="text-2xl font-semibold mb-6 text-kentucky-blue">{slide.title}</h3>
              <div className="flex flex-col md:flex-row gap-8">
                <div className={cn("flex-1", slide.image ? "md:w-1/2" : "w-full")}>
                  {slide.content}
                </div>
                {slide.image && (
                  <div className="md:w-1/2 flex justify-center items-center">
                    <img 
                      src={slide.image.replace('public/', '/')} 
                      alt={slide.title} 
                      className="rounded-lg shadow-md interactive-image max-h-80 object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-between mt-4">
          <button 
            onClick={prevSlide} 
            disabled={currentSlide === 0}
            className={cn(
              "p-2 rounded-full bg-kentucky-blue text-white",
              currentSlide === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-kentucky-darkBlue"
            )}
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all",
                  index === currentSlide 
                    ? "bg-kentucky-blue w-6" 
                    : "bg-gray-300 hover:bg-gray-400"
                )}
              />
            ))}
          </div>
          <button 
            onClick={nextSlide} 
            disabled={currentSlide === slides.length - 1}
            className={cn(
              "p-2 rounded-full bg-kentucky-blue text-white",
              currentSlide === slides.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-kentucky-darkBlue"
            )}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideContent;
