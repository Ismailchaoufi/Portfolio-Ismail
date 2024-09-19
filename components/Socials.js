import Link from 'next/link';
import {
  RiGithubLine, 
  RiInstagramLine,
  RiLinkedinLine,
  RiFacebookLine,
  RiTwitterLine
} from 'react-icons/ri';
const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://github.com/Ismailchaoufi'} className='hover:text-accent transition-all duration-300'>
      <RiGithubLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/ismail-chaoufi-236528240/'} className='hover:text-accent transition-all duration-300'>
      <RiLinkedinLine />
      </Link>
      <Link href={'https://www.facebook.com/ismail.chaoufi.589'} className='hover:text-accent transition-all duration-300'>
      <RiFacebookLine />
      </Link>
      <Link href={'https://www.instagram.com/ismail_chaoufi/?next=%2F'} className='hover:text-accent transition-all duration-300'>
      <RiInstagramLine />
      </Link>
      <Link href={'https://x.com/DevWeb101101'} className='hover:text-accent transition-all duration-300'>
      <RiTwitterLine />
      </Link>
    </div>

  );
};

export default Socials;
