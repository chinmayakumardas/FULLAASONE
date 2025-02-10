// app/layout.js
import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toasts globally

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <title>AAS One</title>
      </head>
      <body>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar closeButton />
      {children}
      </body>
    </html>
  );
}
