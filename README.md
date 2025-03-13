# LeetMate - Website Blocker Extension 🚀

LeetMate is a simple Chrome extension that helps you stay focused by blocking distracting websites. If you try to visit a blocked site, the extension automatically redirects you to **LeetCode** to encourage productive coding!

## 📌 Features
- ✅ **Block distracting websites** (e.g., Facebook, YouTube, Twitter).
- 🔄 **Redirect blocked sites to LeetCode** after 2 seconds.
- 📝 **Easily add or remove websites** from the blocklist.
- 📦 **Uses Chrome Storage Sync** to save blocked sites across devices.

## 📂 Project Structure
```
📁 Website-Blocker-Extension
│── 📄 manifest.json   # Chrome extension configuration
│── 📄 popup.html      # UI for managing blocked sites
│── 📄 popup.js        # Handles adding/removing sites
│── 📄 styles.css      # Basic styling for popup
│── 📄 content.js      # Blocks sites & redirects them
│── 📄 README.md       # Documentation (this file)
```

## 🛠️ Installation
1. **Clone the repository**:
   ```sh
   git clone https://github.com/SudharsanSaravanan/LeetMate-Chrome-Extension.git
   cd Website-Blocker-Extension
   ```

2. **Load the extension into Chrome**:
   - Open **Chrome** and go to `chrome://extensions/`.
   - Enable **Developer mode** (toggle on the top-right).
   - Click **"Load unpacked"** and select the project folder.

3. **Start Blocking Websites**:
   - Click the extension icon.
   - Add sites to the blocklist.
   - Enjoy distraction-free coding! 🚀

## 🛠️ Tech Stack
- **JavaScript** (content scripts & event listeners)
- **HTML/CSS** (popup UI)
- **Chrome Storage API** (sync blocklist)

## 🚀 How It Works
- The **popup.js** file allows users to add or remove blocked sites.
- The **content.js** script checks the current URL and blocks listed sites.
- If a blocked site is detected, the page **clears** and redirects to **LeetCode** in 2 seconds.

### **🚀 Stay Focused, Keep Coding!**

