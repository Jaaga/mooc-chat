var rooms = [
  {name: 'Moocy-Talky', members: 3, last_activity: '1 minute ago',
    messages: [
      {author: 'Moocy', text: 'Hi there!'},
      {author: 'Dog', text: 'Hey Moocy, how are you?'},
      {author: 'LOL', text: 'What the f**k are you guys talking about?'},
      {author: 'Moo', text: 'Wow! Mooc-chat is awesome!'},
    ]},
  {name: 'Mooc-chat defaulters', members: 2, last_activity: '5 minutes ago'},
  {name: 'Mooc-chat Core', members: 0, last_activity: '3 days ago'}
];
 
Template.room.helpers({
  room: rooms[0]
});

Template.roomList.helpers({
  rooms: rooms
});