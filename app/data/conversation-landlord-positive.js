module.exports = {
  messages: [
    {
      sender: 'tenant',
      text: 'Hello. I\'m messaging you to tell you that a pipe has burst in the flat.',
      datestamp: '5 May 2015'
    },
    {
      sender: 'landlord',
      text: 'Hello tenant. Oh no. Let\'s get that repaired as soon as possible. Can you give me some more information.',
      datestamp: '5 May 2015'
    },
    {
      sender: 'tenant',
      text: 'Sure. Here\'s a pic of the burst pipe. It burst on Sunday evening around 8pm. Not long after I started a load of washing.',
      imageUrl: '/public/images/pipe.jpg',
      datestamp: '5 May 2015'
    },
    {
      sender: 'landlord',
      text: 'Thanks for the information. I will get in touch with a plumber ASAP to get that fixed for you. I\'ll be in touch with the details shortly.',
      datestamp: '5 May 2015'
    },
    {
      sender: 'tenant',
      text: 'Hi, just following up on this. It\'s been 3 days and I haven\'t heard anything about the plumber. The leak is still ongoing.',
      datestamp: '8 May 2015'
    },
    // --- POSITIVE RESOLUTION PATH STARTS HERE ---
    {
      sender: 'landlord',
      text: 'My sincere apologies for the delay. My usual plumber wasn\'t available. I understand this is urgent, so I have booked another company. They are confirmed to visit tomorrow morning between 9 AM and 11 AM.',
      datestamp: '8 May 2015'
    },
    {
      sender: 'tenant',
      text: 'That\'s great news, thank you. 9-11 AM tomorrow is perfect.',
      datestamp: '8 May 2015'
    },
    {
      sender: 'tenant',
      text: 'Just to let you know, the plumber has been and the pipe is all fixed now. Thanks for sorting it.',
      datestamp: '9 May 2015'
    },
    {
      sender: 'landlord',
      text: 'Excellent. Glad to hear it. Apologies again for the initial delay. Let me know if there are any other issues.',
      datestamp: '9 May 2015'
    }
  ]
}