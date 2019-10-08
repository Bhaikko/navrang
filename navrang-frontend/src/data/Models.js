// This file is temporary and will be deleted once database is established

export class Achievements {
    constructor ( id, imageUrl, title, subtitle, description, date) {
        this.id = id;
        this.imageUrl = imageUrl;
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.date = date;
    }
}

export class Team {
    constructor (id, name, image, designation, about, contact) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.designation = designation;
        this.about = about;
        this.contact = contact;
    }
}

export class Event {
    constructor (id, name, date, link, imageUrl, info) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.link = link;
        this.imageUrl = imageUrl;
        this.info = info;
    }
}
