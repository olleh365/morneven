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

  const [scores,setScores] = useState({morning:0,evening:0});

  const handleOptionClick = (morning,evening)=>{
    setScores({
      morning : scores.morning + morning,
      evening : scores.evening + evening,
    })
  }
  return (
    <div className="container mt-5">
      <h1>성향 분석 설문</h1>
      {question.map((q, index)=>(
        <div key={index} className='my-3'>
          <h2>{q.question}</h2>
          {q.options.map((option, idx)=>{
            <button
            key={idx}
            className='btn btn-outline-primary m-2'
            onClick={()=> handleOptionClick(option.morning,option.evening)}>
              {option.text}
            </button>
          })}
          </div>
      ))}
    </div>
  );
}

export default App;
