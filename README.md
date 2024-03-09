
# Youtube Clone


YouTube Clone
This project is a YouTube clone, aiming to replicate some of the core features and functionalities of the popular video-sharing platform, YouTube. It is built using React for the frontend, making it a modern and responsive web application.



## Features

- Homepage: View a list of recommended videos based on your interests and past interactions.
- Video Playback: Watch videos seamlessly within the application.
- Video Details: Access video details, including title, views, and description.
- Channel Information: Explore information about the video uploader, such as their profile picture, channel name, and subscriber count.
- Comments: Engage with the community by reading and posting comments on videos.
- Related Videos: Discover related videos based on the currently playing video.
## Technologies Used

- React: A JavaScript library for building user interfaces.
- CSS: Styling is done using Cascading Style Sheets for a clean and visually appealing design.
- YouTube Data API v3: Used to fetch video details, channel information, and related videos.
- Moment.js: A library for parsing, validating, manipulating, and formatting dates.
- Vite: A build tool that aims to provide a faster and more efficient development experience for web projects.
## Installation

Clone the Repository

```bash
  git clone https://github.com/your-username/youtube-clone.git
  cd youtube-clone
```
    
Install Dependencies

```bash
  npm install

```

Run the Application


```bash
  npm run dev

```

Access the Application

```bash
  http://localhost:3000

```



## Configuration

To make API requests to YouTube Data API, you'll need to obtain an API key from the Google Cloud Console. Once you have the API key, create a .env file in the root directory of the project and add your API key as follows:

```bash
 REACT_APP_YOUTUBE_API_KEY=your-api-key-goes-here

```
## Acknowledgements

 - YouTube Data API v3: Thanks to Google for providing the API that makes it possible to fetch YouTube data.
- React Community: A shout-out to the React community for their continuous support and contribution to open source.

