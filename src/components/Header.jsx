import logoImg from '../assets/quiz-logo.png';

export default function Header() {
    return <header>
        <img src={logoImg} alt="логотип" />
        <h1>React - квиз</h1>
    </header>
}