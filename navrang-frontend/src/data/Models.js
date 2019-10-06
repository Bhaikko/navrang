// This file is temporary and will be deleted once database is established

export class Achievements {
    constructor ( id, imageUrl, title, description, date) {
        this.id = id;
        this.imageUrl = imageUrl;
        this.title = title;
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
