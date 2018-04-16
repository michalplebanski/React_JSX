var contacts = [
	{
		id: 1,
		firstName: 'Jan',
		lastName: 'Nowak',
		email: 'jannowak@gmail.com',
	},
	{
		id: 2,
		firstName: 'Zbigniew',
		lastName: 'Stonoga',
		email: 'z.stonoga@gmail.com',
	},
	{
		id: 3,
		firstName: 'Tomasz',
		lastName: 'Niewadzi',
		email: 't.nniewadzi@gmail.com',
	},
];

var contactForm = {
	firstName: '',
	lastName: '',
	email: ''
};

var App = React.createClass({
	render: function() {
		return(
			<div className={'app'}>
				<ContactForm contact={contactForm} />
				<Contacts items={contacts} />
			</div>
		);
	}
});

