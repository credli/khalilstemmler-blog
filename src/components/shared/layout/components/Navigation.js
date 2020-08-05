
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import MobileNavigation from '../../mobile-navigation'
import "../styles/Navigation.sass"
import icon from '../../../../images/icons/mystery-icon-white.svg'
import NavLink from './NavLink'
import booksImg from '../../../../images/nav/books.png';
import newsletterImg from '../../../../images/nav/newsletter.png';
import { colors } from '../../../../assets/colors'

const RetroBars = () => (
  <div className="retro-bars">
    {Object.keys(colors.retro).map((c) => (
      <div style={{
        backgroundColor: colors.retro[c]
      }}></div>
    ))}
  </div>
)

const Logo = () => (
  <a className="logo" href="https://khalilstemmler.com/">
    <img src={icon} />
    <p>khalilstemmler.com</p>
  </a>
)

const Links = () => (
  <div className="links">
    <NavLink to="/courses" displayValue="Courses" />
    <NavLink to="/articles" displayValue="Articles" />
    <NavLink
      to="/books"
      displayValue="Resources"
      dropdownTitle="All resources"
      dropdownLinks={[
        {
          icon: booksImg,
          to: '/books',
          displayValue: 'Books',
          description: "Things you read to get smart"
        },
        {
          icon: newsletterImg,
          to: '/newsletter',
          displayValue: 'Newsletter',
          description: `Get notified when new content comes out`
        }
      ]}
    />
    <NavLink to="/wiki" displayValue="Wiki" />
  </div>
)

function useNavigation () {
  const [scrolled, setScrolled] = useState(false);
  const addScrollEventListener = () => {
    typeof window !== 'undefined'
      && window.addEventListener('scroll', navOnScroll.bind(this))
  }

  const removeScrollEventListener = () => {
    typeof window !== 'undefined'
        && window.removeEventListener('scroll', navOnScroll.bind(this))
  }

  const navOnScroll = () => {
    if (window.scrollY > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    addScrollEventListener();
    return () => removeScrollEventListener()
  }, [])

  return { scrolled }
}

function Navigation (props) {
  const { scrolled } = useNavigation();
  const { rawMode } = props;
  
  return (
    <>
      <MobileNavigation
        scrolled={scrolled}
        topOffset={scrolled ? '16px' : '27px'}
      />

      {!rawMode ? (
        <div className={scrolled ? "navigation scroll" : "navigation"}>
          <div className="navigation-inner">
            <Logo/>
            <Links/>
          </div>
          <RetroBars />
        </div>
      ) : ''}
    </>
  )
}

export default Navigation;

Navigation.propTypes = {
  rawMode: PropTypes.bool
}