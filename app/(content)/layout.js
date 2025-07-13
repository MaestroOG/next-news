import MainHeader from '@/components/main-header';
import '../globals.css';
import ProgressBar from '@/components/progress-bar';

export const metadata = {
  title: 'Next.js Page Routing & Rendering',
  description: 'Learn how to route to different pages.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="page">
          <MainHeader />
          <ProgressBar />
          {children}
        </div>
      </body>
    </html>
  );
}
