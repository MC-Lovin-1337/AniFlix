import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: process.env.GMAIL_USER,
		pass: process.env.GMAIL_PASS,
	},
});

const mailer = ({mail, name, text}) => {
	const from = name && mail ? `${name} <${mail}>` : `${name || mail}`;
	const message = {
		from,
		to: 'sven_ebert1337@icloud.com',
		/* 		bcc: 'sven@softainable.de', // Kopie */
		subject: `Kontaktformular-Nachricht von ${from}`,
		text,
		replyTo: from,
	};

	return new Promise((resolve, reject) => {
		transporter.sendMail(message, (error, info) => (error ? reject(error) : resolve(info)));
	});
};

const handle = async (req, res) => {
	const {email, name, message} = req.body;

	if (!email || !name || !message) {
		res.status(403).send('');
		return;
	}

	const mailerRes = await mailer({mail: email, name, text: message});
	res.send(mailerRes);
};

export default handle;
