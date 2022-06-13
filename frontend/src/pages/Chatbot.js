import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import '../assets/bot_image.jpg'
const steps = [
	{
		id: '0',
		message: 'Hello folk!',

		// This calls the next id
		// i.e. id 1 in this case
		trigger: '1',
	}, {
		id: '1',

		// This message appears in
		// the bot chat bubble
		message: 'Please write your username',
		trigger: '2'
	}, {
		id: '2',

		// Here we want the user
		// to enter input
		user: true,
		trigger: '3',
	}, {
		id: '3',
		message: " hi {previousValue}, how can I help you?",
		trigger: 4
	}, {
		id: '4',
		options: [
			
			// When we need to show a number of
			// options to choose we create alist
			// like this
			{ value: 1, label: 'View Courses' },
			{ value: 2, label: 'Read Articles' },

		],
		end: true
	}
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
	botAvatar: '../assets/bot_image.jpg',
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
					steps={steps}
					{...config}

				/>
			</ThemeProvider>
		</div>
	);
}

export default Chat;
