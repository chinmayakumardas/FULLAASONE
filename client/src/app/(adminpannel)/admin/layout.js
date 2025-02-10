
// import AdminPannelLayout from '@/components/layout/AdminPannelLayout';


// export default function AdminLayout({ children }) {
//   return (
//     <>
//       <AdminPannelLayout>
//         {children}
//       </AdminPannelLayout>
//     </>
//   );
// }




// app/about/layout.js
import AdminPannelLayout from '@/components/layout/AdminPannelLayout';

export default function AdminLayout({ children }) {
  return (
    <>
      <AdminPannelLayout>
        {children}
      </AdminPannelLayout>
    </>
  );
}
