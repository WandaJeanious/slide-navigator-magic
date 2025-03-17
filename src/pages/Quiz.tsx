
import { useState } from "react";
import CourseHeader from "@/components/CourseHeader";
import CourseNav from "@/components/CourseNav";
import QuizQuestion, { QuizQuestionData } from "@/components/QuizQuestion";
import { Button } from "@/components/ui/button";
import { Confetti } from "@/components/Confetti";
import { Check, RefreshCw } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const quizQuestions: QuizQuestionData[] = [
  {
    id: 1,
    question: "What is Universal Design for Learning (UDL)?",
    options: [
      "A framework exclusively for special education classrooms",
      "A framework to improve and optimize teaching and learning for all people",
      "A set of mandatory government regulations for schools",
      "A design approach limited to physical classroom spaces"
    ],
    correctAnswer: 1,
    explanation: "Universal Design for Learning (UDL) is a framework to improve and optimize teaching and learning for all people based on scientific insights into how humans learn, not just for special education classrooms."
  },
  {
    id: 2,
    question: "Which of the following is NOT one of the three primary principles of UDL?",
    options: [
      "Multiple means of engagement",
      "Multiple means of representation",
      "Multiple means of action and expression",
      "Multiple means of assessment"
    ],
    correctAnswer: 3,
    explanation: "The three primary principles of UDL are: multiple means of engagement (the 'why' of learning), multiple means of representation (the 'what' of learning), and multiple means of action and expression (the 'how' of learning). 'Multiple means of assessment' is not one of the primary UDL principles."
  },
  {
    id: 3,
    question: "How does Universal Design differ from Accessible Design?",
    options: [
      "Universal Design is only for physical spaces, while Accessible Design is for learning",
      "Universal Design considers all people, while Accessible Design specifically focuses on people with disabilities",
      "Universal Design is more expensive than Accessible Design",
      "There is no difference; they are different terms for the same concept"
    ],
    correctAnswer: 1,
    explanation: "Universal Design creates products and environments that benefit everyone, considering all people and populations. Accessible Design specifically considers the needs of people with disabilities and focuses on creating products and environments that can be used independently by people with various disabilities."
  },
  {
    id: 4,
    question: "Which of the following is an example of providing multiple means of action and expression in an early childhood classroom?",
    options: [
      "Playing the same song every day during circle time",
      "Requiring all children to demonstrate knowledge through verbal responses only",
      "Allowing children to respond through drawing, verbal responses, or using a communication board",
      "Having all learning centers use the same type of materials"
    ],
    correctAnswer: 2,
    explanation: "Allowing children to demonstrate their knowledge through multiple means - such as drawing, verbal responses, or using a communication board - is an example of providing multiple means of action and expression, as it gives children different ways to navigate the learning environment and express what they know."
  },
  {
    id: 5,
    question: "What is the primary goal of inclusive early childhood education?",
    options: [
      "To separate children by ability level for more efficient teaching",
      "To support the right of every child and family to participate as full members of the community",
      "To focus primarily on children with identified disabilities",
      "To reduce the workload of early childhood educators"
    ],
    correctAnswer: 1,
    explanation: "The primary goal of inclusive early childhood education is to support the right of every infant and young child and their family, regardless of ability, to participate in a broad range of activities and contexts as full members of families, communities, and society."
  }
];

const Quiz = () => {
  const [answers, setAnswers] = useState<{[key: number]: boolean}>({});
  const [showResults, setShowResults] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { toast } = useToast();
  
  const handleAnswer = (questionId: number, isCorrect: boolean) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: isCorrect
    }));
  };
  
  const calculateScore = () => {
    const correct = Object.values(answers).filter(Boolean).length;
    return {
      correct,
      total: quizQuestions.length,
      percentage: Math.round((correct / quizQuestions.length) * 100)
    };
  };
  
  const handleSubmit = () => {
    const answeredQuestions = Object.keys(answers).length;
    
    if (answeredQuestions < quizQuestions.length) {
      toast({
        title: "Please answer all questions",
        description: `You've answered ${answeredQuestions} of ${quizQuestions.length} questions.`,
        variant: "destructive"
      });
      return;
    }
    
    setShowResults(true);
    
    const score = calculateScore();
    if (score.percentage >= 70) {
      setShowConfetti(true);
    }
  };
  
  const handleReset = () => {
    setAnswers({});
    setShowResults(false);
    setShowConfetti(false);
  };
  
  const score = calculateScore();
  
  return (
    <div className="container max-w-6xl mx-auto px-4 py-8">
      {showConfetti && <Confetti />}
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/4">
          <CourseNav />
        </div>
        
        <div className="w-full lg:w-3/4">
          <CourseHeader 
            title="Course Assessment" 
            subtitle="Test your knowledge on Universal Design for Learning in ECE"
            progress={90}
          />
          
          {showResults ? (
            <div className="glass-card p-8 text-center animate-fade-in">
              <h2 className="text-2xl font-bold mb-4">
                Your Score: {score.correct} / {score.total}
              </h2>
              
              <div className="w-48 h-48 mx-auto my-8 relative">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    className="text-gray-200"
                    strokeWidth="8"
                    stroke="currentColor"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                  />
                  <circle
                    className={`${score.percentage >= 70 ? 'text-green-500' : 'text-amber-500'}`}
                    strokeWidth="8"
                    strokeDasharray={2 * Math.PI * 40}
                    strokeDashoffset={2 * Math.PI * 40 - (score.percentage / 100) * 2 * Math.PI * 40}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-4xl font-bold">{score.percentage}%</span>
                  {score.percentage >= 70 && (
                    <Check size={28} className="text-green-500 mt-2" />
                  )}
                </div>
              </div>
              
              <p className="text-xl mb-6">
                {score.percentage >= 70 
                  ? "Congratulations! You've successfully completed the assessment." 
                  : "You didn't pass the assessment yet. Try reviewing the material and try again."}
              </p>
              
              <Button 
                onClick={handleReset} 
                className="mx-auto"
                variant="outline"
              >
                <RefreshCw className="mr-2" size={16} />
                Retake Quiz
              </Button>
            </div>
          ) : (
            <>
              <div className="glass-card p-6 mb-8 animate-fade-in">
                <h2 className="text-2xl font-bold mb-4">Instructions</h2>
                <p>
                  This assessment contains {quizQuestions.length} questions about Universal Design for Learning and 
                  inclusivity in early childhood education. Answer all questions and submit to see your results.
                </p>
                <p className="mt-2">
                  You need to score at least 70% to pass the assessment.
                </p>
              </div>
              
              {quizQuestions.map(question => (
                <QuizQuestion 
                  key={question.id} 
                  data={question} 
                  onAnswer={handleAnswer} 
                />
              ))}
              
              <div className="flex justify-center mt-8 mb-12">
                <Button onClick={handleSubmit} size="lg">
                  Submit Assessment
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
