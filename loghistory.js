var twows = {
  Title: 'The Wolf of Wall Street',
  Description:
    'In 1987, Jordan Belfort (Leonardo DiCaprio) takes an entry-level job at a Wall Street brokerage firm. By the early 1990s, while still in his 20s, Belfort founds his own firm, Stratton Oakmont. Together with his trusted lieutenant (Jonah Hill) and a merry band of brokers, Belfort makes a huge fortune by defrauding wealthy investors out of millions. However, while Belfort and his cronies partake in a hedonistic brew of sex, drugs and thrills, the SEC and the FBI close in on his empire of excess.',
  Director: {
    id: ObjectId('5f600926b9c87ebe8a5bba0f'),
    Name: 'Martin Scorsese',
    Birth: '1942-11-17',
    Death: null,
  },
  Genre: [
    {
      Name: 'Comedy',
      Description:
        'Comedy is a genre of film in which the main emphasis is on humor. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect.',
    },
    {
      Name: 'Crime',
      Description:
        'Crime films, in the broadest sense, is a film genre inspired by and analogous to the crime fiction literary genre. Films of this genre generally involve various aspects of crime and its detection. Stylistically, the genre may overlap and combine with many other genres, such as drama or gangster film, but also include comedy, and, in turn, is divided into many sub-genres, such as mystery, suspense or noir.',
    },
  ],
  ImageURL:
    'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSV0LgOQa5U3_Pqkw-u499miFBSQxmrzPYf-NVdJTUUYrN6Vcjf',
  Featured: true,
  Actors: [ObjectId("5f603b0eb9c87ebe8a5bba16"), ObjectId("5f603b0eb9c87ebe8a5bba17"), ObjectId("5f603b0eb9c87ebe8a5bba18")],
  ReleaseDate: '2013-12-25',
  IMDbRating: '8.2',
  RunTime: '3hr',
}

var constantine = {
  Title: 'Constantine',
  Description:
    "As a suicide survivor, demon hunter John Constantine (Keanu Reeves) has literally been to hell and back -- and he knows that when he dies, he's got a one-way ticket to Satan's realm unless he can earn enough goodwill to climb God's stairway to heaven. While helping policewoman Angela Dodson (Rachel Weisz) investigate her identical twin's apparent suicide, Constantine becomes caught up in a supernatural plot involving both demonic and angelic forces. Based on the DC/Vertigo 'Hellblazer' comics.",
  Director: {
    id: ObjectId('5f600927b9c87ebe8a5bba10'),
    Name: 'Francis Lawrence',
    Birth: '1971-03-26',
    Death: null,
  },
  Genre: [
    {
      Name: 'Action',
      Description:
        'Action film is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats and frantic chases.',
    },
    {
      Name: 'Fantasy',
      Description:
        'Fantasy is a genre of speculative fiction set in a fictional universe, often inspired by real world myth and folklore. Its roots are in oral traditions, which then became fantasy literature and drama.',
    },
    {
      Name: 'Horror',
      Description:
        'A horror film is one that seeks to elicit fear in its audience, for entertainment purposes. Initially inspired by literature from authors such as Edgar Allan Poe, Bram Stoker, and Mary Shelley, horror has existed as a film genre for more than a century. The macabre and the supernatural are frequent themes. Horror may also overlap with the fantasy, supernatural fiction, and thriller genres.',
    },
  ],
  ImageURL:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSspP2ltQ55mD37PZRBGzlJKI-04mk6u9UruNUI9ZCu6DlQ1Kwa',
  Featured: true,
  Actors: [ObjectId("5f603b0eb9c87ebe8a5bba19"), ObjectId("5f603b0eb9c87ebe8a5bba1a"), ObjectId("5f603b0eb9c87ebe8a5bba1b")],
  ReleaseDate: '2005-02-18',
  IMDbRating: '7.0',
  RunTime: '2hr 1min',
}
var rocky = {
  Title: 'Rocky',
  Description:
    "Rocky Balboa (Sylvester Stallone), a small-time boxer from working-class Philadelphia, is arbitrarily chosen to take on the reigning world heavyweight champion, Apollo Creed (Carl Weathers), when the undefeated fighter's scheduled opponent is injured. While training with feisty former bantamweight contender Mickey Goldmill (Burgess Meredith), Rocky tentatively begins a relationship with Adrian (Talia Shire), the wallflower sister of his meat-packer pal Paulie (Burt Young).",
  Director: {
    id: ObjectId('5f600927b9c87ebe8a5bba11'),
    Name: 'John G. Avildsen',
    Birth: '1935-12-21',
    Death: '2017-06-16',
  },
  Genre: [
    {
      Name: 'Drama',
      Description:
        "In film and television, drama is a category of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone. Drama of this kind is usually qualified with additional terms that specify its particular super-genre, macro-genre or micro-genre such as 'police crime drama', 'political drama', 'legal drama', 'historical drama', 'domestic drama', 'teen drama' or 'comedy-drama'. These terms tend to indicate a particular setting or subject-matter, or else they qualify the otherwise serious tone of a drama with elements that encourage a broader range of moods.",
    },
    {
      Name: 'Sports',
      Description:
        'A sports film is a film genre that uses sport as the theme of the film. It is a production in which a sport, sporting event, athlete (and their sport), or follower of sport (and the sport they follow) are prominently featured, and which depend on sport to a significant degree for their plot motivation or resolution. Despite this, sport is ultimately rarely the central concern of such films and sport performs primarily an allegorical role. Furthermore, sports fans are not necessarily the target demographic in such movies, but sports fans tend to have a large following or respect for such movies.',
    },
  ],
  ImageURL:
    'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTz1dN7OPQgN4RLlkfuxn_VQO1ZgFdxIGHUF1I2H2sKeFnA8dB0',
  Featured: false,
  Actors: [ObjectId("5f603b0eb9c87ebe8a5bba1c"), ObjectId("5f603b0eb9c87ebe8a5bba1d"), ObjectId("5f603b0eb9c87ebe8a5bba1e")],
  ReleaseDate: '1976-12-03',
  IMDbRating: '8.1',
  RunTime: '2h',
}
var fightclub = {
  Title: 'Fight Club',
  Description:
    "A depressed man (Edward Norton) suffering from insomnia meets a strange soap salesman named Tyler Durden (Brad Pitt) and soon finds himself living in his squalid house after his perfect apartment is destroyed. The two bored men form an underground club with strict rules and fight other men who are fed up with their mundane lives. Their perfect partnership frays when Marla (Helena Bonham Carter), a fellow support group crasher, attracts Tyler's attention.",
  Director: {
    id: ObjectId('5f600927b9c87ebe8a5bba12'),
    Name: 'David Fincher',
    Birth: '1962-08-28',
    Death: null,
  },
  Genre: [
    {
      Name: 'Drama',
      Description:
        "In film and television, drama is a category of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone. Drama of this kind is usually qualified with additional terms that specify its particular super-genre, macro-genre or micro-genre such as 'police crime drama', 'political drama', 'legal drama', 'historical drama', 'domestic drama', 'teen drama' or 'comedy-drama'. These terms tend to indicate a particular setting or subject-matter, or else they qualify the otherwise serious tone of a drama with elements that encourage a broader range of moods.",
    },
  ],
  ImageURL:
    'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSor8IGjk4o_CD4Tc6I4JQL3AFKtSpaMr_YvsbWmZ4kfNqiORHO',
  Featured: false,
  Actors: [ObjectId("5f603b0eb9c87ebe8a5bba1f"), ObjectId("5f603b0eb9c87ebe8a5bba20"), ObjectId("5f603b0eb9c87ebe8a5bba21")],
  ReleaseDate: '1999-10-15',
  IMDbRating: '8.8',
}
var inception = {
  Title: 'Inception',
  Description:
    "Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people's dreams and steal their secrets from their subconscious. His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves. Cobb gets a chance at redemption when he is offered a seemingly impossible task: Plant an idea in someone's mind. If he succeeds, it will be the perfect crime, but a dangerous enemy anticipates Cobb's every move.",
  Director: {
    id: ObjectId('5f600926b9c87ebe8a5bba0e'),
    Name: 'Christopher Nolan',
    Brith: '1970-07-30',
    Death: null,
  },
  Genre: [
    {
      Name: 'Action',
      Description:
        'Action film is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats and frantic chases.',
    },
    {
      Name: 'Adventure',
      Description:
        'Adventure films are a genre of film whose plots feature elements of travel. They typically involve protagonists who must leave their home or place of comfort and go to far away lands to fulfill a goal. Settings play an important role in Adventure films, sometimes as big as the characters themselves.',
    },
    {
      Name: 'Sci-Fi',
      Description:
        'Science fiction is a genre of speculative fiction that typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life.',
    },
  ],
  ImageURL:
    'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ1wNJi3WBo8wjZ-lxg4xPbg6-X7tQ1w6ZFI5L-RH1rUiOOGxLO',
  Featured: true,
  Actors: [ObjectId("5f603b0eb9c87ebe8a5bba16"), ObjectId("5f603b0eb9c87ebe8a5bba22"), ObjectId("5f603b0eb9c87ebe8a5bba23")],
  ReleaseDate: '2010-07-16',
  IMDbRating: '8.8',
  RunTime: '2h 28min',
}
var interstella = {
  Title: 'Interstellar',
  Description:
    "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home.",
  Director: {
    id: ObjectId('5f600926b9c87ebe8a5bba0e'),
    Name: 'Christopher Nolan',
    Birth: '1970-07-30',
    Death: null,
  },
  Genre: [
    {
      Name: 'Adventure',
      Description:
        'Adventure films are a genre of film whose plots feature elements of travel. They typically involve protagonists who must leave their home or place of comfort and go to far away lands to fulfill a goal. Settings play an important role in Adventure films, sometimes as big as the characters themselves.',
    },
    {
      Name: 'Sci-Fi',
      Description:
        'Science fiction is a genre of speculative fiction that typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life.',
    },
  ],
  ImageURL:
    'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRZ6zThgOVkj9RFuoFIKyyyZl4E1zpxJrl-UjqRrOEV0DoRcDKY',
  Featured: true,
  Actors: [ObjectId("5f603b0eb9c87ebe8a5bba24"), ObjectId("5f603b0eb9c87ebe8a5bba25"), ObjectId("5f603b0eb9c87ebe8a5bba26")],
  ReleaseDate: '2014-11-07',
  IMDbRating: '8.6',
  RunTime: '2h 49min',
}
var johnwick = {
  Title: 'John Wick',
  Description:
    "Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life. Her sudden death leaves John in deep mourning. When sadistic mobster Iosef Tarasov (Alfie Allen) and his thugs steal John's prized car and kill the puppy that was a last gift from his wife, John unleashes the remorseless killing machine within and seeks vengeance. Meanwhile, Iosef's father (Michael Nyqvist) -- John's former colleague -- puts a huge bounty on John's head.",
  Director: {
    id: ObjectId('5f600927b9c87ebe8a5bba13'),
    Name: 'Chad Stahelski',
    Birth: '1968-09-20',
    Death: null,
  },
  Genre: [
    {
      Name: 'Action',
      Description:
        'Action film is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats and frantic chases.',
    },
    {
      Name: 'Crime',
      Description:
        'Crime films, in the broadest sense, is a film genre inspired by and analogous to the crime fiction literary genre. Films of this genre generally involve various aspects of crime and its detection. Stylistically, the genre may overlap and combine with many other genres, such as drama or gangster film, but also include comedy, and, in turn, is divided into many sub-genres, such as mystery, suspense or noir.',
    },
    {
      Name: 'Thriller',
      Description:
        'Thriller film, also known as suspense film or suspense thriller, is a broad film genre that involves excitement and suspense in the audience.',
    },
  ],
  ImageURL:
    'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR5CLEKHVAqi_Co7CGLkk6S0vufADRmSZP8gO_kGrWJBUH0B2TK',
  Featured: false,
  Actors: [ObjectId("5f603b0eb9c87ebe8a5bba19"), ObjectId("5f603b0eb9c87ebe8a5bba27"), ObjectId("5f603b0eb9c87ebe8a5bba28")],
  ReleaseDate: '2014-10-24',
  IMDbRating: '7.4',
  RunTime: '1h 41min',
}
var irishman = {
  Title: 'The Irishman',
  Description:
    'In the 1950s, truck driver Frank Sheeran gets involved with Russell Bufalino and his Pennsylvania crime family. As Sheeran climbs the ranks to become a top hit man, he also goes to work for Jimmy Hoffa -- a powerful Teamster tied to organized crime.',
  Director: {
    id: ObjectId('5f600926b9c87ebe8a5bba0f'),
    Name: 'Martin Scorsese',
    Birth: '1942-11-17',
    Death: null,
  },
  Genre: [
    {
      Name: 'Biography',
      Description:
        "A biographical film, or biopic, is a film that dramatizes the life of a non-fictional or historically-based person or people. Such films show the life of a historical person and the central character's real name is used. They differ from docudrama films and historical drama films in that they attempt to comprehensively tell a single person's life story or at least the most historically important years of their lives.",
    },
    {
      Name: 'Crime',
      Description:
        'Crime films, in the broadest sense, is a film genre inspired by and analogous to the crime fiction literary genre. Films of this genre generally involve various aspects of crime and its detection. Stylistically, the genre may overlap and combine with many other genres, such as drama or gangster film, but also include comedy, and, in turn, is divided into many sub-genres, such as mystery, suspense or noir.',
    },
    {
      Name: 'Drama',
      Description:
        "In film and television, drama is a category of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone. Drama of this kind is usually qualified with additional terms that specify its particular super-genre, macro-genre or micro-genre such as 'police crime drama', 'political drama', 'legal drama', 'historical drama', 'domestic drama', 'teen drama' or 'comedy-drama'. These terms tend to indicate a particular setting or subject-matter, or else they qualify the otherwise serious tone of a drama with elements that encourage a broader range of moods.",
    },
  ],
  ImageURL:
    'https://www.plymouth.edu/theclock/wp-content/uploads/sites/183/2019/12/irishman.jpg',
  Featured: true,
  Actors: [ObjectId("5f603b0eb9c87ebe8a5bba29"), ObjectId("5f603b0eb9c87ebe8a5bba2a"), ObjectId("5f603b0eb9c87ebe8a5bba2b")],
  ReleaseDate: '2019-11-27',
  IMDbRating: '7.9',
  RunTime: '3h 29min',
}
var shutterisland = {
  Title: 'Shutter Island',
  Description:
    'The implausible escape of a brilliant murderess brings U.S. Marshal Teddy Daniels (Leonardo DiCaprio) and his new partner (Mark Ruffalo) to Ashecliffe Hospital, a fortress-like insane asylum located on a remote, windswept island. The woman appears to have vanished from a locked room, and there are hints of terrible deeds committed within the hospital walls. As the investigation deepens, Teddy realizes he will have to confront his own dark fears if he hopes to make it off the island alive.',
  Director: {
    id: ObjectId('5f600926b9c87ebe8a5bba0f'),
    Name: 'Martin Scorsese',
    Birth: '1942-11-17',
    Death: null,
  },
  Genre: [
    {
      Name: 'Mystery',
      Description:
        'A mystery film is a genre of film that revolves around the solution of a problem or a crime. It focuses on the efforts of the detective, private investigator or amateur sleuth to solve the mysterious circumstances of an issue by means of clues, investigation, and clever deduction.',
    },
    {
      Name: 'Thriller',
      Description:
        'Thriller film, also known as suspense film or suspense thriller, is a broad film genre that involves excitement and suspense in the audience.',
    },
  ],
  ImageURL:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqNXzVw7AYiJs6DSs8lJ41YjPcSSFulGZUYcEmSf49rhaBUH-l',
  Featured: false,
  Actors: [ObjectId("5f603b0eb9c87ebe8a5bba16"), ObjectId("5f603b0eb9c87ebe8a5bba2c"), ObjectId("5f603b0eb9c87ebe8a5bba2d")],
  ReleaseDate: '2010-02-19',
  IMDbRating: '8.2',
  RunTime: '2h 18min',
}
var edgeoftomorrow = {
  Title: 'Edge of Tomorrow',
  Description:
    "When Earth falls under attack from invincible aliens, no military unit in the world is able to beat them. Maj. William Cage (Tom Cruise), an officer who has never seen combat, is assigned to a suicide mission. Killed within moments, Cage finds himself thrown into a time loop, in which he relives the same brutal fight -- and his death -- over and over again. However, Cage's fighting skills improve with each encore, bringing him and a comrade (Emily Blunt) ever closer to defeating the aliens.",
  Director: {
    id: ObjectId('5f600929b9c87ebe8a5bba15'),
    Name: 'Doug Liman',
    Birth: '1965-07-24',
    Death: null,
  },
  Genre: [
    {
      Name: 'Action',
      Description:
        'Action film is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats and frantic chases.',
    },
    {
      Name: 'Adventure',
      Description:
        'Adventure films are a genre of film whose plots feature elements of travel. They typically involve protagonists who must leave their home or place of comfort and go to far away lands to fulfill a goal. Settings play an important role in Adventure films, sometimes as big as the characters themselves.',
    },
    {
      Name: 'Sci-Fi',
      Description:
        'Science fiction is a genre of speculative fiction that typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life.',
    },
  ],
  ImageURL:
    'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQCYVQQgDfDRjjVgPrtpdTVmJkLyWFu49jHe5mfXwc4X5u9GuEn',
  Featured: true,
  Actors: [ObjectId("5f603b0eb9c87ebe8a5bba2e"), ObjectId("5f603b0eb9c87ebe8a5bba2f"), ObjectId("5f603b0eb9c87ebe8a5bba30")],
  ReleaseDate: '2014-06-06',
  IMDbRating: '7.9',
  RunTime: '1h 53min',
}
var jumper = {
  Title: 'Jumper',
  Description:
    "Aimless David Rice (Hayden Christensen) has the ability to instantly transport himself to any place he can imagine. He uses that gift to globe-trot, living on money he steals by 'jumping' into bank vaults. He's captured by the evil Roland Cox (Samuel L. Jackson), who knows how to keep David from jumping. David escapes and reunites with his high school crush, Millie (Rachel Bilson), then forms an alliance with fellow jumper Griffin (Jamie Bell) and prepares for mortal combat with Cox.",
  Director: {
    id: ObjectId('5f600929b9c87ebe8a5bba15'),
    Name: 'Doug Liman',
    Birth: '1965-07-24',
    Death: null,
  },
  Genre: [
    {
      Name: 'Action',
      Description:
        'Action film is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats and frantic chases.',
    },
    {
      Name: 'Adventure',
      Description:
        'Adventure films are a genre of film whose plots feature elements of travel. They typically involve protagonists who must leave their home or place of comfort and go to far away lands to fulfill a goal. Settings play an important role in Adventure films, sometimes as big as the characters themselves.',
    },
    {
      Name: 'Sci-Fi',
      Description:
        'Science fiction is a genre of speculative fiction that typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life.',
    },
  ],
  ImageURL:
    'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTLBVPkFBMsuBU_K0WZQ5CMO7Z2Ixzo_URCn0OFcAaHTxxYW6xz',
  Featured: false,
  Actors: [ObjectId("5f603b0fb9c87ebe8a5bba31"), ObjectId("5f603b0fb9c87ebe8a5bba32"), ObjectId("5f603b0fb9c87ebe8a5bba33")],
  ReleaseDate: '2008-02-14',
  IMDbRating: '6.1',
  RunTime: '1h 28',
}
var abouttime = {
  Title: 'About Time',
  Description:
    "When Tim Lake (Domhnall Gleeson) is 21, his father (Bill Nighy) tells him a secret: The men in their family can travel through time. Although he can't change history, Tim resolves to improve his life by getting a girlfriend. He meets Mary (Rachel McAdams), falls in love and finally wins her heart via time-travel and a little cunning. However, as his unusual life progresses, Tim finds that his special ability can't shield him and those he loves from the problems of ordinary life.",
  Director: {
    id: ObjectId('5f600927b9c87ebe8a5bba14'),
    Name: 'Richard Curtis',
    Birth: '1956-11-08',
    Death: null,
  },
  Genre: [
    {
      Name: 'Comedy',
      Description:
        'Comedy is a genre of film in which the main emphasis is on humor. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect.',
    },
    {
      Name: 'Drama',
      Description:
        "In film and television, drama is a category of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone. Drama of this kind is usually qualified with additional terms that specify its particular super-genre, macro-genre or micro-genre such as 'police crime drama', 'political drama', 'legal drama', 'historical drama', 'domestic drama', 'teen drama' or 'comedy-drama'. These terms tend to indicate a particular setting or subject-matter, or else they qualify the otherwise serious tone of a drama with elements that encourage a broader range of moods.",
    },
    {
      Name: 'Fantasy',
      Description:
        'Fantasy is a genre of speculative fiction set in a fictional universe, often inspired by real world myth and folklore. Its roots are in oral traditions, which then became fantasy literature and drama.',
    },
  ],
  ImageURL:
    'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT9iKMpedwgBIdUBaW-9GppzoQsFmQhLlsnW-34AM1tCl8PPqqa',
  Featured: true,
  Actors: [ObjectId("5f603b0fb9c87ebe8a5bba34"), ObjectId("5f603b0fb9c87ebe8a5bba35"), ObjectId("5f603b0fb9c87ebe8a5bba36")],
  ReleaseDate: '2013-11-08',
  IMDbRating: '7.8',
  RunTime: '2h 3min',
}


db.movies.insertOne(twows)
db.movies.insertOne(constantine)
db.movies.insertOne(rocky)
db.movies.insertOne(fightclub)
db.movies.insertOne(inception)
db.movies.insertOne(interstella)
db.movies.insertOne(johnwick)
db.movies.insertOne(irishman)
db.movies.insertOne(shutterisland)
db.movies.insertOne(edgeoftomorrow)
db.movies.insertOne(jumper)
db.movies.insertOne(abouttime)




// > db.movies.insertOne(twows)
// {
//         "acknowledged" : true,
//         "insertedId" : ObjectId("5f603e51b9c87ebe8a5bba37")
// }
// > db.movies.insertOne(constantine)
// {
//         "acknowledged" : true,
//         "insertedId" : ObjectId("5f603e51b9c87ebe8a5bba38")
// }
// > db.movies.insertOne(rocky)
// {
//         "acknowledged" : true,
//         "insertedId" : ObjectId("5f603e51b9c87ebe8a5bba39")
// }
// > db.movies.insertOne(fightclub)
// {
//         "acknowledged" : true,
//         "insertedId" : ObjectId("5f603e51b9c87ebe8a5bba3a")
// }
// > db.movies.insertOne(inception)
// {
//         "acknowledged" : true,
//         "insertedId" : ObjectId("5f603e51b9c87ebe8a5bba3b")
// }
// > db.movies.insertOne(interstella)
// {
//         "acknowledged" : true,
//         "insertedId" : ObjectId("5f603e51b9c87ebe8a5bba3c")
// }
// > db.movies.insertOne(johnwick)
// {
//         "acknowledged" : true,
//         "insertedId" : ObjectId("5f603e51b9c87ebe8a5bba3d")
// }
// > db.movies.insertOne(irishman)
// {
//         "acknowledged" : true,
//         "insertedId" : ObjectId("5f603e51b9c87ebe8a5bba3e")
// }
// > db.movies.insertOne(shutterisland)
// {
//         "acknowledged" : true,
//         "insertedId" : ObjectId("5f603e51b9c87ebe8a5bba3f")
// }
// > db.movies.insertOne(edgeoftomorrow)
// {
//         "acknowledged" : true,
//         "insertedId" : ObjectId("5f603e51b9c87ebe8a5bba40")
// }
> db.movies.insertOne(jumper)
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f603e51b9c87ebe8a5bba41")
}
> db.movies.insertOne(abouttime)
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f603e54b9c87ebe8a5bba42")
}

db.movies.update({_id:ObjectId("5f603e51b9c87ebe8a5bba37")}, {$set: {Actors: ["Leonardo Di Caprio", "Jonah Hill", "Margot Robbie"]}})
db.movies.update({_id:ObjectId("5f603e51b9c87ebe8a5bba38")}, {$set: {Actors: ["Keanu Reeves", "Rachel Weisz", "Djimon Hounsou"]}})
db.movies.update({_id: ObjectId("5f603e51b9c87ebe8a5bba39")}, {$set: {Actors: ["Sylvester Stalone", "Talia Shire", "Burt Young"]}})
db.movies.update({_id: ObjectId("5f603e51b9c87ebe8a5bba3a")}, {$set: {Actors: ["Brad Pitt", "Edward Norton", "Meat Loaf"]}})
db.movies.update({_id: ObjectId("5f603e51b9c87ebe8a5bba3b")}, {$set: {Actors: ["Leonardo Di Caprio", "Joseph Gordon-Levitt", "Ellen Page"]}})
db.movies.update({_id: ObjectId("5f603e51b9c87ebe8a5bba3c")}, {$set: {Actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]}})
db.movies.update({_id: ObjectId("5f603e51b9c87ebe8a5bba3d")}, {$set: {Actors: ["Keanu Reeves", "Michael Nyqvist", "Alfie Allen"]}})
db.movies.update({_id: ObjectId("5f603e51b9c87ebe8a5bba3e")}, {$set: {Actors: ["Robert De Niro", "Al Pacino", "Joe Pesci"]}})
db.movies.update({_id: ObjectId("5f603e51b9c87ebe8a5bba3f")}, {$set: {Actors: ["Leonardo Di Caprio", "Emily Mortimer", "Mark Ruffalo"]}})
db.movies.update({_id: ObjectId("5f603e51b9c87ebe8a5bba40")}, {$set: {Actors: ["Tom Cruise", "Emily Blunt", "Bill Paxton"]}})
db.movies.update({_id: ObjectId("5f603e51b9c87ebe8a5bba41")}, {$set: {Actors: ["Hayden Christensen", "Samuel L. Jackson", "Jamie Bell"]}})
db.movies.update({_id: ObjectId("5f603e54b9c87ebe8a5bba42")}, {$set: {Actors: ["Domhnall Gleeson", "Rachel McAdams", "Bill Nighy"]}})


> db.actors.insertOne(ldc)
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f603b0eb9c87ebe8a5bba16")
}
> db.actors.insertOne(jonahhill)
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f603b0eb9c87ebe8a5bba17")
}
> db.actors.insertOne(margotrobbie)
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f603b0eb9c87ebe8a5bba18")
}
> db.actors.insertOne(keanureeves)
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f603b0eb9c87ebe8a5bba19")
}
> db.actors.insertOne(rachelweisz)
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f603b0eb9c87ebe8a5bba1a")
}
> db.actors.insertOne(djimonhounsou)
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f603b0eb9c87ebe8a5bba1b")
}
> db.actors.insertOne(sylvesterstallone)
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f603b0eb9c87ebe8a5bba1c")
}
> db.actors.insertOne(taliashire)
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f603b0eb9c87ebe8a5bba1d")
}
> db.actors.insertOne(burtyoung)
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f603b0eb9c87ebe8a5bba1e")
}
> db.actors.insertOne(bradpitt)
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f603b0eb9c87ebe8a5bba1f")
}
> db.actors.insertOne(edwardnorton)
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f603b0eb9c87ebe8a5bba20")
}
> db.actors.insertOne(meatloaf)
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f603b0eb9c87ebe8a5bba21")
}
> db.actors.insertOne(jgl)
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f603b0eb9c87ebe8a5bba22")
}
> db.actors.insertOne(ellenpage)
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f603b0eb9c87ebe8a5bba23")
}
> db.actors.insertOne(matthewmcconaughey)
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f603b0eb9c87ebe8a5bba24")
}
> db.actors.insertOne(annehathaway)
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f603b0eb9c87ebe8a5bba25")
}
> db.actors.insertOne(jessicachastain)
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f603b0eb9c87ebe8a5bba26")
}
> db.actors.insertOne(michaelnyqvist)
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f603b0eb9c87ebe8a5bba27")
}
> db.actors.insertOne(alfieallen)
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f603b0eb9c87ebe8a5bba28")
}
> db.actors.insertOne(robertdeniro)
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f603b0eb9c87ebe8a5bba29")
}
> db.actors.insertOne(alpacino)
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f603b0eb9c87ebe8a5bba2a")
}
> db.actors.insertOne(joepesci)
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f603b0eb9c87ebe8a5bba2b")
}
> db.actors.insertOne(emilymortimer)
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f603b0eb9c87ebe8a5bba2c")
}
> db.actors.insertOne(markruffalo)
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f603b0eb9c87ebe8a5bba2d")
}
> db.actors.insertOne(tomcruise)
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f603b0eb9c87ebe8a5bba2e")
}
> db.actors.insertOne(emilyblunt)
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f603b0eb9c87ebe8a5bba2f")
}
> db.actors.insertOne(billpaxton)
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f603b0eb9c87ebe8a5bba30")
}
> db.actors.insertOne(haydenchristensen)
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f603b0fb9c87ebe8a5bba31")
}
> db.actors.insertOne(samuelljackson)
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f603b0fb9c87ebe8a5bba32")
}
> db.actors.insertOne(jamiebell)
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f603b0fb9c87ebe8a5bba33")
}
> db.actors.insertOne(domhnallgleeson)
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f603b0fb9c87ebe8a5bba34")
}
> db.actors.insertOne(rachelmacadams)
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f603b0fb9c87ebe8a5bba35")
}
> db.actors.insertOne(billnighy)
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f603b0fb9c87ebe8a5bba36")
}


db.actors.update(
    {_id:ObjectId("5f603b0eb9c87ebe8a5bba16")}, {$set:{Birth:new Date("1974-11-11")}}
)
db.actors.update(
    {_id: ObjectId("5f603b0eb9c87ebe8a5bba17") }, {$set:{Birth:new Date("1983-12-20")}}
)
db.actors.update(
    {_id: ObjectId("5f603b0eb9c87ebe8a5bba18") }, {$set:{Birth:new Date("1990-07-02")}}
)
db.actors.update(
    {_id: ObjectId("5f603b0eb9c87ebe8a5bba19") }, {$set:{Birth:new Date("1964-09-02")}}
)
db.actors.update(
    {_id: ObjectId("5f603b0eb9c87ebe8a5bba1a") }, {$set:{Birth:new Date("1970-03-07")}}
)
db.actors.update(
    {_id: ObjectId("5f603b0eb9c87ebe8a5bba1b") }, {$set:{Birth:new Date("1964-04-24")}}
)
db.actors.update(
    {_id: ObjectId("5f603b0eb9c87ebe8a5bba1c") }, {$set:{Birth:new Date("1946-07-06")}}
)
db.actors.update(
    {_id: ObjectId("5f603b0eb9c87ebe8a5bba1d") }, {$set:{Birth:new Date("1946-04-25")}}
)
db.actors.update(
    {_id: ObjectId("5f603b0eb9c87ebe8a5bba1e") }, {$set:{Birth:new Date("1940-04-30")}}
)
db.actors.update(
    {_id: ObjectId("5f603b0eb9c87ebe8a5bba1f") }, {$set:{Birth:new Date("1963-12-18")}}
)
db.actors.update(
    {_id: ObjectId("5f603b0eb9c87ebe8a5bba20") }, {$set:{Birth:new Date("1969-08-18")}}
)
db.actors.update(
    {_id: ObjectId("5f603b0eb9c87ebe8a5bba21") }, {$set:{Birth:new Date("1947-09-27")}}
)
db.actors.update(
    {_id: ObjectId("5f603b0eb9c87ebe8a5bba22") }, {$set:{Birth:new Date("1981-02-17")}}
)
db.actors.update(
    {_id: ObjectId("5f603b0eb9c87ebe8a5bba23") }, {$set:{Birth:new Date("1987-02-21")}}
)
db.actors.update(
    {_id: ObjectId("5f603b0eb9c87ebe8a5bba24") }, {$set:{Birth:new Date("1969-11-04")}}
)
db.actors.update(
    {_id: ObjectId("5f603b0eb9c87ebe8a5bba25") }, {$set:{Birth:new Date("1982-11-12")}}
)
db.actors.update(
    {_id: ObjectId("5f603b0eb9c87ebe8a5bba26") }, {$set:{Birth:new Date("1977-03-24")}}
)
db.actors.update(
    {_id: ObjectId("5f603b0eb9c87ebe8a5bba27") }, {$set:{Birth:new Date("1960-11-08")}}
)
db.actors.update(
    {_id: ObjectId("5f603b0eb9c87ebe8a5bba28") }, {$set:{Birth:new Date("1986-09-12")}}
)
db.actors.update(
    {_id: ObjectId("5f603b0eb9c87ebe8a5bba29") }, {$set:{Birth:new Date("1943-08-17")}}
)
db.actors.update(
    {_id: ObjectId("5f603b0eb9c87ebe8a5bba2a") }, {$set:{Birth:new Date("1940-04-25")}}
)
db.actors.update(
    {_id: ObjectId("5f603b0eb9c87ebe8a5bba2b") }, {$set:{Birth:new Date("1943-02-09")}}
)
db.actors.update(
    {_id: ObjectId("5f603b0eb9c87ebe8a5bba2c") }, {$set:{Birth:new Date("1971-12-01")}}
)
db.actors.update(
    {_id: ObjectId("5f603b0eb9c87ebe8a5bba2d") }, {$set:{Birth:new Date("1967-11-22")}}
)
db.actors.update(
    {_id: ObjectId("5f603b0eb9c87ebe8a5bba2e") }, {$set:{Birth:new Date("1962-07-03")}}
)
db.actors.update(
    {_id: ObjectId("5f603b0eb9c87ebe8a5bba2f") }, {$set:{Birth:new Date("1983-02-23")}}
)
db.actors.update(
    {_id: ObjectId("5f603b0eb9c87ebe8a5bba30") }, {$set:{Birth:new Date("1955-05-17")}}
)
db.actors.update(
    {_id: ObjectId("5f603b0fb9c87ebe8a5bba31") }, {$set:{Birth:new Date("1981-04-19")}}
)
db.actors.update(
    {_id: ObjectId("5f603b0fb9c87ebe8a5bba32") }, {$set:{Birth:new Date("1948-12-21")}}
)
db.actors.update(
    {_id: ObjectId("5f603b0fb9c87ebe8a5bba33") }, {$set:{Birth:new Date("1986-03-14")}}
)
db.actors.update(
    {_id: ObjectId("5f603b0fb9c87ebe8a5bba34") }, {$set:{Birth:new Date("1983-05-12")}}
)
db.actors.update(
    {_id: ObjectId("5f603b0fb9c87ebe8a5bba35") }, {$set:{Birth:new Date("1978-11-17")}}
)
db.actors.update(
    {_id: ObjectId("5f603b0fb9c87ebe8a5bba36") }, {$set:{Birth:new Date("1949-12-12")}}
)














var ldc = {
    Name : "Leonardo Di Caprio",
    Birth : "1974-11-11",
    Death : null,
    Bio : "Leonardo Wilhelm DiCaprio is an American actor, producer, and environmentalist. He has often played unconventional roles, particularly in biopics and period films. As of 2019, his films have grossed US$7.2 billion worldwide, and he has placed eight times in annual rankings of the highest-paid actors in the world"
}

var jonahhill = {
    Name : "Jonah Hill",
    Birth : "1983-12-20",
    Death : null,
    Bio : "Jonah Hill Feldstein is an American actor, director, producer, screenwriter, and comedian. Hill is known for his comedic roles in films including Superbad (2007), Knocked Up (2007), Forgetting Sarah Marshall (2008), Get Him to the Greek (2010), 21 Jump Street (2012), This Is the End (2013), and 22 Jump Street (2014), as well as his dramatic performances in Moneyball (2011) and The Wolf of Wall Street (2013), for which he received Academy Award nominations for Best Supporting Actor."
}

var margotrobbie = {
    Name : "Margot Robbie",
    Birth : "1990-07-02",
    Death : null,
    Bio : "Margot Elise Robbie is an Australian actress and producer. She has received nominations for two Academy Awards and five BAFTA Awards. In 2017, Time magazine named her one of the 100 most influential people in the world, and in 2019, she was ranked among the world's highest-paid actresses."
}

var keanureeves = {
    Name : "Keanu Reeves",
    Birth : "1964-09-02",
    Death : null,
    Bio : "Keanu Charles Reeves is a Canadian actor. Born in Beirut, he grew up in Toronto. He began acting in theatre productions and in television films before making his feature film debut in Youngblood."
}

var rachelweisz = {
    Name : "Rachel Weisz",
    Birth : "1970-03-07",
    Death : null,
    Bio : "Rachel Hannah Weisz is a British-American actress. She is the recipient of several accolades, including an Academy Award, a Golden Globe Award, and a British Academy Film Award. Weisz began acting in British stage and television in the early 1990s, and made her film debut in Death Machine."
}

var djimonhounsou = {
    Name : "Djimon Hounsou",
    Birth : "1964-04-24",
    Death : null,
    Bio : "Djimon Gaston Hounsou is a Beninese actor and model. Hounsou began his career appearing in music videos. He made his film debut in the Sandra Bernhard film Without You I'm Nothing and gained widespread recognition for his role as Cinqué in the Steven Spielberg film Amistad."
}

var sylvesterstallone = {
    Name : "Sylvester Stallone",
    Birth : "1946-07-06",
    Death : null,
    Bio : "This athletically built, dark-haired American actor/screenwriter/director may never be mentioned by old-school film critics in the same breath as, say, Richard Burton or Alec Guinness however, movie fans worldwide have been flocking to see Stallone's films for over 30 years, making 'Sly' one of Hollywood's biggest-ever box office draws."
}

var taliashire = {
    Name : "Talia Shire",
    Birth : "1946-04-25",
    Death : null,
    Bio : "Talia Rose Shire is an American actress best known for her roles as Connie Corleone in The Godfather films and Adrian Balboa in the Rocky series."
}

var burtyoung = {
    Name : "Burt Young",
    Birth : "1940-04-30",
    Death : null,
    Bio : "Gerald Tommaso DeLouise, better known by his stage name Burt Young, is an American actor, author and painter. He is best known for his role as Rocky Balboa's brother-in-law and best friend Paulie Pennino in the Rocky film series, being nominated for the Academy Award for Best Supporting Actor for the first film."
}

var bradpitt = {
    Name : "Brad Pitt",
    Birth : "1963-12-18",
    Death : null,
    Bio : "William Bradley Pitt is an American actor and film producer. He has received multiple awards, including two Golden Globe Awards and an Academy Award for his acting, in addition to another Academy Award and a Primetime Emmy Award as producer under his production company, Plan B Entertainment."
}

var edwardnorton = {
    Name : "Edward Norton",
    Birth : "1969-08-18",
    Death : null,
    Bio : "Edward Harrison Norton is an American actor and filmmaker. He has received multiple awards and nominations, including a Golden Globe Award and three Academy Award nominations. Born in Massachusetts and raised in Maryland, Norton was drawn to theatrical productions at local venues as a child."
}

var meatloaf = {
    Name : "Meat Loaf",
    Birth : "1947-09-27",
    Death : null,
    Bio : "Michael Lee Aday better known as Meat Loaf, is an American singer and actor. He is noted for his powerful, wide-ranging voice and theatrical live shows."
}

var jgl = {
    Name : "Joseph Gordon-Levitt",
    Birth : "1981-02-17",
    Death : null,
    Bio : "Joseph Leonard Gordon-Levitt is an American actor, filmmaker, singer, and entrepreneur. As a child, Gordon-Levitt appeared in the films A River Runs Through It, Angels in the Outfield, Holy Matrimony and 10 Things I Hate About You, and as Tommy Solomon in the TV series 3rd Rock from the Sun."
}

var ellenpage = {
    Name : "Ellen Page",
    Birth : "1987-02-21",
    Death : null,
    Bio : "Ellen Grace Philpotts-Page is a Canadian actress and producer. Her career began with roles in television shows such as Pit Pony, Trailer Park Boys and ReGenesis. Page starred in the film Hard Candy, for which she won the Austin Film Critics Association's Award for Best Actress."
}

var matthewmcconaughey = {
    Name : "Matthew McConaughey",
    Birth : "1969-11-04",
    Death : null,
    Bio : "Matthew David McConaughey is an American actor and producer. He first gained notice for his supporting performance in the coming-of-age comedy Dazed and Confused, considered by many to be his breakout role."
}

var annehathaway = {
    Name : "Anne Hathaway",
    Birth : "1982-11-12",
    Death : null,
    Bio : "Anne Jacqueline Hathaway is an American actress. The recipient of many awards, including an Academy Award, a Primetime Emmy Award, and a Golden Globe, she was one of the highest-paid actresses in the world in 2015"
}

var jessicachastain = {
    Name : "Jessica Chastain",
    Birth : "1977-03-24",
    Death : null,
    Bio : "Jessica Michelle Chastain is an American actress and producer. Known for her roles in films with feminist themes, her accolades include a Golden Globe Award and nominations for two Academy Awards. Time named her one of the 100 most influential people in the world in 2012."
}

var michaelnyqvist = {
    Name : "Michael Nyqvist",
    Birth : "1960-11-08",
    Death : "2017-06-27",
    Bio : "Rolf Åke Mikael Nyqvist, better known as Michael Nyqvist, was a Swedish actor. Educated at the School of Drama in Malmö, he became well known for playing police officer Banck in the 1997–1998 Martin Beck TV series and for his leading role in the 2001 film Grabben i graven bredvid."
}

var alfieallen = {
    Name : "Alfie Allen",
    Birth : "1986-09-12",
    Death : null,
    Bio : "Alfie Evan Allen is an English actor. He is best known for playing Theon Greyjoy in the television series Game of Thrones, for which he came to international attention and received a Primetime Emmy Award nomination in 2019."
}
var robertdeniro = {
    Name : "Robert De Niro",
    Birth : "1943-08-17",
    Death : null,
    Bio : "Robert Anthony De Niro Jr. is an American actor, producer, and director who holds both American and Italian citizenship. He is particularly known for his collaborations with filmmaker Martin Scorsese."
}

var alpacino = {
    Name : "Al Pacino",
    Birth : "1940-04-25",
    Death : null,
    Bio : "Alfredo James Pacino is an American actor and filmmaker. In a career spanning over five decades, he has received many awards and nominations, including an Academy Award, two Tony Awards, and two Primetime Emmy Awards. He is one of the few performers to have received the Triple Crown of Acting."
}

var joepesci = {
    Name : "Joe Pesci",
    Birth : "1943-02-09",
    Death : null,
    Bio : "Joseph Frank Pesci is an American actor and musician. He is known for portraying tough, volatile characters in a variety of genres and for his collaborations with Robert De Niro and Martin Scorsese in the films Raging Bull, Goodfellas, Casino, and The Irishman."
}

var emilymortimer = {
    Name : "Emily Mortimer",
    Birth : "1971-12-01",
    Death : null,
    Bio : "Emily Kathleen Anne Mortimer is an English actress and screenwriter. She began acting in stage productions and has since appeared in several film and television roles. In 2003, she won an Independent Spirit Award for her performance in Lovely and Amazing. "
}

var markruffalo = {
    Name : "Mark Ruffalo",
    Birth : "1967-11-22",
    Death : null,
    Bio : "Mark Alan Ruffalo is an American actor and producer. He began acting in the early 1990s and first gained recognition for his work in Kenneth Lonergan's play This Is Our Youth and drama film You Can Count On Me."
}
var tomcruise = {
    Name : "Tom Cruise",
    Birth : "1962-07-03",
    Death : null,
    Bio : "Thomas Cruise Mapother IV is an American actor and producer. He has received various accolades for his work, including three Golden Globe Awards and three nominations for Academy Awards. With a net worth of $570 million as of 2020, he is one of the highest-paid actors in the world."
}

var emilyblunt = {
    Name : "Emily Blunt",
    Birth : "1983-02-23",
    Death : null,
    Bio : "Emily Olivia Leah Blunt is a British-American actress. She is the recipient of various accolades, including a Golden Globe Award and a Screen Actors Guild Award, in addition to nominations for two British Academy Film Awards."
}

var billpaxton = {
    Name : "Bill Paxton",
    Birth : "1955-05-17",
    Death : "2017-02-25",
    Bio : "William Paxton was an American actor and director. He appeared in films such as Stripes (1981),The Terminator (1984), Commando (1985), Weird Science (1985), Aliens (1986), Near Dark (1987), Predator 2 (1990), Tombstone (1993), True Lies (1994), Apollo 13 (1995), Twister (1996), Titanic (1997), Mighty Joe Young (1998), U-571 (2000), Vertical Limit (2000), Frailty (2001), Broken Lizard's Club Dread (2004), Thunderbirds (2004), Edge of Tomorrow (2014), and Nightcrawler (2014). He also starred in the HBO drama series Big Love (2006–2011), earning three Golden Globe Award nominations during the show's run. He was nominated for a Primetime Emmy Award and a Screen Actors Guild Award for portraying Randall McCoy in the History channel miniseries Hatfields & McCoys (2012) and as Detective Frank Roarke in the TV series Training Day (2017). His final film appearance was in The Circle (2017), released two months after his death."
}

var haydenchristensen = {
    Name : "Hayden Christensen",
    Birth : "1981-04-19",
    Death : null,
    Bio : "Hayden Christensen is a Canadian actor and producer. He began his career on Canadian television at the age of 13, then diversified into American television in the late 1990s. He was praised for his acting as Sam in Life as a House, earning Golden Globe Award and Screen Actors Guild Award nominations."
}

var samuelljackson = {
    Name : "Samuel L. Jackson",
    Birth : "1948-12-21",
    Death : null,
    Bio : "Samuel Leroy Jackson is an American actor and producer. Widely regarded as one of the most popular actors of his generation, the films in which he has appeared have collectively grossed over $27 billion worldwide, making him the highest-grossing actor of all time."
}
var jamiebell = {
    Name : "Jamie Bell",
    Birth : "1986-03-14",
    Death : null,
    Bio : "Andrew James Matfin Bell is an English actor and dancer. He rose to prominence for his debut role in Billy Elliot, for which he won the BAFTA Award for Best Actor in a Leading Role. He is also known for his leading roles as Tintin in The Adventures of Tintin and as Ben Grimm / Thing in Fantastic Four."
}

var domhnallgleeson = {
    Name : "Domhnall Gleeson",
    Birth : "1983-05-12",
    Death : null,
    Bio : "Domhnall Gleeson is an Irish actor, screenwriter, and short film director. He is the son of actor Brendan Gleeson, with whom he has appeared in a number of films and theatre projects. He received a Bachelor of Arts in Media Arts from Dublin Institute of Technology."
}

var rachelmacadams = {
    Name : "Rachel McAdams",
    Birth : "1978-11-17",
    Death : null,
    Bio : "Rachel Anne McAdams is a Canadian actress. After graduating from a theater degree program at York University in 2001, she worked in Canadian television and film productions, such as the drama film Perfect Pie (2002), for which she received a Genie Award nomination, the comedy film My Name Is Tanino (2002), and the comedy series Slings and Arrows (2003–2005), for which she won a Gemini Award."
}

var billnighy = {
    Name : "Bill Nighy",
    Birth : "1949-12-12",
    Death : null,
    Bio : "William Francis Nighy is an English actor known for his work in film, theatre and television. Nighy became widely known for his performance as Billy Mack in Love Actually."
}

db.actors.insertOne(ldc)
db.actors.insertOne(jonahhill)
db.actors.insertOne(margotrobbie)
db.actors.insertOne(keanureeves)
db.actors.insertOne(rachelweisz)
db.actors.insertOne(djimonhounsou)
db.actors.insertOne(sylvesterstallone)
db.actors.insertOne(taliashire)
db.actors.insertOne(burtyoung)
db.actors.insertOne(bradpitt)
db.actors.insertOne(edwardnorton)
db.actors.insertOne(meatloaf)
db.actors.insertOne(jgl)
db.actors.insertOne(ellenpage)
db.actors.insertOne(matthewmcconaughey)
db.actors.insertOne(annehathaway)
db.actors.insertOne(jessicachastain)
db.actors.insertOne(michaelnyqvist)
db.actors.insertOne(alfieallen)
db.actors.insertOne(robertdeniro)
db.actors.insertOne(alpacino)
db.actors.insertOne(joepesci)
db.actors.insertOne(emilymortimer)
db.actors.insertOne(markruffalo)
db.actors.insertOne(tomcruise)
db.actors.insertOne(emilyblunt)
db.actors.insertOne(billpaxton)
db.actors.insertOne(haydenchristensen)
db.actors.insertOne(samuelljackson)
db.actors.insertOne(jamiebell)
db.actors.insertOne(domhnallgleeson)
db.actors.insertOne(rachelmacadams)
db.actors.insertOne(billnighy)





var JonathanDemme = {
  Name: 'Jonathan Demme',
  Bio:
    'Robert Jonathan Demme was an American director, producer, and screenwriter.',
  Birth: '1944-01-01',
  Death: '2017-01-01',
}
var JuddApatow = {
  Name: 'Judd Apatow',
  Bio:
    'Judd Apatow is an American producer, writer, director, actor and stand-up comedian.',
  Birth: '1967-01-01',
  Death: null,
}
var ChristopherNolan = {
  Name: 'Christopher Nolan',
  Bio:
    'Christopher Edward Nolan CBE is a British-American filmmaker known for making personal, distinctive films within the Hollywood mainstream. His directorial efforts have grossed more than US$4.9 billion worldwide, garnered 34 Oscar nominations and ten wins.',
  Birth: '1970-07-30',
  Death: null,
}
var MartinScorsese = {
  Name: 'Martin Scorsese',
  Bio:
    'Martin Charles Scorsese is an American film director, producer, screenwriter, and actor. One of the major figures of the New Hollywood era, he is widely regarded as one of the most significant and influential directors in film history.',
  Birth: '1942-11-17',
  Death: null,
}
var FrancisLawrence = {
  Name: 'Francis Lawrence',
  Bio:
    'Francis Lawrence is an Austrian-born American filmmaker and producer. After establishing himself as a director of music videos and commercials, Lawrence made his feature-length directorial debut with the supernatural thriller Constantine (2005) and has since directed the post-apocalyptic horror film I Am Legend (2007), the romantic drama Water for Elephants (2011), three of the four films in the Hunger Games film series, and the spy thriller Red Sparrow (2018).',
  Birth: '1971-03-26',
  Death: null,
}
var JohnGAvildsen = {
  Name: 'John G. Avildsen',
  Bio:
    'John Guilbert Avildsen was an American film director. He is perhaps best known for directing Rocky, which earned him the Academy Award for Best Director. Other films he directed include Joe, Save the Tiger, The Formula, Neighbors, Lean on Me, Rocky V, 8 Seconds, and the first three The Karate Kid films.',
  Birth: '1935-12-21',
  Death: '2017-06-16',
}
var DaivdFincher = {
  Name: 'David Fincher',
  Bio:
    'David Andrew Leo Fincher is an American film director and producer. Known for his psychological thrillers, his work has received multiple nominations in the Academy Awards and Golden Globe Awards. Born in Denver, Colorado, Fincher developed a passion for filmmaking at an early age.',
  Birth: '1962-08-28',
  Death: null,
}
var ChadStaheiski = {
  Name: 'Chad Staheiski',
  Bio:
    'Chad Stahelski is an American stuntman and film director. He is known for his work on Buffy the Vampire Slayer and directing the 2014 film John Wick along with David Leitch, as well as solo directing its two sequels.',
  Birth: '1968-09-20',
  Death: null,
}
var RichardCurtis = {
  Name: 'Richard Curtis',
  Bio:
    "Richard Whalley Anthony Curtis is a British screenwriter, producer, and film director. One of Britain's most successful comedy screenwriters, he is known primarily for romantic comedy films, among them Four Weddings and a Funeral (1994), Notting Hill (1999), Bridget Jones's Diary (2001), Love Actually (2003), Bridget Jones: The Edge of Reason (2004), About Time (2013) and Yesterday (2019). He is also known for the drama War Horse (2011), and for having co-written the hit sitcoms Blackadder, Mr. Bean, and The Vicar of Dibley. His early career saw him write material for the BBC's Not the Nine O'Clock News and ITV's Spitting Image.",
  Birth: '1956-11-08',
  Death: null,
}
var DougLiman = {
  Name: 'Doug Liman',
  Bio:
    'Douglas Eric Liman is an American film director and producer. He is known for directing the films Swingers, Go, The Bourne Identity, Mr. & Mrs. Smith, Jumper, Edge of Tomorrow, and American Made.',
  Birth: '1965-07-24',
  Death: null,
}

// db.directors.insertOne(JonathanDemme)
// {
//         "acknowledged" : true,
//         "insertedId" : ObjectId("5f600926b9c87ebe8a5bba0c")
// }
//  db.directors.insertOne(JuddApatow)
// {
//         "acknowledged" : true,
//         "insertedId" : ObjectId("5f600926b9c87ebe8a5bba0d")
// }
//  db.directors.insertOne(ChristopherNolan)
// {
//         "acknowledged" : true,
//         "insertedId" : ObjectId("5f600926b9c87ebe8a5bba0e")
// }
//  db.directors.insertOne(MartinScorsese)
// {
//         "acknowledged" : true,
//         "insertedId" : ObjectId("5f600926b9c87ebe8a5bba0f")
// }
//  db.directors.insertOne(FrancisLawrence)
// {
//         "acknowledged" : true,
//         "insertedId" : ObjectId("5f600927b9c87ebe8a5bba10")
// }
//  db.directors.insertOne(JohnGAvildsen)
// {
//         "acknowledged" : true,
//         "insertedId" : ObjectId("5f600927b9c87ebe8a5bba11")
// }
//  db.directors.insertOne(DaivdFincher)
// {
//         "acknowledged" : true,
//         "insertedId" : ObjectId("5f600927b9c87ebe8a5bba12")
// }
//  db.directors.insertOne(ChadStaheiski)
// {
//         "acknowledged" : true,
//         "insertedId" : ObjectId("5f600927b9c87ebe8a5bba13")
// }
//  db.directors.insertOne(RichardCurtis)
// {
//         "acknowledged" : true,
//         "insertedId" : ObjectId("5f600927b9c87ebe8a5bba14")
// }
//  db.directors.insertOne(DougLiman)
// {
//         "acknowledged" : true,
//         "insertedId" : ObjectId("5f600929b9c87ebe8a5bba15")
// }

// db.directors.insertOne(JonathanDemme)
// db.directors.insertOne(JuddApatow)
// db.directors.insertOne(ChristopherNolan)
// db.directors.insertOne(MartinScorsese)
// db.directors.insertOne(FrancisLawrence)
// db.directors.insertOne(JohnGAvildsen)
// db.directors.insertOne(DaivdFincher)
// db.directors.insertOne(ChadStaheiski)
// db.directors.insertOne(RichardCurtis)
// db.directors.insertOne(DougLiman)


db.directors.update(
    {Name:"Richard Curtis"}, {$set: {Movies: []}}
)

db.directors.update(
    {Name:"Richard Curtis"}, {$push: {Movies: ObjectId("5f603e54b9c87ebe8a5bba42")}}
)


db.users.insertOne(
    {
        Username : "Isaac",
        Password : "111111",
        Email : "isaacgc08@gmail.com",
        Birthday : new Date("1990-07-12"),
        FavoriteMovies : [
            ObjectId("5f603e51b9c87ebe8a5bba37"), ObjectId("5f603e51b9c87ebe8a5bba38"), ObjectId("5f603e51b9c87ebe8a5bba39"), ObjectId("5f603e51b9c87ebe8a5bba3a"), ObjectId("5f603e51b9c87ebe8a5bba3b")
        ]
    }
)

db.users.insertOne(
    {
        Username : "Cindy",
        Password : "111111",
        Email : "cindy@gmail.com",
        Birthday : new Date("1991-02-05"),
        FavoriteMovies : [
            ObjectId("5f603e51b9c87ebe8a5bba3b"), ObjectId("5f603e51b9c87ebe8a5bba38"), ObjectId("5f603e51b9c87ebe8a5bba40"), ObjectId("5f603e51b9c87ebe8a5bba3e")
        ]
    }
)

db.users.insertOne(
    {
        Username : "Bory",
        Password : "111111",
        Email : "bory@gmail.com",
        Birthday : new Date("2017-11-18"),
        FavoriteMovies : [
            ObjectId("5f603e51b9c87ebe8a5bba3f"), ObjectId("5f603e51b9c87ebe8a5bba3d"), ObjectId("5f603e51b9c87ebe8a5bba3c"), ObjectId("5f603e51b9c87ebe8a5bba3b")
        ]
    }
)

db.users.insertOne(
    {
        Username : "GC",
        Password : "111111",
        Email : "gc@gmail.com",
        Birthday : new Date("2020-09-14"),
        FavoriteMovies : [
            ObjectId("5f603e51b9c87ebe8a5bba3d"), ObjectId("5f603e51b9c87ebe8a5bba3b"), ObjectId("5f603e51b9c87ebe8a5bba37")
        ]
    }
)

db.users.insertOne(
    {
        Username : "Nomad",
        Password : "111111",
        Email : "nomad@gmail.com",
        Birthday : new Date("2020-09-14"),
        FavoriteMovies : [
            ObjectId("5f603e51b9c87ebe8a5bba3a"), ObjectId("5f603e51b9c87ebe8a5bba39"), ObjectId("5f603e51b9c87ebe8a5bba3f")
        ]
    }
)