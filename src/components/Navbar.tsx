import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiX, FiChevronDown, FiCircle } from 'react-icons/fi'
import '../styles/navbar.css'

const navLinks = [
  { path: '/', label: 'الرئيسية' },
  { path: '/about', label: 'حول سند محمد بن سلمان' },
  { path: '/initiatives', label: 'المبادرات والمشاريع' },
  { path: '/charity', label: 'الإسهامات الخيرية', withCaret: true },
  { path: '/news', label: 'الأخبار' },
  { path: '/faq', label: 'الأسئلة الشائعة' },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navId = 'snad-primary-nav'

  const closeMobileMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header className="snad-navbar">
      <div className="snad-navbar__top-strip" />

      <div className="snad-navbar__main" dir="rtl">
        <div className="snad-navbar__logo">
          <span className="snad-navbar__logo-wordmark">سند</span>
          <span className="snad-navbar__logo-subtitle">محمد بن سلمان</span>
        </div>

        <button
          type="button"
          className="snad-navbar__menu-toggle"
          aria-controls={`${navId}-drawer`}
          aria-expanded={isMenuOpen}
          aria-label="فتح القائمة"
          onClick={() => setIsMenuOpen(true)}
        >
          <FiMenu aria-hidden="true" />
        </button>

        <nav id={navId} className="snad-navbar__links" aria-label="القائمة الرئيسية">
          {navLinks.map(({ path, label, withCaret }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                [
                  'snad-navbar__link',
                  isActive ? 'snad-navbar__link--active' : '',
                ]
                  .join(' ')
                  .trim()
              }
              onClick={closeMobileMenu}
            >
              <span>{label}</span>
              {withCaret && (
                <span className="snad-navbar__caret" aria-hidden="true">
                  <FiChevronDown />
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="snad-navbar__controls" aria-label="إعدادات التباين والحجم">
          <button type="button" className="snad-navbar__contrast" aria-label="التحكم بالتباين">
            ◯
          </button>
          <div className="snad-navbar__text-scale">
            <button type="button">+A</button>
            <button type="button">-A</button>
          </div>
        </div>
      </div>

      <div
        className={`snad-navbar__drawer ${isMenuOpen ? 'snad-navbar__drawer--open' : ''}`}
        id={`${navId}-drawer`}
        aria-hidden={!isMenuOpen}
      >
        <div className="snad-navbar__drawer-panel">
          <button
            type="button"
            className="snad-navbar__drawer-close"
            onClick={closeMobileMenu}
            aria-label="إغلاق القائمة"
          >
            <FiX aria-hidden="true" />
          </button>

          <nav className="snad-navbar__drawer-links" aria-label="القائمة الرئيسية">
            {navLinks.map(({ path, label, withCaret }) => (
              <NavLink
                key={`drawer-${path}`}
                to={path}
                className="snad-navbar__drawer-link"
                onClick={closeMobileMenu}
              >
                <span>{label}</span>
                {withCaret && (
                  <span className="snad-navbar__drawer-caret" aria-hidden="true">
                    <FiChevronDown />
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <button type="button" className="snad-navbar__drawer-contrast">
            تباين الألوان <FiCircle aria-hidden="true" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <button
          type="button"
          className="snad-navbar__backdrop"
          aria-label="إغلاق القائمة"
          onClick={closeMobileMenu}
        />
      )}

      <div className="snad-navbar__bottom-line" />
    </header>
  )
}

export default Navbar
