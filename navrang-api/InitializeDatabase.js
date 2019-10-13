// This file is likely to be remove in production. 
// It is only added to add data to database

const { 
    database,
    Admins,
    Issues,
    Achievements,
    Events,
    Team,
    Notices,
    Contacts
} = require("./database/database");

const ACHIEVEMENTS = [
    {
        imageUrl: "https://webstockreview.net/images/sample-png-images-2.png",
        title:  "title1",
        subtitle: "subtitle",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book., remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: new Date()
    },
    {
        imageUrl: "https://webstockreview.net/images/sample-png-images-2.png",
        title:  "title1",
        subtitle: "subtitle",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book., remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: new Date()
    },
    {
        imageUrl: "https://webstockreview.net/images/sample-png-images-2.png",
        title:  "title1",
        subtitle: "subtitle",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book., remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: new Date()
    },
    {
        imageUrl: "https://webstockreview.net/images/sample-png-images-2.png",
        title:  "title1",
        subtitle: "subtitle",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book., remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: new Date()
    },
    {
        imageUrl: "https://webstockreview.net/images/sample-png-images-2.png",
        title:  "title1",
        subtitle: "subtitle",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book., remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: new Date()
    },
    
]

const ADMINS = [
    {
        username: "admin",
        password: "password"
    }
]

const ALUMNI = [
    {
        name: "First Last",
        designation: "President",
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book., remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        contactLink: "https://www.instagram.com/manojverma333/",
        imageLink: "http://tcap.pbworks.com/f/1435170280/myAvatar.png"
    },
    {
        name: "First Last",
        designation: "President",
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book., remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        contactLink: "https://www.instagram.com/manojverma333/",
        imageLink: "http://tcap.pbworks.com/f/1435170280/myAvatar.png"
    },
    {
        name: "First Last",
        designation: "President",
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book., remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        contactLink: "https://www.instagram.com/manojverma333/",
        imageLink: "http://tcap.pbworks.com/f/1435170280/myAvatar.png"
    },
    {
        name: "First Last",
        designation: "President",
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book., remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        contactLink: "https://www.instagram.com/manojverma333/",
        imageLink: "http://tcap.pbworks.com/f/1435170280/myAvatar.png"
    },
    {
        name: "First Last",
        designation: "President",
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book., remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        contactLink: "https://www.instagram.com/manojverma333/",
        imageLink: "http://tcap.pbworks.com/f/1435170280/myAvatar.png"
    },
]

const EVENTS = [
    {
        name: "Event",
        lastDate: new Date(),
        registrationLink: "https://forms.gle/9sHDvwqW4yndm6zq9",
        imageLink: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/event-poster-template-e6771eeb0763814b21d0144eb8e91bdb.jpg?ts=1561498807",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book., remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },    
    {
        name: "Event",
        lastDate: new Date(),
        registrationLink: "https://forms.gle/9sHDvwqW4yndm6zq9",
        imageLink: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/event-poster-template-e6771eeb0763814b21d0144eb8e91bdb.jpg?ts=1561498807",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book., remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },    
    {
        name: "Event",
        lastDate: new Date(),
        registrationLink: "https://forms.gle/9sHDvwqW4yndm6zq9",
        imageLink: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/event-poster-template-e6771eeb0763814b21d0144eb8e91bdb.jpg?ts=1561498807",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book., remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },    
    {
        name: "Event",
        lastDate: new Date(),
        registrationLink: "https://forms.gle/9sHDvwqW4yndm6zq9",
        imageLink: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/event-poster-template-e6771eeb0763814b21d0144eb8e91bdb.jpg?ts=1561498807",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book., remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },    
    {
        name: "Event",
        lastDate: new Date(),
        registrationLink: "https://forms.gle/9sHDvwqW4yndm6zq9",
        imageLink: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/event-poster-template-e6771eeb0763814b21d0144eb8e91bdb.jpg?ts=1561498807",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book., remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },    
    {
        name: "Event",
        lastDate: new Date(),
        registrationLink: "https://forms.gle/9sHDvwqW4yndm6zq9",
        imageLink: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/event-poster-template-e6771eeb0763814b21d0144eb8e91bdb.jpg?ts=1561498807",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book., remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },    
]

const NOTICES = [
    {
        title: "Notice Title",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book., remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        name: "Nikhil Kumar",
        designation: "President",
        date: new Date(),
        fileLink: "https://file-examples.com/wp-content/uploads/2017/10/file-sample_150kB.pdf"
    },   
    {
        title: "Notice Title",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book., remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        name: "Nikhil Kumar",
        designation: "President",
        date: new Date(),
        fileLink: "https://file-examples.com/wp-content/uploads/2017/10/file-sample_150kB.pdf"
    },   
    {
        title: "Notice Title",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book., remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        name: "Nikhil Kumar",
        designation: "President",
        date: new Date(),
        fileLink: "https://file-examples.com/wp-content/uploads/2017/10/file-sample_150kB.pdf"
    },   
    {
        title: "Notice Title",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book., remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        name: "Nikhil Kumar",
        designation: "President",
        date: new Date(),
        fileLink: "https://file-examples.com/wp-content/uploads/2017/10/file-sample_150kB.pdf"
    },   
    {
        title: "Notice Title",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book., remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        name: "Nikhil Kumar",
        designation: "President",
        date: new Date(),
        fileLink: "https://file-examples.com/wp-content/uploads/2017/10/file-sample_150kB.pdf"
    },   
    {
        title: "Notice Title",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book., remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        name: "Nikhil Kumar",
        designation: "President",
        date: new Date(),
        fileLink: "https://file-examples.com/wp-content/uploads/2017/10/file-sample_150kB.pdf"
    },   
]

const CONTACTS = [
    {
        name: "First Last",
        phone: "9999999999",
        email: "abc@gmail.com"
    },
    {
        name: "First Last",
        phone: "9999999999",
        email: "abc@gmail.com"
    },
    {
        name: "First Last",
        phone: "9999999999",
        email: "abc@gmail.com"
    },
    {
        name: "First Last",
        phone: "9999999999",
        email: "abc@gmail.com"
    },
    {
        name: "First Last",
        phone: "9999999999",
        email: "abc@gmail.com"
    },
    {
        name: "First Last",
        phone: "9999999999",
        email: "abc@gmail.com"
    },
]

const ISSUES = [
    {
        senderName: "First Name",
        senderEmail: "abc@gmail.com",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book., remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: new Date()
    },
    {
        senderName: "First Name",
        senderEmail: "abc@gmail.com",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book., remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: new Date()
    },
    {
        senderName: "First Name",
        senderEmail: "abc@gmail.com",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book., remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: new Date()
    },
    {
        senderName: "First Name",
        senderEmail: "abc@gmail.com",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book., remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: new Date()
    },
    {
        senderName: "First Name",
        senderEmail: "abc@gmail.com",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book., remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: new Date()
    },
]

ACHIEVEMENTS.map(a => Achievements.create(a));
ADMINS.map(a => Admins.create(a));
ALUMNI.map(a => Team.create(a));
EVENTS.map(a => Events.create(a));
NOTICES.map(a => Notices.create(a));
CONTACTS.map(a => Contacts.create(a));
ISSUES.map(a => Issues.create(a));