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

const feedArticles = [
  { category: 'PHILOSOPHY & IDEAS', title: 'What does it mean to know something?', excerpt: 'A look at knowledge, doubt, and the limits of what we think we know.', author: 'Sarah T. Kollie', read: '6 min read', location: 'Monrovia', date: 'Sep 26, 2026' },
  { category: 'PHILOSOPHY & IDEAS', title: 'Can faith and reason disagree?', excerpt: 'A reflection on belief, reason, and the spaces where certainty becomes difficult.', author: 'David K. Mensah', read: '9 min read', location: 'Kumasi', date: 'Sep 25, 2026' },
  { category: 'PHILOSOPHY & IDEAS', title: 'What do we owe the people who come after us?', excerpt: 'On responsibility, inheritance, and the future we quietly build for strangers.', author: 'Naomi T. Cooper', read: '7 min read', location: 'Robertsport', date: 'Sep 23, 2026' },
  { category: 'HISTORY', title: 'The town that remembers', excerpt: 'How places carry stories even after the people who first told them are gone.', author: 'Martha K. Johnson', read: '8 min read', location: 'Harper', date: 'Sep 26, 2026' },
  { category: 'HISTORY', title: 'Before the archive was written', excerpt: 'What family memory can teach us about the histories that never reached paper.', author: 'Emmanuel K. Doe', read: '6 min read', location: 'Buchanan', date: 'Sep 24, 2026' },
  { category: 'HISTORY', title: 'A photograph with no names', excerpt: 'One old photograph opens questions about memory, family, and historical silence.', author: 'Sarah T. Kollie', read: '5 min read', location: 'Monrovia', date: 'Sep 21, 2026' },
  { category: 'CULTURE', title: 'The words we carry home', excerpt: 'Language, belonging, and the small expressions that keep a place close.', author: 'James M. Cooper', read: '7 min read', location: 'New York', date: 'Sep 25, 2026' },
  { category: 'CULTURE', title: 'When tradition changes', excerpt: 'What happens when an inherited practice meets a new generation?', author: 'Naomi T. Cooper', read: '6 min read', location: 'Monrovia', date: 'Sep 22, 2026' },
  { category: 'CULTURE', title: 'The sound of a community', excerpt: 'Music, celebration, and the ordinary sounds through which communities recognize themselves.', author: 'David K. Mensah', read: '5 min read', location: 'Kumasi', date: 'Sep 19, 2026' },
  { category: 'EDUCATION', title: 'The question a student remembers', excerpt: 'Sometimes the most important lesson is the question that refuses to leave.', author: 'Martha K. Johnson', read: '6 min read', location: 'Harare', date: 'Sep 25, 2026' },
  { category: 'EDUCATION', title: 'Learning beyond the classroom', excerpt: 'What students learn from families, communities, mistakes, and ordinary life.', author: 'Emmanuel K. Doe', read: '8 min read', location: 'Monrovia', date: 'Sep 22, 2026' },
  { category: 'EDUCATION', title: 'What makes a school a community?', excerpt: 'Schools are places of lessons, but they are also places where people learn to belong.', author: 'Sarah T. Kollie', read: '7 min read', location: 'Harper', date: 'Sep 20, 2026' },
  { category: 'RELIGION & SPIRITUALITY', title: 'When prayer becomes waiting', excerpt: 'On patience, silence, and the strange discipline of remaining present.', author: 'David K. Mensah', read: '6 min read', location: 'Kumasi', date: 'Sep 24, 2026' },
  { category: 'RELIGION & SPIRITUALITY', title: 'The faith we inherited', excerpt: 'What we receive from those who believed before us, and what we choose to keep.', author: 'Martha K. Johnson', read: '8 min read', location: 'Harare', date: 'Sep 21, 2026' },
  { category: 'RELIGION & SPIRITUALITY', title: 'Doubt is also a question', excerpt: 'A reflection on uncertainty and the search for meaning when easy answers disappear.', author: 'Emmanuel K. Doe', read: '5 min read', location: 'Monrovia', date: 'Sep 18, 2026' },
  { category: 'SCIENCE & TECHNOLOGY', title: 'What technology changes first', excerpt: 'The tools we build can quietly change the way we work, think, and relate to one another.', author: 'James M. Cooper', read: '7 min read', location: 'New York', date: 'Sep 26, 2026' },
  { category: 'SCIENCE & TECHNOLOGY', title: 'Can technology preserve memory?', excerpt: 'Digital archives may store more than ever, but storage is not the same as remembering.', author: 'Sarah T. Kollie', read: '8 min read', location: 'Monrovia', date: 'Sep 23, 2026' },
  { category: 'SCIENCE & TECHNOLOGY', title: 'The ordinary future', excerpt: 'How emerging technologies become ordinary parts of life before we notice the change.', author: 'Martha K. Johnson', read: '6 min read', location: 'Harare', date: 'Sep 20, 2026' },
  { category: 'POETRY', title: 'What the river remembers', excerpt: 'A poem about distance, return, and the places that continue speaking to us.', author: 'Naomi T. Cooper', read: '3 min read', location: 'Robertsport', date: 'Sep 26, 2026' },
  { category: 'POETRY', title: 'A name carried quietly', excerpt: 'A short poem about inheritance, family, and the names we carry.', author: 'James M. Cooper', read: '2 min read', location: 'New York', date: 'Sep 22, 2026' },
  { category: 'POETRY', title: 'After everyone goes home', excerpt: 'On the silence left behind after celebration.', author: 'David K. Mensah', read: '3 min read', location: 'Kumasi', date: 'Sep 19, 2026' },
  { category: 'FICTION', title: 'The road after rain', excerpt: 'A short story about a journey, a promise, and the person waiting at the other end.', author: 'Sarah T. Kollie', read: '10 min read', location: 'Monrovia', date: 'Sep 25, 2026' },
  { category: 'FICTION', title: 'The room with two windows', excerpt: 'A story about memory and the strange things familiar places can reveal.', author: 'Emmanuel K. Doe', read: '9 min read', location: 'Buchanan', date: 'Sep 21, 2026' },
  { category: 'PERSONAL ESSAYS', title: 'What I learned from leaving home', excerpt: 'Distance changes a place in the mind before it changes anything else.', author: 'Naomi T. Cooper', read: '8 min read', location: 'New York', date: 'Sep 24, 2026' },
  { category: 'PERSONAL ESSAYS', title: 'The things my mother never wrote down', excerpt: 'Some lessons arrive without pages, certificates, or official records.', author: 'Martha K. Johnson', read: '7 min read', location: 'Harare', date: 'Sep 20, 2026' },
  { category: 'OPINION', title: 'What should we preserve?', excerpt: 'A question about memory, public life, and the choices communities make about what matters.', author: 'James M. Cooper', read: '6 min read', location: 'Monrovia', date: 'Sep 25, 2026' },
  { category: 'OPINION', title: 'We need better questions', excerpt: 'Why public conversations sometimes improve when we stop rushing toward conclusions.', author: 'Emmanuel K. Doe', read: '5 min read', location: 'Harare', date: 'Sep 22, 2026' },
  { category: 'POLITICS & PUBLIC LIFE', title: 'What does citizenship ask of us?', excerpt: 'A reflection on participation, responsibility, and belonging in public life.', author: 'David K. Mensah', read: '8 min read', location: 'Monrovia', date: 'Sep 24, 2026' },
  { category: 'POLITICS & PUBLIC LIFE', title: 'The space between citizen and state', excerpt: 'Thinking about institutions, responsibility, and the everyday experience of public life.', author: 'Sarah T. Kollie', read: '7 min read', location: 'Harper', date: 'Sep 20, 2026' },
  { category: 'BUSINESS & ENTREPRENEURSHIP', title: 'Building with what we have', excerpt: 'What small enterprises teach us about creativity, risk, and opportunity.', author: 'Martha K. Johnson', read: '6 min read', location: 'Harare', date: 'Sep 25, 2026' },
  { category: 'BUSINESS & ENTREPRENEURSHIP', title: 'The business of an ordinary idea', excerpt: 'Sometimes an opportunity begins with noticing a problem everyone else has learned to ignore.', author: 'James M. Cooper', read: '7 min read', location: 'Monrovia', date: 'Sep 21, 2026' },
  { category: 'RESEARCH', title: 'What happens when memory becomes data?', excerpt: 'An exploration of archives, digital records, and the changing life of information.', author: 'Emmanuel K. Doe', read: '11 min read', location: 'Monrovia', date: 'Sep 23, 2026' },
  { category: 'RESEARCH', title: 'Notes from the field', excerpt: 'Observations on how questions become evidence and evidence becomes understanding.', author: 'Sarah T. Kollie', read: '9 min read', location: 'Harper', date: 'Sep 18, 2026' },
  { category: 'CAMPUS VOICES', title: 'What students are really discussing', excerpt: 'Beyond lectures and examinations, campus is a place where ideas meet everyday life.', author: 'Martha K. Johnson', read: '6 min read', location: 'Harare', date: 'Sep 26, 2026' },
  { category: 'CAMPUS VOICES', title: 'Learning to disagree well', excerpt: 'What happens when students discover that disagreement can be part of learning.', author: 'Naomi T. Cooper', read: '7 min read', location: 'Monrovia', date: 'Sep 20, 2026' },
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
  const roomArticles = [...featured, ...feedArticles].filter((article) => article.category === category.toUpperCase())

  return (
    <section className="category-room">
      <button className="back-button" onClick={onBack} type="button">← Back to explore</button>

      <header className="room-header">
        <div className="section-marker">READING ROOM <span>{category.toUpperCase()}</span></div>
        <h1>{category}</h1>
        <p>{room?.intro || 'Writing, ideas, and conversations gathered around a shared subject.'}</p>
      </header>

      <div className="room-tabs">
        <button className="active" type="button">Latest</button>
        <button type="button">Popular</button>
        <button type="button">Following</button>
      </div>

      <div className="category-feed">
        <div className="feed-heading">
          <div><span>THE {category.toUpperCase()} FEED</span><h2>Latest writing</h2></div>
          <p>{roomArticles.length} pieces</p>
        </div>

        {roomArticles.map((article, index) => (
          <button className={index === 0 ? 'feed-card feed-card-featured' : 'feed-card'} key={article.title} onClick={() => onOpenArticle(article)} type="button">
            <div className="feed-card-content">
              <div className="article-meta"><span>{article.category}</span><span>{article.read}</span></div>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <div className="article-author">
                <span className="author-mark">{article.author.charAt(0)}</span>
                <span>By {article.author} · {article.location} · {article.date}</span>
              </div>
            </div>
            <span className="feed-arrow"><Arrow /></span>
          </button>
        ))}
      </div>

      <div className="room-section room-subject-section">
        <div className="room-section-heading"><span>EXPLORE THIS ROOM</span><span>{room?.sections.join(' · ')}</span></div>
        <div className="room-subjects">
          {(room?.sections || []).map((section) => <button key={section} type="button"><strong>{section}</strong><span>Explore this subject ↗</span></button>)}
        </div>
      </div>

      <div className="room-section">
        <div className="room-section-heading"><span>OTHER ROOMS</span><span>KEEP EXPLORING</span></div>
        <div className="room-links">{categories.slice(1).filter((item) => item !== category).slice(0, 6).map((item) => <button key={item} type="button" onClick={() => onOpenCategory(item)}>{item} <Arrow /></button>)}</div>
      </div>
    </section>
  )
}

function WriterDashboard({ onOpenEditor, onOpenArticle }) {
  const posts = [
    { title: 'The things my mother never wrote down', status: 'Draft', category: 'Personal Essays', updated: 'Edited today' },
    { title: 'A question worth carrying', status: 'Published', category: 'Philosophy & Ideas', updated: 'Sep 18, 2026' },
  ]

  return (
    <section className="writer-dashboard">
      <div className="writer-top">
        <div>
          <div className="section-marker">WRITER STUDIO <span>YOUR DESK</span></div>
          <h1>Your writing<br /><em>has a home.</em></h1>
          <p>Write, revise, publish, and keep track of the ideas you are building.</p>
        </div>
        <button className="primary-button" onClick={() => onOpenEditor()} type="button">New story <Arrow /></button>
      </div>

      <div className="writer-stats">
        <div><span>STORIES</span><strong>2</strong></div>
        <div><span>READERS</span><strong>128</strong></div>
        <div><span>READS</span><strong>1.4K</strong></div>
        <div><span>FOLLOWERS</span><strong>46</strong></div>
      </div>

      <div className="writer-workspace">
        <div className="writer-section-title"><span>YOUR WRITING</span><span>RECENT ACTIVITY</span></div>
        {posts.map((post) => (
          <button className="writer-post" key={post.title} onClick={() => onOpenEditor(post.status === 'Draft' ? post : null)} type="button">
            <div>
              <span className={post.status === 'Draft' ? 'status draft' : 'status'}>{post.status}</span>
              <h2>{post.title}</h2>
              <p>{post.category} · {post.updated}</p>
            </div>
            <Arrow />
          </button>
        ))}
      </div>

      <div className="writer-profile-card">
        <div className="author-mark large">J</div>
        <div>
          <span className="section-marker">YOUR PROFILE</span>
          <h2>Jacob Bropleh</h2>
          <p>Writer · Philosophy · Education · Ideas</p>
        </div>
        <button type="button">Edit profile <Arrow /></button>
      </div>
    </section>
  )
}

function WriterEditor({ draft, onBack, onSave }) {
  const [title, setTitle] = useState(draft?.title || '')
  const [category, setCategory] = useState(draft?.category || 'Personal Essays')
  const [excerpt, setExcerpt] = useState(draft?.excerpt || '')
  const [body, setBody] = useState(draft?.body?.join('\n\n') || '')

  const saveDraft = () => {
    onSave({ title: title || 'Untitled story', category, excerpt, body: body.split(/\\n\\s*\\n/).filter(Boolean), author: 'Jacob Bropleh', location: 'Harare', date: 'Sep 27, 2026', read: '5 min read' })
  }

  return (
    <section className="writer-editor">
      <div className="editor-toolbar">
        <button className="back-button" onClick={onBack} type="button">← Back to writer studio</button>
        <div><button className="secondary-button" onClick={saveDraft} type="button">Save draft</button><button className="primary-button" onClick={saveDraft} type="button">Publish <Arrow /></button></div>
      </div>

      <div className="editor-paper">
        <div className="editor-kicker">NEW STORY · {category.toUpperCase()}</div>
        <input className="editor-title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Give your story a title..." />
        <textarea className="editor-excerpt" value={excerpt} onChange={(e) => setExcerpt(e.target.value)} placeholder="Write a short description of what readers will find here..." />
        <div className="editor-settings">
          <label>Category <select value={category} onChange={(e) => setCategory(e.target.value)}>{categories.slice(1).map((item) => <option key={item}>{item}</option>)}</select></label>
          <span>Draft · saves locally for now</span>
        </div>
        <textarea className="editor-body" value={body} onChange={(e) => setBody(e.target.value)} placeholder="Start writing here..."></textarea>
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
  const [selectedCategory, setSelectedCategory] = useState(null)\n  const [writerDraft, setWriterDraft] = useState(null)

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

  const openWriter = () => {\n    setSelectedArticle(null)\n    setSelectedCategory(null)\n    setView('writer')\n    window.scrollTo({ top: 0, behavior: 'smooth' })\n  }\n\n  const openEditor = (draft = null) => {\n    setWriterDraft(draft)\n    setView('editor')\n    window.scrollTo({ top: 0, behavior: 'smooth' })\n  }\n\n  const saveWriterDraft = (draft) => {\n    setWriterDraft(draft)\n    setView('writer')\n    window.scrollTo({ top: 0, behavior: 'smooth' })\n  }\n\n  const goHome = () => {
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
          <button className="write-button" onClick={openWriter} type="button">Write <Arrow /></button>
        </div>
      </header>

      {view === 'home' && <Home onExplore={openExplore} onOpenArticle={openArticle} onOpenCategory={openCategory} />}
      {view === 'explore' && <Explore onOpenArticle={openArticle} onOpenCategory={openCategory} />}
      {view === 'category' && selectedCategory && <CategoryRoom category={selectedCategory} onBack={openExplore} onOpenArticle={openArticle} onOpenCategory={openCategory} />}
      {view === 'writer' && <WriterDashboard onOpenEditor={openEditor} onOpenArticle={openArticle} />}\n      {view === 'editor' && <WriterEditor draft={writerDraft} onBack={openWriter} onSave={saveWriterDraft} />}\n      {view === 'article' && selectedArticle && (
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
