import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';

function App() {
  const question = [
    {
      question:"아침에 일어나서 가장 먼저 하는 일은?",
      options: [
        {text: "커피 한 잔으로 시작한다!", morning: 2, evening: 0},
        {text: "다시 한 번 잠을 청한다", morning: 0, evening: 2},
        {text: "이메일과 메시지를 확인한다", morning: 1, evening: 1},
      ]
    },{
      question:"저녁 시간에 가장 자주 하는(하고싶은) 활동은?",
      options: [
        {text: "친구들과 채팅 또는 만남을 가진다!", morning: 0, evening: 2},
        {text: "조용히 책 읽을래!", morning: 2, evening: 0},
      ]
    },{
      question:"휴일 아침 일찍 일어나면 무엇을 하나요?",
      options: [
        {text: "추가 수면!", morning: 0, evening: 3},
        {text: "운동이나 취미 생활", morning: 3, evening: 0},
      ]
    },
    {
      question:"밤늦게까지 깨어 있는 이유는?",
      options: [
        {text: "넷플릭스나 영화 시청", morning: 0, evening: 2},
        {text: "내일 준비하기", morning: 2, evening: 0},
      ]
    },
    {
      question:"최고의 아침 식사는?",
      options: [
        {text: "향이 강한 커피와 토스트", morning: 2, evening: 0},
        {text: "늦은 브런치", morning: 0, evening: 2},
      ]
    },
    {
      question:"가장 생산적인 시간대는 언제인가요?",
      options: [
        {text: "아침 9시부터 정오까지", morning: 3, evening: 0},
        {text: "저녁 9시부터 자정까지", morning: 0, evening: 3},
      ]
    },
    {
      question:"일을 마친 후에 가장 하고 싶은 일은?",
      options: [
        {text: "운동이나 산책", morning: 2, evening: 0},
        {text: "소파에 누워 휴식", morning: 0, evening: 2},
      ]
    },
    {
      question:"당신에게 좋은 날의 시작은?",
      options: [
        {text: "일찍 일어나서 계획을 세운다", morning: 3, evening: 0},
        {text: "천천히 시작하며 여유를 갖는다", morning: 0, evening: 3},
      ]
    },
  ]

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores,setScores] = useState({morning:0,evening:0});
  const [testStarted, setTestStarted] = useState(false);
  const [result, setResult] = useState("");

  const startTest = () => {
    setTestStarted(true);
  };

  const handleOptionClick = (option) => {
    const newScores = {
      morning: scores.morning + option.morning,
      evening: scores.evening + option.evening
    };

    if (currentQuestionIndex < question.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setScores(newScores);
    } else {
      const morningPercentage = (newScores.morning / (question.length * 3)) * 100;
      const eveningPercentage = (newScores.evening / (question.length * 3)) * 100;
      setResult(calculateType(morningPercentage, eveningPercentage));
      console.log(`테스트 완료! 아침형 점수: ${scores.morning}, 저녁형 점수: ${scores.evening}`);
    }
  };



  function calculateType(morningPercentage, eveningPercentage) {
    if (morningPercentage >= 90) {
      return "새벽의 전사";
    } else if (morningPercentage >= 70) {
      return "태양의 친구";
    } else if (eveningPercentage >= 90) {
      return "달빛의 주인";
    } else if (eveningPercentage >= 70) {
      return "밤의 정령";
    } else if (morningPercentage >= 50 || eveningPercentage >= 50) {
      return "황혼의 방랑자";
    }
  }

  return (
    <div className="container mt-5">
      {!testStarted ? (
        <button className="btn btn-primary" onClick={startTest}>
          테스트 시작하기
        </button>
      ) : result ? (
        <div>
          <h2>당신은 {result}입니다!</h2>
        </div>
      ) : (
        <div>
          <h2>{question[currentQuestionIndex].question}</h2>
          {question[currentQuestionIndex].options.map((option,idx)=>(
            <button
            key={idx}
            className='btn btn-outline-primary m-2'
            onClick={()=> handleOptionClick(option)}>
              {option.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
