import { useMemo, useState } from 'react'
import './App.css'

const featured = [
  {
    category: 'PHILOSOPHY & IDEAS',
    title: 'Can a country forget itself?',
    excerpt: 'A reflection on memory, identity, and the stories a people choose to preserve.',
    author: 'Emmanuel K. Doe',
    read: '8 min read',
    location: 'Monrovia',
    date: 'Sep 24, 2026',
    body: [
      'A country can lose things without losing them completely. A name can disappear from a book and still live in a grandmother’s memory. A language can become less common and still shape the way a family understands home.',
      'Memory is not only what is written down. It is also what is repeated, practiced, questioned, and carried from one person to another.',
      'Perhaps this is why forgetting is more complicated than the absence of knowledge. Sometimes we forget because no one made room for what we knew. Sometimes we remember because someone decided that a story was worth carrying.',
    ],
  },
  {
    category: 'HISTORY',
    title: 'The things our grandparents knew',
    excerpt: 'What survives when knowledge lives in people before it ever reaches a page.',
    author: 'Sarah T. Kollie',
    read: '6 min read',
    location: 'Harper',
    date: 'Sep 22, 2026',
    body: [
      'There are things our grandparents knew that were never written in textbooks. They knew which path became difficult after heavy rain. They knew how a particular plant was used, which songs belonged to which occasions, and which stories should be told carefully.',
      'This kind of knowledge is easy to overlook because it does not always arrive with a certificate or a citation. Yet it can shape a family, a community, and even a person’s understanding of the world.',
      'The question is not whether this knowledge belongs beside formal education. It is how we preserve the knowledge that exists outside its walls.',
    ],
  },
  {
    category: 'CULTURE',
    title: 'When a language becomes a memory',
    excerpt: 'On language, inheritance, and what we lose when a generation stops speaking.',
    author: 'James M. Cooper',
    read: '9 min read',
    location: 'New York',
    date: 'Sep 20, 2026',
    body: [
      'A language can disappear quietly. There may be no single day when everyone stops speaking it. Instead, one generation speaks it less, another understands it but answers in a different language, and eventually a word survives mostly as a memory.',
      'But language is more than vocabulary. It carries humor, relationships, ways of greeting, ways of grieving, and ways of seeing the world.',
      'When a language becomes a memory, the loss is not only linguistic. It raises a deeper question about what parts of ourselves can survive when the words that once carried them become unfamiliar.',
    ],
  },
  {
    category: 'EDUCATION',
    title: 'What does a good teacher leave behind?',
    excerpt: 'Beyond lessons and examinations, teaching is also the work of changing how another person sees.',
    author: 'Martha K. Johnson',
    read: '7 min read',
    location: 'Harare',
    date: 'Sep 18, 2026',
    body: [
      'A teacher leaves behind more than notes on a board. Sometimes it is a question a student remembers years later. Sometimes it is the confidence to ask another question.',
      'Education is often measured by what a student can reproduce. But some of its deepest effects cannot be measured so easily. A teacher can change the direction of a life simply by taking an idea seriously.',
      'Perhaps teaching is partly the art of leaving something behind that continues working after the lesson has ended.',
    ],
  },
  {
    category: 'RELIGION & SPIRITUALITY',
    title: 'The silence after the prayer',
    excerpt: 'What happens when faith asks us to remain present without receiving an immediate answer?',
    author: 'David K. Mensah',
    read: '5 min read',
    location: 'Kumasi',
    date: 'Sep 16, 2026',
    body: [
      'Prayer is often imagined as speech directed toward God. But there is another part of prayer that is harder to describe: the silence that follows.',
      'Silence can feel empty when we expect an answer. Yet it can also become a space in which a person notices what words were hiding.',
      'The experience raises a question that belongs not only to theology but to ordinary human life: can presence still matter when nothing seems to happen?',
    ],
  },
  {
    category: 'POETRY',
    title: 'A house made of voices',
    excerpt: 'A poem about inheritance, distance, and the people who remain with us through what they taught us.',
    author: 'Naomi T. Cooper',
    read: '3 min read',
    location: 'Robertsport',
    date: 'Sep 14, 2026',
    body: [
      'Some houses are built from timber and stone. Others are built from the sentences people repeat until they become part of us.',
      'A mother’s warning. A grandfather’s joke. A teacher’s question. A prayer whispered before sleep. We carry these things long after we leave the rooms where we first heard them.',
      'Maybe inheritance is not always something we receive. Sometimes it is something we continue.',
    ],
  },
]

const publications = [
  { name: 'The Liberian Review', detail: 'Essays · History · Public Life' },
  { name: 'Campus Liberia', detail: 'Students · Education · Ideas' },
  { name: 'The Diaspora Desk', detail: 'Identity · Society · Home' },
]

const categories = [
  'All',
  'Philosophy & Ideas',
  'History',
  'Culture',
  'Education',
  'Religion & Spirituality',
  'Science & Technology',
  'Poetry',
  'Fiction',
  'Personal Essays',
  'Opinion',
  'Politics & Public Life',
  'Business & Entrepreneurship',
  'Research',
  'Campus Voices',
]

const categoryRooms = {
  'Philosophy & Ideas': { intro: 'Questions worth sitting with. Ideas worth arguing about.', sections: ['Ethics', 'Knowledge & Reason', 'African Philosophy', 'Philosophy of Religion'] },
  History: { intro: 'The past is not finished with us.', sections: ['People & Lives', 'Places & Memory', 'Historical Essays', 'Archives'] },
  Culture: { intro: 'The ways we speak, live, create, and remember.', sections: ['Language', 'Tradition & Heritage', 'Identity', 'Arts & Everyday Life'] },
  Education: { intro: 'Ideas about learning, teaching, schools, and the people shaped by them.', sections: ['Teaching', 'Learning', 'Schools & Universities', 'Education & Society'] },
  'Religion & Spirituality': { intro: 'Faith, doubt, prayer, meaning, and the search for what is beyond us.', sections: ['Faith & Doubt', 'Prayer & Practice', 'Theology', 'Spiritual Life'] },
  'Science & Technology': { intro: 'Questions, discoveries, inventions, and the changing world around us.', sections: ['Science', 'Technology', 'Innovation', 'Digital Life'] },
  Poetry: { intro: 'Some things are easier to say differently.', sections: ['New Poems', 'Poets to Discover', 'Collections', 'Spoken Word'] },
  Fiction: { intro: 'Stories that let us enter lives, places, and possibilities beyond our own.', sections: ['Short Stories', 'Literary Fiction', 'New Voices', 'Collections'] },
  'Personal Essays': { intro: 'Experience becomes writing when someone is willing to look at it closely.', sections: ['Life & Memory', 'Identity', 'Family & Home', 'Reflections'] },
  Opinion: { intro: 'Perspectives offered for thought, conversation, and disagreement.', sections: ['Public Questions', 'Culture & Society', 'Ideas', 'Commentary'] },
  'Politics & Public Life': { intro: 'Writing about public life, institutions, citizenship, and the questions that shape society.', sections: ['Civic Life', 'Governance', 'Public Policy', 'Political Thought'] },
  'Business & Entrepreneurship': { intro: 'Ideas about work, enterprise, markets, opportunity, and building something of value.', sections: ['Entrepreneurship', 'Markets', 'Work & Careers', 'Business Stories'] },
  Research: { intro: 'Research, investigations, and careful attempts to understand what we do not yet know.', sections: ['Studies', 'Investigations', 'Research Notes', 'Long-form Research'] },
  'Campus Voices': { intro: 'Students and young thinkers writing about the world from where they are learning and living.', sections: ['Student Life', 'Campus Debates', 'Education', 'Young Voices'] },
}

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

function ArticleCard({ article, featured: isFeatured, onOpen }) {
  return (
    <button
      className={isFeatured ? 'article-card featured-card' : 'article-card'}
      onClick={() => onOpen(article)}
      type="button"
    >
      <div className="article-meta">
        <span>{article.category}</span>
        <span>{article.read}</span>
      </div>
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
      <div className="article-author">
        <span className="author-mark">{article.author.charAt(0)}</span>
        <span>By {article.author}</span>
      </div>
    </button>
  )
}

function Home({ onExplore, onOpenArticle, onOpenCategory }) {
  return (
    <>
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
          <button className="primary-button" onClick={onExplore} type="button">Explore writing <Arrow /></button>
          <a className="text-button" href="#write">Start writing</a>
        </div>
        <p className="hero-note">From the classroom to the marketplace. From one place to another.</p>
      </section>

      <section className="manifesto" id="about">
        <div className="section-marker">01 <span>WHY LIBWRITE</span></div>
        <div className="manifesto-grid">
          <h2>Before we learned to publish,<br /><span>we learned to remember.</span></h2>
          <div>
            <p>A grandmother&apos;s story. A mother&apos;s lesson. A teacher&apos;s explanation. A student&apos;s question. A community&apos;s memory.</p>
            <p>Some knowledge never began in a classroom. Much of it was carried, protected, and passed on by people whose names never appeared in a book.</p>
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
          <button onClick={onExplore} type="button">View all writing <Arrow /></button>
        </div>
        <div className="article-grid">
          {featured.slice(0, 3).map((article, index) => (
            <ArticleCard key={article.title} article={article} featured={index === 0} onOpen={onOpenArticle} />
          ))}
        </div>
        <div className="topics">
          <span>Explore by subject</span>
          {categories.slice(1).map((topic) => (
            <button key={topic} type="button" onClick={() => onOpenCategory(topic)}>{topic}</button>
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
    </>
  )
}

function Explore({ onOpenArticle, onOpenCategory }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    return featured.filter((article) => {
      const matchesCategory = category === 'All' || article.category === category.toUpperCase()
      const matchesQuery = !normalized || [article.title, article.excerpt, article.author, article.location, article.category]
        .join(' ')
        .toLowerCase()
        .includes(normalized)
      return matchesCategory && matchesQuery
    })
  }, [category, query])

  return (
    <section className="explore-page">
      <div className="explore-header">
        <div>
          <div className="section-marker">READING ROOM <span>EXPLORE</span></div>
          <h1>Find something<br /><em>worth reading.</em></h1>
          <p>Ideas, stories, questions, and observations from different places and different lives.</p>
        </div>
        <div className="search-box">
          <label htmlFor="article-search">Search writing</label>
          <input
            id="article-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search articles, writers, places..."
          />
        </div>
      </div>

      <div className="category-bar">
        {categories.map((item) => (
          <button className={category === item ? 'active' : ''} key={item} onClick={() => item === 'All' ? setCategory(item) : onOpenCategory(item)} type="button">
            {item}
          </button>
        ))}
      </div>

      <div className="explore-results">
        <div className="results-heading">
          <span>{filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}</span>
          <span>{category === 'All' ? 'All writing' : category}</span>
        </div>
        <div className="article-grid explore-grid">
          {filtered.map((article, index) => (
            <ArticleCard key={article.title} article={article} featured={index === 0} onOpen={onOpenArticle} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="empty-results">
            <h2>Nothing found yet.</h2>
            <p>Try another search or choose a different subject.</p>
          </div>
        )}
      </div>
    </section>
  )
}

function CategoryRoom({ category, onBack, onOpenArticle, onOpenCategory }) {
  const room = categoryRooms[category]
  const articles = featured.filter((article) => article.category === category.toUpperCase())

  return (
    <section className="category-room">
      <button className="back-button" onClick={onBack} type="button">← Back to explore</button>
      <header className="room-header">
        <div className="section-marker">READING ROOM <span>{category.toUpperCase()}</span></div>
        <h1>{category}</h1>
        <p>{room?.intro || 'Writing, ideas, and conversations gathered around a shared subject.'}</p>
      </header>
      <div className="room-feature">
        <div><span>THE ROOM</span><h2>Explore what people are saying, asking, remembering, and creating.</h2></div>
        <p>{articles.length ? `${articles.length} published piece${articles.length === 1 ? '' : 's'} in this room so far.` : 'This room is ready for new voices.'}</p>
      </div>
      <div className="room-section">
        <div className="room-section-heading"><span>EXPLORE THIS ROOM</span><span>{room?.sections.join(' · ')}</span></div>
        <div className="room-subjects">
          {(room?.sections || []).map((section) => <button key={section} type="button"><strong>{section}</strong><span>Explore this subject ↗</span></button>)}
        </div>
      </div>
      <div className="room-section">
        <div className="room-section-heading"><span>WRITING IN {category.toUpperCase()}</span><span>{articles.length} {articles.length === 1 ? 'piece' : 'pieces'}</span></div>
        {articles.length ? <div className="article-grid explore-grid">{articles.map((article, index) => <ArticleCard key={article.title} article={article} featured={index === 0} onOpen={onOpenArticle} />)}</div> : <div className="room-empty"><h2>The room is waiting for its first voices.</h2><p>As writers publish in this category, their work will gather here.</p></div>}
      </div>
      <div className="room-section">
        <div className="room-section-heading"><span>YOU MAY ALSO EXPLORE</span><span>OTHER ROOMS</span></div>
        <div className="room-links">{categories.slice(1).filter((item) => item !== category).slice(0, 6).map((item) => <button key={item} type="button" onClick={() => onOpenCategory(item)}>{item} <Arrow /></button>)}</div>
      </div>
    </section>
  )
}

function ArticlePage({ article, onBack, onOpenArticle }) {
  return (
    <article className="article-page">
      <button className="back-button" onClick={onBack} type="button">← Back to reading</button>
      <div className="article-page-header">
        <div className="article-page-meta">{article.category} · {article.read}</div>
        <h1>{article.title}</h1>
        <p className="article-page-excerpt">{article.excerpt}</p>
        <div className="article-page-byline">
          <span className="author-mark">{article.author.charAt(0)}</span>
          <div>
            <strong>{article.author}</strong>
            <span>{article.location} · {article.date}</span>
          </div>
        </div>
      </div>

      <div className="article-body">
        {article.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>

      <div className="article-footer">
        <span>More to read</span>
        <div>
          {featured.filter((item) => item.title !== article.title).slice(0, 2).map((item) => (
            <button key={item.title} onClick={() => onOpenArticle(item)} type="button">
              <strong>{item.title}</strong>
              <small>{item.category} · {item.read}</small>
            </button>
          ))}
        </div>
      </div>
    </article>
  )
}

function App() {
  const [view, setView] = useState('home')
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)

  const openExplore = () => {
    setSelectedArticle(null)
    setSelectedCategory(null)
    setView('explore')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openCategory = (category) => {
    setSelectedArticle(null)
    setSelectedCategory(category)
    setView('category')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openArticle = (article) => {
    setSelectedArticle(article)
    setSelectedCategory(null)
    setView('article')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goHome = () => {
    setSelectedArticle(null)
    setSelectedCategory(null)
    setView('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="site">
      <header className="nav">
        <button className="brand" onClick={goHome} type="button">
          <span>LIB</span>WRITE
          <small>Writing with roots. Ideas without borders.</small>
        </button>

        <nav className="nav-links" aria-label="Main navigation">
          <button onClick={openExplore} type="button">Explore</button>
          <a href="#publications">Publications</a>
          <a href="#about">About</a>
        </nav>

        <div className="nav-actions">
          <a className="signin" href="#signin">Sign in</a>
          <a className="write-button" href="#write">Write <Arrow /></a>
        </div>
      </header>

      {view === 'home' && <Home onExplore={openExplore} onOpenArticle={openArticle} onOpenCategory={openCategory} />}
      {view === 'explore' && <Explore onOpenArticle={openArticle} onOpenCategory={openCategory} />}
      {view === 'category' && selectedCategory && <CategoryRoom category={selectedCategory} onBack={openExplore} onOpenArticle={openArticle} onOpenCategory={openCategory} />}
      {view === 'article' && selectedArticle && (
        <ArticlePage article={selectedArticle} onBack={openExplore} onOpenArticle={openArticle} />
      )}

      {view === 'home' && (
        <footer>
          <div className="footer-brand">
            <strong>LIBWRITE</strong>
            <span>Writing with roots. Ideas without borders.</span>
          </div>
          <div className="footer-links">
            <a href="#explore" onClick={(event) => { event.preventDefault(); openExplore() }}>Explore</a>
            <a href="#publications">Publications</a>
            <a href="#writers">Writers</a>
            <a href="#about">About</a>
            <a href="#guidelines">Community Guidelines</a>
          </div>
          <p>Every place has something to say.<br /><strong>LibWrite is making room for it.</strong></p>
        </footer>
      )}
    </main>
  )
}

export default App
