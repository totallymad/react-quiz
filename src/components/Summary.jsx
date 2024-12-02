import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js'

export default function Summary({ userAnswers }) {

    const skippedAnswers = userAnswers.filter(answer => answer === null);
    const correctAnswers = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]);

    const skippedAnswersShare = Math.round((skippedAnswers.length / userAnswers.length) * 100);
    const correctAnswersShare = Math.round((correctAnswers.length / userAnswers.length) * 100);
    const wrongANswersShare = 100 - skippedAnswersShare - correctAnswersShare;


    return <div id="summary">
        <img src={quizCompleteImg} alt="Иконка трофея" />
        <h2>Квиз Завершен!</h2>
        <div id='summary-stats'>
            <p>
                <span className='number'>{skippedAnswersShare}%</span>
                <span className='text'>пропущено</span>
            </p>
            <p>
                <span className='number'>{correctAnswersShare}%</span>
                <span className='text'>правильных ответов</span>
            </p>
            <p>
                <span className='number'>{wrongANswersShare}%</span>
                <span className='text'>неверных ответов</span>
            </p>
        </div>
        <ol>
            {userAnswers.map((answer, index) => {
                let cssClass = 'user-answer';

                if (answer === null) {
                    cssClass += ' skipped';
                } else if (answer === QUESTIONS[index].answers[0]) {
                    cssClass += ' correct';
                } else {
                    cssClass += ' wrong';
                }

                return (
                    <li key={index}>
                        <h3>{index + 1}</h3>
                        <p className='question'>{QUESTIONS[index].text}</p>
                        <p className={cssClass}>{answer ?? 'Skipped'}</p>
                    </li>
                )
            })}

        </ol>
    </div>
}