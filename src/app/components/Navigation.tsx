import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
const logoImage = '/images/logo-nav.png';

const agentProducts = [
  { label: 'Agent智能体中台', href: '/agent' },
  { label: '星河影擎', href: '/agent/yingqing' },
  { label: '星河视擎', href: '/agent/shiqing' },
  { label: '星河文擎', href: '/agent/wenqing' },
];

const navItems = [
  { label: '首页', href: '/' },
  { label: '平台能力', href: '/capabilities' },
  { label: 'Agent 产品', href: '/agent', children: agentProducts },
  { label: '应用场景', href: '/scenarios' },
  { label: '案例与实践', href: '/practices' },
  { label: '关于我们', href: '/about' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAgentMenuOpen, setIsAgentMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsAgentMenuOpen(false);
    setIsOpen(false);
  }, [location.pathname]);

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
    setIsAgentMenuOpen(false);
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
              item.children ? (
                <div key={item.label} className="relative group">
                  <button
                    type="button"
                    onPointerDown={(event) => {
                      event.preventDefault();
                      setIsAgentMenuOpen((open) => !open);
                    }}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        setIsAgentMenuOpen((open) => !open);
                      }
                    }}
                    className="flex items-center gap-1 text-foreground/70 hover:text-foreground transition-colors relative py-5"
                    aria-haspopup="menu"
                    aria-expanded={isAgentMenuOpen}
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isAgentMenuOpen ? 'rotate-180' : 'group-hover:rotate-180'}`} />
                    <span className={`absolute bottom-4 left-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname.startsWith('/agent') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </button>

                  <div
                    className={`${isAgentMenuOpen ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 translate-y-2'} absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 rounded-xl border border-blue-100 bg-white/95 p-2 shadow-xl shadow-blue-900/10 backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0`}
                    role="menu"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        onClick={() => handleClick(child.href)}
                        className={`block rounded-lg px-4 py-3 text-sm transition-colors ${location.pathname === child.href ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-foreground/75 hover:bg-blue-50 hover:text-blue-700'}`}
                        role="menuitem"
                        aria-current={location.pathname === child.href ? 'page' : undefined}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : item.href.startsWith('/#') ? (
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
              item.children ? (
                <div key={item.label} className="rounded-lg bg-blue-50/50 p-2">
                  <div className="px-3 py-2 text-sm font-semibold text-blue-700">
                    {item.label}
                  </div>
                  <div className="space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        onClick={() => handleClick(child.href)}
                        className={`block w-full rounded-lg px-4 py-3 text-left transition-colors ${location.pathname === child.href ? 'bg-white text-blue-700 font-semibold shadow-sm' : 'text-foreground/75 hover:bg-white'}`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => handleClick(item.href)}
                  className="block w-full text-left px-4 py-3 rounded-lg hover:bg-secondary transition-colors"
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
