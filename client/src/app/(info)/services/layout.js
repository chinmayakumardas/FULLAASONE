
import PublicLayout from '@/components/layout/PublicLayout';


export default function ServiceLayout({ children }) {
  return (
    <>
      <PublicLayout>
        {children}
      </PublicLayout>
    </>
  );
}
