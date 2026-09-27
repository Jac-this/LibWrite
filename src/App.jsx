import './App.css'

const featured = [
  {
    category: 'PHILOSOPHY & IDEAS',
    title: 'Can a country forget itself?',
    excerpt: 'A reflection on memory, identity, and the stories a people choose to preserve.',
    author: 'Emmanuel K. Doe',
    read: '8 min read',
  },
  {
    category: 'HISTORY',
    title: 'The things our grandparents knew',
    excerpt: 'What survives when knowledge lives in people before it ever reaches a page.',
    author: 'Sarah T. Kollie',
    read: '6 min read',
  },
  {
    category: 'CULTURE',
    title: 'When a language becomes a memory',
    excerpt: 'On language, inheritance, and what we lose when a generation stops speaking.',
    author: 'James M. Cooper',
    read: '9 min read',
  },
]

const publications = [
  { name: 'The Liberian Review', detail: 'Essays · History · Public Life' },
  { name: 'Campus Liberia', detail: 'Students · Education · Ideas' },
  { name: 'The Diaspora Desk', detail: 'Identity · Society · Home' },
]

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

function App() {
  return (
    <main className="site">
      <header className="nav">
        <a className="brand" href="/">
          <span>LIB</span>WRITE
          <small>Writing with roots. Ideas without borders.</small>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#discover">Explore</a>
          <a href="#publications">Publications</a>
          <a href="#about">About</a>
        </nav>

        <div className="nav-actions">
          <a className="signin" href="#signin">Sign in</a>
          <a className="write-button" href="#write">Write <Arrow /></a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-texture" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <p className="eyebrow">A home for thought</p>
        <h1>Write what should<br /><em>not be forgotten.</em></h1>
        <p className="hero-copy">
          A place to write, publish, read, and discover ideas, stories, and
          conversations — wherever they begin.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#discover">Explore writing <Arrow /></a>
          <a className="text-button" href="#write">Start writing</a>
        </div>
        <p className="hero-note">From the classroom to the marketplace. From one place to another.</p>
      </section>

      <section className="manifesto" id="about">
        <div className="section-marker">01 <span>WHY LIBWRITE</span></div>
        <div className="manifesto-grid">
          <h2>Before we learned to publish,<br /><span>we learned to remember.</span></h2>
          <div>
            <p>
              A grandmother&apos;s story. A mother&apos;s lesson. A teacher&apos;s
              explanation. A student&apos;s question. A community&apos;s memory.
            </p>
            <p>
              Some knowledge never began in a classroom. Much of it was carried,
              protected, and passed on by people whose names never appeared in a book.
            </p>
            <p className="gold-line">LibWrite gives those voices somewhere to live.</p>
          </div>
        </div>
      </section>

      <section className="discover" id="discover">
        <div className="section-heading">
          <div>
            <div className="section-marker">02 <span>THE READING ROOM</span></div>
            <h2>What are we<br />thinking about?</h2>
          </div>
          <a href="#all-writing">View all writing <Arrow /></a>
        </div>

        <div className="article-grid">
          {featured.map((article, index) => (
            <article className={index === 0 ? 'article-card featured-card' : 'article-card'} key={article.title}>
              <div className="article-meta"><span>{article.category}</span><span>{article.read}</span></div>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <div className="article-author">
                <span className="author-mark">{article.author.charAt(0)}</span>
                <span>By {article.author}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="topics">
          <span>Explore by subject</span>
          {['Philosophy & Ideas', 'History', 'Culture', 'Education', 'Religion', 'Science & Technology', 'Poetry'].map((topic) => (
            <a href="#topic" key={topic}>{topic}</a>
          ))}
        </div>
      </section>

      <section className="publications" id="publications">
        <div className="section-marker">03 <span>PUBLICATIONS</span></div>
        <div className="publication-intro">
          <h2>Ideas have<br /><em>communities.</em></h2>
          <p>Follow publications, journals, campus voices, and independent collections shaping the conversations that matter.</p>
        </div>
        <div className="publication-list">
          {publications.map((publication, index) => (
            <a href="#publication" className="publication" key={publication.name}>
              <span className="pub-number">0{index + 1}</span>
              <span>
                <strong>{publication.name}</strong>
                <small>{publication.detail}</small>
              </span>
              <Arrow />
            </a>
          ))}
        </div>
      </section>

      <section className="writer-cta" id="write">
        <div className="cta-texture" aria-hidden="true" />
        <p className="eyebrow">For writers</p>
        <h2>Your story does not have<br />to be famous to be <em>worth preserving.</em></h2>
        <p>Write what you know. Question what you inherited. Teach what you have learned. Leave something for someone who comes after you.</p>
        <a className="gold-button" href="#editor">Start writing <Arrow /></a>
      </section>

      <footer>
        <div className="footer-brand">
          <strong>LIBWRITE</strong>
          <span>Liberian voices. Global ideas.</span>
        </div>
        <div className="footer-links">
          <a href="#explore">Explore</a>
          <a href="#publications">Publications</a>
          <a href="#writers">Writers</a>
          <a href="#about">About</a>
          <a href="#guidelines">Community Guidelines</a>
        </div>
        <p>Every place has something to say.<br /><strong>LibWrite is making room for it.</strong></p>
      </footer>
    </main>
  )
}

export default App
