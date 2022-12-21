const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');

//Get username and room from URL
// const { username, room } = Qs.parse(location.search, {
//    ignoreQueryPrefix: true,
// });

const cookies = document.cookie.split('; ');

const room = cookies
   .find((value) => value.includes('room'))
   .split('=')
   .at(-1);

const username = cookies
   .find((value) => value.includes('name'))
   .split('=')
   .at(-1);

const socket = io();

//Join chatroom
socket.emit('joinRoom', { username, room });

//Get room and users
socket.on('roomUsers', ({ users }) => {
   outputRoomName(room);
   outputUsers(users);
});

//message from server
socket.on('message', (message) => {
   outputMessage(message);

   //Scroll down
   chatMessages.scrollTop = chatMessages.scrollHeight;
});

//Message submit
chatForm.addEventListener('submit', (e) => {
   e.preventDefault();

   // Get message text
   const msg = e.target.elements.msg.value;

   //Emit message to server
   socket.emit('chatMessage', msg);

   // clear input
   e.target.elements.msg.value = '';
   e.target.elements.msg.focus();
});

//output message to DOM
function outputMessage(message) {
   const div = document.createElement('div');
   div.classList.add('message');
   div.innerHTML = `<p class="meta">${message.username}<span>${message.time}</span></p>
    <p class="text">
    ${message.text}    
    </p>`;
   document.querySelector('.chat-messages').appendChild(div);
}

//add room name to DOM
function outputRoomName(room) {
   roomName.innerText = room;
}

// add users to DOM
function outputUsers(users) {
   userList.innerHTML = `
    ${users.map((user) => `<li>${user.username}</li>`).join('')}
    `;
}
