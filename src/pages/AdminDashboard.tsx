import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldAlert, ArrowLeft } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 scrapbook-shadow text-center">
        <div className="w-20 h-20 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShieldAlert className="w-10 h-10" />
        </div>
        <h1 className="font-jakarta font-extrabold text-2xl text-primary mb-4">
          Mode Admin Dinonaktifkan
        </h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Sistem admin dinonaktifkan pada versi aplikasi ini (Fully Static). 
          Semua pengelolaan data (Berita, Proker, Agenda, dll) kini dilakukan secara langsung melalui file JSON di direktori <code>src/data/</code>.
        </p>
        
        <div className="space-y-4">
          <button 
            onClick={() => navigate('/')}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-yellow-primary font-bold hover:bg-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
          </button>
          
          <button 
            onClick={handleLogout}
            className="w-full py-3 rounded-xl bg-gray-100 text-gray-600 font-bold hover:bg-gray-200 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
