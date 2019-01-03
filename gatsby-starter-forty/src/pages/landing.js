import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Nurdtechie98</title>
            <meta name="description" content="nurdtechie98" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>What do i do ?</h2>
                    </header>
                    <ul>
                        <li>I am an junior year undergrad student currently pursuing a degree in Computer Science.</li>
                        <li>During my time off I usually take part in contests across various competitive coding platforms and attend hackathons during weekends.</li>
                        <li>Exploring new technologies and getting familiar with them is what I love.</li>
                    </ul>
                </div>
            </section>
            <section id="one" className="tiles">
                <article style={{backgroundImage: `url(${pic01})`}}>
                    <header className="major">
                        <h3>Aliquam</h3>
                        <p>Ipsum dolor sit amet</p>
                    </header>
                    <Link to="/landing" className="link primary"></Link>
                </article>
                <article style={{backgroundImage: `url(${pic02})`}}>
                    <header className="major">
                        <h3>Tempus</h3>
                        <p>feugiat amet tempus</p>
                    </header>
                    <Link to="/landing" className="link primary"></Link>
                </article>
                <article style={{backgroundImage: `url(${pic03})`}}>
                    <header className="major">
                        <h3>Magna</h3>
                        <p>Lorem etiam nullam</p>
                    </header>
                    <Link to="/landing" className="link primary"></Link>
                </article>
                <article style={{backgroundImage: `url(${pic04})`}}>
                    <header className="major">
                        <h3>Ipsum</h3>
                        <p>Nisl sed aliquam</p>
                    </header>
                    <Link to="/landing" className="link primary"></Link>
                </article>
                <article style={{backgroundImage: `url(${pic05})`}}>
                    <header className="major">
                        <h3>Consequat</h3>
                        <p>Ipsum dolor sit amet</p>
                    </header>
                    <Link to="/landing" className="link primary"></Link>
                </article>
                <article style={{backgroundImage: `url(${pic06})`}}>
                    <header className="major">
                        <h3>Etiam</h3>
                        <p>Feugiat amet tempus</p>
                    </header>
                    <Link to="/landing" className="link primary"></Link>
                </article>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Orci maecenas</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Rhoncus magna</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Sed nunc ligula</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing