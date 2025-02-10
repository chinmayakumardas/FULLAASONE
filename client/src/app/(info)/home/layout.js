// app/home/layout.js
import PublicLayout from '@/components/layout/PublicLayout';


export default function HomeLayout({ children }) {
  return (
    <>
      <PublicLayout>
        {children}
      </PublicLayout>
    </>
  );
}
