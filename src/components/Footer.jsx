import { Logo } from '@/assets';
import { footerLinks } from '@/constants';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className='w-full flex items-center justify-between border-t border-gray-300 flex-wrap pt-3 '>
			<div className='flex items-center justify-center gap-x-2'>
				<img
					src={Logo}
					className='w-8 h-auto object-contain'
					alt='logo'
				/>
				<span>Expressume</span>
			</div>
            <div className='flex items-center justify-center gap-x-4'>
                {footerLinks?.map(link => (
                    <Link to={'/'} className='text-blue-700 text-sm text-nowrap px-2 py-0.5' key={link} >{link}</Link>
                ))}
            </div>
		</div>
	);
};

export default Footer;
