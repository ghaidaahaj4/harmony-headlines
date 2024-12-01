# Harmony Headlines - Design Document

## Purpose
**Harmony Headlines** aims to present news across various categories—**Tesla**, **politics**, **sports**, and **popular news**—in a way that fosters understanding, empathy, and critical thinking. The app simplifies complex and potentially overwhelming stories into progressively friendlier, easier-to-digest formats. By doing so, it reduces emotional strain and encourages users to engage with the topics constructively.

## Target Audience
- Individuals interested in general news across different categories: **Tesla**, **politics**, **sports**, and **popular news**.
- Users who may find current reporting too negative, complex, or biased.
- Those seeking more balanced, digestible, and empathetic news formats.

## Core Features
### 1. Progressive News Simplification
- **Original**: Displays the raw, unaltered text of news articles.
- **Harmonized**: A neutral, friendlier version of the news, highlighting shared values or constructive elements, which can be adjusted based on the user's preferences.

### 2. Sentiment Analysis
- Analyze the tone of articles (positive, neutral, negative) to help users understand the potential bias or emotion in the coverage.

### 3. Interactive Sentiment Control
- A slider or toggle allows users to adjust the tone of news articles, ranging from the most neutral and friendly (0) to the most intense or aggressive (10).

## Frontend Architecture
### 1. Component Breakdown
- **App Component**: Root component managing routing and global state using React Router and Context API.
- **Header Component**: Displays the app logo, title, and navigation links.
- **NewsFeed Component**: Displays a list of news articles, categorized by topics like **Tesla**, **politics**, **sports**, and **popular news**. Each article is represented by a card.
- **ArticleDetails Component**: Displays the full content of a selected article, including title, text, image, source, and author.
- **SentimentControl Component**: 
  - Visualizes the sentiment of an article (positive, neutral, negative).
  - Allows users to adjust the sentiment with a slider or toggle.
- **Footer Component**: Provides social sharing links, app credits, and terms of use.

### 2. State Management
- **Global State**: Managed via React Context, which stores articles, user preferences (e.g., sentiment settings), and bookmarks.
- **Local State**: Managed within individual components for form inputs, tab selections, and slider values using `useState`.

### 3. Data Flow
- **News Articles**: Fetched from the NewsAPI API, providing a wide range of news across categories like **Tesla**, **politics**, **sports**, and **popular news**.
- **Sentiment Analysis & Harmonization**: Handled by the Gemini API, which processes news articles and adjusts the tone based on the user’s selected settings.
- **Dynamic Updates**: Articles update dynamically to reflect changes in sentiment, allowing users to view more neutral or positive versions of the news.

### 4. Main Pages
- **Home Page**: Displays a list of news cards, categorized by topics like **Tesla**, **politics**, **sports**, and **popular news**.
- **Article Page**: Clicking on a news card navigates to a detailed article page that displays the full content of the selected news article.

## Tech Stack
- **Frontend Framework**: React (with React Router and Context API).
- **Styling**:  CSS (for responsive design and material design).
- **API Integration**:
  - **NewsApi API**: Fetches general news articles across various topics.
  - **Gemini API**: Analyzes sentiment and harmonizes article content.

## Development Phases
### Phase 1: Setup & UI
- Initialize React project and set up routing.
- Create basic components: Header, NewsFeed, Footer.

### Phase 2: API Integration
- Fetch and display news articles using the MediaStack API.
- Connect Gemini API for dynamic content transformation based on sentiment analysis.

### Phase 3: Advanced Features
- Implement sentiment slider and tabs for article versions.
- Add multilingual support for a global audience.

### Phase 4: Testing & Deployment
- Test edge cases (e.g., empty API responses, invalid data).
- Move API calls to a server to protect API keys and improve security.
- Deploy on Netlify or Vercel.

## Extra Features
- Save news stories (using MockAPI or Firestore).
- Implement user authentication.
- Add search and filter options based on topics, keywords, and sentiment.
- Caching to improve performance.
- Integrate additional APIs and AI models for more personalized news delivery.

## UX Principles
- **Empathy-Driven Design**: Use a soft color palette (blue tones) to reduce emotional stress.
- **Accessibility**: Provide high-contrast text, large buttons, and multilingual options for a more inclusive experience.
- **User Engagement**: Allow users to easily control the tone and simplification of the content.
- **Mobile-First**: Optimize design for a smooth mobile experience.

### Extra Features
- Implement search and filter functionalities for different topics and moods.
- Add caching and improve UX/UI based on user feedback.

## App Flow
1. **Home Page**: Displays a categorized list of news cards for Tesla, politics, sports, and popular news.
2. **Article Page**: Clicking on a news card navigates to the article page, showing full details of the article.
3. **Sentiment Control**: Users can adjust the sentiment of the article, making it more neutral or friendly.
4. **Server Communication**: The client communicates with the server to fetch news data and perform sentiment analysis, ensuring keys are stored securely.
