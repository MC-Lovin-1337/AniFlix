import {Dialog, Transition} from '@headlessui/react';
import {CheckIcon, XIcon} from '@heroicons/react/outline';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {Fragment, useState} from 'react';

function Form({title, title2, telefon, email, info, contactinfo, senden, fehlermeldung, ohnefehler, socialmedia}) {
	const [isDisabled, setDisabled] = useState(true);
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(true);
	const [isOpen, setOpen] = useState(false);
	const [isFalse, setFalse] = useState(false);

	const handleChange = (event) => {
		const form = event.currentTarget;
		let disabled = false;
		if (!form.name.value || !form.email.value || !form.message.value) disabled = true;
		setDisabled(disabled);
		setLoading(false);
		setSuccess(false);
		setError(false);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setLoading(true);
		const form = event.currentTarget;
		const response = await fetch('/api/form', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: form.name.value,
				email: form.email.value,
				message: form.message.value,
			}),
		});
		if (response.status === 200) {
			setError(false);
			setLoading(false);
			setOpen(true);
		} else {
			setSuccess(false);
			setLoading(false);
			setFalse(true);
		}
	};

	return (
		<>
			<section className="contact_us">
				<div className="container">
					<div className="row">
						<div className="col-md-10 offset-md-1">
							<div className="contact_inner">
								<div className="row">
									<div className="col-md-10">
										<div className="contact_form_inner">
											<div className="contact_field">
												<h3>{title}</h3>
												<div dangerouslySetInnerHTML={{__html: title2.html}} />
												<form onChange={handleChange} onSubmit={handleSubmit}>
													<input
														className="form-control form-group"
														id="name"
														name="name"
														placeholder="Name"
														required
														type="text"
													/>
													<input
														className="form-control form-group"
														id="email"
														name="email"
														placeholder="Email"
														required
														type="email"
													/>
													<textarea
														className="form-control form-group"
														id="message"
														name="message"
														placeholder="Message"
														required></textarea>
													<button
														className="contact_form_submit"
														disabled={isLoading || isDisabled}
														name="button"
														type="submit">
														{isLoading ? (
															<div className="w-8 h-8 ml-4 border-4 border-primary border-solid rounded-full animate-spin border-t-transparent justify-center"></div>
														) : (
															'Send'
														)}
													</button>
													{(error || success) && <p>{error || success}</p>}
												</form>
											</div>
										</div>
									</div>
									<div className="col-md-2">
										<div className="right_conatct_social_icon d-flex align-items-end">
											<div className="socil_item_inner d-flex">
												{socialmedia.map((social) => (
													<Link href={social.link} key={social.id} passHref>
														<a className="text-4xl px-3 text-white hover:opacity-50" target="_blank">
															<span className={`mdi mdi-${social.title}`} />
														</a>
													</Link>
												))}
											</div>
										</div>
									</div>
								</div>
								<div className="contact_info_sec contactinfo">
									<h4>{contactinfo}</h4>
									<div className="d-flex info_single align-items-center">
										<i className="mdi mdi-phone"></i>
										<span>{telefon}</span>
									</div>
									<div className="d-flex info_single align-items-center">
										<i className="mdi mdi-email"></i>
										<span>{email}</span>
									</div>
									<div className="d-flex info_single align-items-center">
										<i className="mdi mdi-"></i>
										<span>{info}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Transition.Root as={Fragment} show={isOpen}>
				{/* Email True */}
				<Dialog as="div" className="relative z-10" onClose={setOpen}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0">
						<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</Transition.Child>
					<div className="fixed z-10 inset-0 overflow-y-auto">
						<div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
								enterTo="opacity-100 translate-y-0 sm:scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 translate-y-0 sm:scale-100"
								leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
								<Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6">
									<div>
										<div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100">
											<CheckIcon aria-hidden="true" className="h-16 w-16 text-green-600" />
										</div>
										<div className="mt-3 text-center sm:mt-5">
											<Dialog.Title as="h3" className="text-gray-900">
												{ohnefehler}
											</Dialog.Title>
										</div>
									</div>
									<div>
										<button
											className="contact_form_submit"
											disabled={isLoading || isDisabled}
											onClick={() => setOpen(false)}
											type="button">
											{' '}
											zurück
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
			{/* Contact False */}
			<Transition.Root as={Fragment} show={isFalse}>
				<Dialog as="div" className="relative z-10" onClose={setFalse}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0">
						<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</Transition.Child>
					<div className="fixed z-10 inset-0 overflow-y-auto">
						<div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
								enterTo="opacity-100 translate-y-0 sm:scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 translate-y-0 sm:scale-100"
								leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
								<Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6">
									<div>
										<div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-red-100">
											<XIcon aria-hidden="true" className="h-16 w-16 text-red-600" />
										</div>
										<div className="mt-3 text-center sm:mt-5">
											<Dialog.Title as="h3" className="text-gray-900">
												{fehlermeldung}
											</Dialog.Title>
										</div>
									</div>
									<div>
										<button
											className="contact_form_submit"
											disabled={isLoading || isDisabled}
											onClick={() => setFalse(false)}
											type="button">
											{senden}
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</>
	);
}

Form.propTypes = {
	contactinfo: PropTypes.string,
	email: PropTypes.string,
	fehlermeldung: PropTypes.string,
	info: PropTypes.string,
	ohnefehler: PropTypes.string,
	senden: PropTypes.string,
	socialmedia: PropTypes.arrayOf,
	telefon: PropTypes.string,
	title: PropTypes.string,
	title2: PropTypes.string,
};
Form.defaultProps = {
	contactinfo: '',
	email: '',
	fehlermeldung: '',
	info: '',
	ohnefehler: '',
	senden: '',
	socialmedia: '',
	telefon: '',
	title: '',
	title2: '',
};

export default Form;
