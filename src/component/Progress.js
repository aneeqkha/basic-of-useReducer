function Progress({ index, numberOfQuestion, points, maxPossiblePoints, answer }) {
  return (
    <header className="progress">
        <progress max={numberOfQuestion} value={index + Number(answer != null)}/>
      <p>
        Question <strong>{index + 1}</strong> / {numberOfQuestion}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
