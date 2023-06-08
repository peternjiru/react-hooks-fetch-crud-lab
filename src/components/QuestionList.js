import React,{useEffect,useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {

  const[questions,setQuestion] = useState([])

  //fetch questions
  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((r) => r.json()) 
    .then((questions) => {
      setQuestion(questions)
    })
  },[])

 //update state upun deletion of question
 function handleDeleteQuestion(deletionQuestion) {
  const updatedQuestions = questions.filter((question) => question.id !== deletionQuestion.id);
  setQuestion(updatedQuestions);
}
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
      
      {questions.map((question) => (
        <QuestionItem key={question.id} question={question} onDeleteQuestion={handleDeleteQuestion}/>
      ))}

        </ul>
    </section>
  );
}

export default QuestionList;
