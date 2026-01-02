import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
const logoImage = '/images/logo-nav.png';

const navItems = [
  { label: '首页', href: '/' },
  { label: '平台能力', href: '/capabilities' },
  { label: 'Agent 产品', href: '/agent' },
  { label: '应用场景', href: '/scenarios' },
  { label: '案例与实践', href: '/practices' },
  { label: '关于我们', href: '/about' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleClick = (href: string) => {
    if (href.startsWith('/#')) {
      // Hash link - scroll on homepage
      const hash = href.substring(1);
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-border" role="navigation" aria-label="主导航">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center" aria-label="星河卓越首页">
            <img src={logoImage} alt="星河卓越Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.href.startsWith('/#') ? (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => handleClick(item.href)}
                  className="text-foreground/70 hover:text-foreground transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </Link>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-foreground/70 hover:text-foreground transition-colors relative group"
                  aria-current={location.pathname === item.href ? 'page' : undefined}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label={isOpen ? '关闭菜单' : '打开菜单'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-border"
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => handleClick(item.href)}
                className="block w-full text-left px-4 py-3 rounded-lg hover:bg-secondary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}