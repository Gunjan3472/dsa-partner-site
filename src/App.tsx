import { useEffect, useState } from 'react';
import Home from './Home';

function Privacy() {
  return (
    <main className="wrap" style={{ paddingTop: 40, paddingBottom: 40, maxWidth: 760 }}>
      <p><a href="#/">← Back to home</a></p>
      <h1>Privacy Policy</h1>
      <p>Last updated: October 2026</p>

      <h2>The short version</h2>
      <p>DSA Partner has no servers, no accounts and no analytics. The developer does not receive or store any of your data.</p>

      <h2>What is stored on your device</h2>
      <p>
        Your chosen AI provider and your API key are saved in your browser’s extension storage on
        your own device. They are never sent anywhere except to the AI provider you selected, as
        part of your requests.
      </p>

      <h2>What is sent to the AI provider</h2>
      <p>
        When you click a hint, review or chat button, the extension sends the following directly
        from your browser to the provider you chose (Google Gemini or Groq), using your own API key:
      </p>
      <ul>
        <li>The title and description of the LeetCode problem you are viewing</li>
        <li>The code currently in your editor</li>
        <li>Any text you type into the teach-back or chat boxes, and the recent conversation in the panel</li>
      </ul>
      <p>
        Nothing is sent until you click a button. The provider’s own terms and privacy policy apply
        to that data, so please read them. Free tiers of some providers may use submitted content
        differently from paid tiers.
      </p>

      <h2>Permissions the extension uses</h2>
      <ul>
        <li><b>leetcode.com pages:</b> to read the problem, show the panel and read your editor code.</li>
        <li><b>Storage:</b> to save your provider choice and API key on your device.</li>
        <li><b>Access to generativelanguage.googleapis.com and api.groq.com:</b> to send your requests to the AI provider.</li>
      </ul>

      <h2>What we do not do</h2>
      <p>We do not collect personal information, track you, sell data, or run advertising.</p>

      <h2>Removing your data</h2>
      <p>
        Uninstalling the extension deletes everything it stored. You can also delete your API key
        from the extension options page at any time, and revoke it in your provider’s console.
      </p>

      <h2>Not affiliated with LeetCode</h2>
      <p>DSA Partner is an independent project and is not affiliated with or endorsed by LeetCode.</p>

      <h2>Contact</h2>
      <p>Questions? Email <b>gunjansingh3472@gmail.com</b>.</p>
    </main>
  );
}

export default function App() {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const onChange = () => {
      setRoute(window.location.hash);
      if (window.location.hash.startsWith('#/')) window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return (
    <>
      {route === '#/privacy' ? <Privacy /> : <Home />}
      <footer>
        <div className="wrap">
          DSA Partner is an independent project and is not affiliated with or endorsed by LeetCode.
          <br />
          <a href="#/privacy">Privacy policy</a>
        </div>
      </footer>
    </>
  );
}