import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import MonthlyUpdate from '../pages/MonthlyUpdate';
import '../assets/bot_image.jpg'
import Button from "../components/Button";
import { Link } from 'react-router-dom';
const steps = [
	{
		id: 'welcome',
		message: 'Hello!',
		trigger: 'q-firstname',
	},
	/* Paste */
	{
		id: 'q-firstname',
		message: 'What is your  name?',
		trigger: 'firstname',
	},
	{
		id: 'firstname',
		user: true,
		validator: (value) => {
			if (/^[A-Za-z]+$/.test(value)) {
				return true
			} else {
				return 'Please input alphabet characters only.'
			}
		},
		trigger: 'rmcbot',
	},
	{
		id: 'rmcbot',
		message:
			`Hi {previousValue}! I am St.Jude's Helpline Bot! What can I do for you?`,
		trigger: 'qtype',
	},
	{
		id: 'qtype',
		options: [
			{ value: 1, label: 'Request For Aid', trigger: '3' },
			{ value: 2, label: 'Do you want to update your monthly reports ?', trigger: '4' },
			{ value: 3, label: 'Need Counselling', trigger: '5' },
			{ value: 4, label: 'Do you want know more?', trigger: '6' },
			{ value: 5, label: 'Do you need any help? ', trigger: '6' }
		],
	},
	{
		id: '3',

		component: (
			<div>
				<Link to="/forms/request-aid/financial"><Button label="Submit" filled className='w-1/2'>
					Financial Aid
				</Button></Link>
				<Link to="/forms/request-aid/non-financial">
					<Button label="Submit" filled className='w-1/2'>
						Non Financial Aid
					</Button></Link> </div>
		),
		trigger: 'qtype',
	},
	{
		id: '4',
		component: <MonthlyUpdate />,
		trigger: 'qtype',
	},
	{
		id: '5',
		message:
			'If you need any counselling, you can contact to this number. Contact: 022-66663152',

		trigger: 'qtype',
	},
	{
		id: '6',
		message:
			'For more details - Contact: 022-66663152',
		trigger: 'q-submit',
	},
	{
		id: 'q-submit',
		message: 'Do you have any other questions !?',
		trigger: 'submit',
	},
	{
		id: 'submit',
		options: [
			{ value: 'y', label: 'Yes', trigger: 'no-submit' },
			{ value: 'n', label: 'No', trigger: 'end-message' },
		],
	},
	{
		id: 'no-submit',
		options: [
			{ value: 1, label: 'Request For Aid', trigger: '3' },
			{ value: 2, label: 'Do you want to update your monthly reports ?', trigger: '4' },
			{ value: 3, label: 'Need Counselling', trigger: '5' },
			{ value: 4, label: 'Do you want know more?', trigger: '6' },
			{ value: 5, label: 'Do you need any help? ', trigger: '6' }
		],
	},
	{
		id: 'end-message',
		message: 'Good to see you!',
		asMessage: true,
		end: true,
	},
];
// Creating our own theme
const theme = {
	background: '#EEEEEE',
	fontFamily: 'Poppins,sans-serif',
	headerBgColor: '#008891',
	headerFontSize: '20px',
	botBubbleColor: '#008891',
	headerFontColor: 'white',
	botFontColor: 'white',
	userBubbleColor: '#0f3057',
	userFontColor: 'white',
};

// Set some properties of the bot
const config = {
	botAvatar: "B",
	floating: true,
};

function Chat() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<ChatBot

					// This appears as the header
					// text for the chat bot

					headerTitle="Chatbot"
					speechSynthesis={{ enable: true, lang: 'en' }}
					steps={steps}
					{...config}

				/>
			</ThemeProvider>
		</div>
	);
}

export default Chat;
