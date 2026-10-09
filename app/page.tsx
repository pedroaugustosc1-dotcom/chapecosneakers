const imageUrl = "https://plain-enam-prod-public.komododecks.com/202610/09/npkb9Z8ltrq92NoI41Cl/image.jpg"

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Chapeco Sneakers início">
          <span>CHAPECO</span>
          <strong>SNEAKERS</strong>
        </a>
        <nav className="nav" aria-label="Navegação principal">
          <a href="#colecao">Coleção</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>
        <button className="menu-button" aria-label="Abrir menu"><span></span><span></span></button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Editorial / 01 — 2026</p>
          <h1>Passos que<br /><em>definem</em> presença.</h1>
          <p className="intro">Uma curadoria de sneakers para quem transforma o cotidiano em identidade.</p>
          <a className="cta" href="#colecao"><span>Explorar seleção</span><span aria-hidden="true">↗</span></a>
        </div>
        <figure className="hero-image">
          <img src={imageUrl} alt="Sneaker em destaque da curadoria Chapeco Sneakers" />
          <figcaption><span>Imagem em destaque</span><span>01 / 04</span></figcaption>
        </figure>
        <div className="hero-note">CHAPECO<br />SNEAKERS</div>
      </section>

      <section className="statement" id="sobre">
        <p className="eyebrow">A curadoria</p>
        <h2>O par certo muda<br />a maneira de <em>andar.</em></h2>
        <p>Design, história e atitude reunidos em uma seleção pensada para acompanhar o seu ritmo.</p>
      </section>

      <section className="collection" id="colecao">
        <div><p className="eyebrow">Próximo capítulo</p><h2>Novidades<br /><em>em breve.</em></h2></div>
        <a className="outline-link" href="#contato">Entrar na lista <span>↗</span></a>
      </section>

      <footer id="contato"><span>CHAPECO SNEAKERS © 2026</span><span>Feito para andar diferente.</span></footer>
    </main>
  )
}
