const ChatlistCard = ({ question, answer }) => {
  return (
    <li className="bg-green-50 p-4 rounded-md text-lg shadow-md shadow-green-50">
      <div className="mb-2 font-semibold">Q. {question}</div>
      <div>A. {answer}</div>
    </li>
  );
};

export default ChatlistCard;
