import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';


const Footer: React.FC = () => (
  <footer className="footer bg-neutral-950 text-neutral-content p-10 flex flex-row lg:flex-wrap justify-between gap-8">
    <nav className="w-full sm:w-auto">
      <h6 className="footer-title text-lg font-bold mb-4">Services</h6>
      <ul className="space-y-2">
        <li>
          <Link href="/services/branding" className="link link-hover">
            Branding
          </Link>
        </li>
        <li>
          <Link href="/services/design" className="link link-hover">
            Design
          </Link>
        </li>
        <li>
          <Link href="/services/marketing" className="link link-hover">
            Marketing
          </Link>
        </li>
        <li>
          <Link href="/services/advertisement" className="link link-hover">
            Advertisement
          </Link>
        </li>
      </ul>
    </nav>

    <nav className="w-full sm:w-auto">
      <h6 className="footer-title text-lg font-bold mb-4">Company</h6>
      <ul className="space-y-2">
        <li>
          <Link href="/about" className="link link-hover">
            About us
          </Link>
        </li>
        <li>
          <Link href="/contact" className="link link-hover">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/jobs" className="link link-hover">
            Jobs
          </Link>
        </li>
        <li>
          <Link href="/press-kit" className="link link-hover">
            Press kit
          </Link>
        </li>
      </ul>
    </nav>

    <nav className="w-full sm:w-auto">
      <h6 className="footer-title text-lg font-bold mb-4">Legal</h6>
      <ul className="space-y-2">
        <li>
          <Link href="/legal/terms" className="link link-hover">
            Terms of use
          </Link>
        </li>
        <li>
          <Link href="/legal/privacy" className="link link-hover">
            Privacy policy
          </Link>
        </li>
        <li>
          <Link href="/legal/cookie-policy" className="link link-hover">
            Cookie policy
          </Link>
        </li>
      </ul>
    </nav>

    <div className="hidden  lg:flex w-full sm:w-auto  flex-col items-center sm:items-start">
      <h6 className="footer-title text-lg font-bold mb-4">Follow Us</h6>
      <div className="flex space-x-4">
        <Link href="https://www.instagram.com" aria-label="Instagram" target="_blank">
          <FaInstagram className="text-2xl hover:text-cyan-500 transition-colors duration-200" />
        </Link>
        <Link href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank">
          <FaLinkedin className="text-2xl hover:text-cyan-500 transition-colors duration-200" />
        </Link>
        <Link href="https://www.twitter.com" aria-label="Twitter" target="_blank">
          <FaTwitter className="text-2xl hover:text-cyan-500 transition-colors duration-200" />
        </Link>
      </div>
      
    </div>
  </footer>
);

export default Footer;
