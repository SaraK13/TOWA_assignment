# TOWA_assignment
A React application for browsing Studio Ghibli films, featuring responsive design and search functionality.

---

## Features
1. **Responsive Design:**
    - Adapts seamlessly to mobile, tablet, and desktop devices.
    - Grid layout adjusts dynamically based on screen size.
2. **Search Functionality:**
    - Users can search for films based on their title.
    - Triggered after typing 3 or more characters.
    - Filters and displays films matching the search term.
3. **Data Fetching:**
    - Film data fetched from [Studio Ghibli API](https://ghibliapi.vercel.app/films).
    - Includes film title, description, poster image, and more.
4. **Interactive Cards:**
    - Each film is displayed in a card format with:
        - Poster image (cropped for consistency).
        - Title and short description.
        - Clickable card links to the corresponding details.

---

## How to run
### Prerequisites
- Node.js (v14+)
- npm (or yarn)

### Steps to Run locally
1. Clone rhe repository:
```bash
git clone https://github.com/SaraK13/TOWA_assignment.git
cd towa
```

2. Install dependencies:
```bash
npm install
# or yarn install
```

3. Start the development server:
```bash
npm run dev
# or yarn dev
```
4. Open your browser and navigate to:
```
http://localhost:5173
```

---

## Project Structure
```
src/
├── assets/          # Static assets (images, logos)
├── components/      # Reusable components (Navbar, Footer)
├── pages/           # Pages (Home)
├── App.tsx          # Main app component
├── main.tsx         # Entry point
```