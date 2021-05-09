import '../styles/header.scss'

export function Header() {
  return (
    <header className="header">
      <div>
        <img src="/logo2.svg" alt="to.do" />
        <h2>to.<span>do</span></h2>
      </div>
    </header>
  )
}