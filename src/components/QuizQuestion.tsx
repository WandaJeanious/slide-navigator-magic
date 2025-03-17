
import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface QuizQuestionData {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizQuestionProps {
  data: QuizQuestionData;
  onAnswer: (questionId: number, isCorrect: boolean) => void;
}

export const QuizQuestion = ({ data, onAnswer }: QuizQuestionProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  
  const handleSelectOption = (index: number) => {
    if (selectedOption !== null) return; // Already answered
    
    setSelectedOption(index);
    setShowExplanation(true);
    onAnswer(data.id, index === data.correctAnswer);
  };
  
  return (
    <div className="glass-card p-6 mb-8 animate-fade-in">
      <h3 className="text-xl font-semibold mb-4">{data.question}</h3>
      
      <div className="space-y-3">
        {data.options.map((option, index) => (
          <button
            key={index}
            className={cn(
              "w-full text-left p-4 rounded-md border transition-all flex justify-between items-center",
              selectedOption === null && "hover:border-kentucky-blue",
              selectedOption === index 
                ? index === data.correctAnswer 
                  ? "bg-green-50 border-green-400" 
                  : "bg-red-50 border-red-400"
                : selectedOption !== null && index === data.correctAnswer
                  ? "bg-green-50 border-green-400"
                  : "border-gray-200"
            )}
            onClick={() => handleSelectOption(index)}
            disabled={selectedOption !== null}
          >
            <span>{option}</span>
            {selectedOption !== null && (
              index === data.correctAnswer 
                ? <CheckCircle className="text-green-600" size={20} />
                : selectedOption === index
                  ? <XCircle className="text-red-600" size={20} />
                  : null
            )}
          </button>
        ))}
      </div>
      
      {showExplanation && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md animate-fade-in">
          <h4 className="font-medium text-blue-800 mb-1">Explanation:</h4>
          <p className="text-blue-700">{data.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default QuizQuestion;
