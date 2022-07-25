import {Disclosure} from '@headlessui/react';
import {MenuAlt2Icon, XIcon} from '@heroicons/react/outline';
import Link from 'next/link';
import {useRouter} from 'next/router';
import PropTypes from 'prop-types';
import {useEffect} from 'react';

import Arrowback from './Arrowback';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

function Navigation({title, navigation, isHome, socialmedia}) {
	const router = useRouter();

	useEffect(() => {
		const colorswitch = () => {
			if (window.scrollY > window.innerHeight) {
				document.getElementsByTagName('nav')[0].classList.add('js-color');
				document.getElementsByClassName('back-arrow')[0].classList.add('js-color');
			} else {
				document.getElementsByTagName('nav')[0].classList.remove('js-color');
				document.getElementsByClassName('back-arrow')[0].classList.remove('js-color');
			}
		};
		if (window && !isHome) {
			window.addEventListener('scroll', colorswitch);
		}
		return () => {
			window.removeEventListener('scroll', colorswitch);
		};
	});

	return (
		<Disclosure as="nav" className="z-[1000] fixed right-0 w-screen">
			{({open}) => (
				<>
					{!isHome && (
						<span className="back-arrow py-7 cursor-pointer" onClick={() => router.back()}>
							<Arrowback />
						</span>
					)}
					<div
						className={`mx-auto px-2 w-full ${
							open ? 'bg-gradient-to-r from-[#072142] via-[#8c2b7a] to-[#ff4d5a]' : ''
						}`}>
						<div className="relative flex items-center w-full">
							<div className="flex items-center w-full justify-between px-10 ">
								<Link href="/" passHref>
									<a className="name px-10 py-16 text-white hover:opacity-50">{title}</a>
								</Link>
								<div className="flex justify-between">
									{socialmedia.map((social) => (
										<Link href={social.link} key={social.id} passHref>
											<a className="text-5xl px-5 py-14 text-white hover:opacity-50" target="_blank">
												<span className={`mdi mdi-${social.title}`} />
											</a>
										</Link>
									))}
									<a className="name px-10 py-16 text-white hover:opacity-50"></a>
									{/* Mobile menu button*/}
									<Disclosure.Button className="z-[1000] inline-flex items-center justify-center p-2 text-white pb-5">
										<span className="sr-only">Open main menu</span>
										{open ? (
											<XIcon aria-hidden="true" className="block h-20 w-20 hover:opacity-50 menuIcon" />
										) : (
											<MenuAlt2Icon aria-hidden="true" className="block h-20 w-20 hover:opacity-50 menuIcon" />
										)}
									</Disclosure.Button>
								</div>
							</div>
						</div>
					</div>
					<Disclosure.Panel className="">
						{({close}) => (
							<div className=" w-screen h-screen z-[1000] bg-gradient-to-r from-[#072142] via-[#8c2b7a] to-[#ff4d5a]">
								{navigation.items.map((item) => (
									<Link href={item.href} key={item.name} passHref>
										<Disclosure.Button
											as="a"
											className={classNames(
												item.current ? '' : 'bg-clip-text text-transparent bg-star-pattern',
												'leading-tight pl-10 tracking-widest pt-16 text-[11rem] font-semibold justify-center grid focus:-rotate-6'
											)}
											onClick={() => close()}>
											{item.name}
										</Disclosure.Button>
									</Link>
								))}
							</div>
						)}
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}

Navigation.propTypes = {
	isHome: PropTypes.bool,
	navigation: PropTypes.shape({
		items: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.object,
			})
		),
	}).isRequired,
	socialmedia: PropTypes.objectOf,
	title: PropTypes.string,
};
Navigation.defaultProps = {
	isHome: false,
	socialmedia: [],
	title: '',
};

export default Navigation;
