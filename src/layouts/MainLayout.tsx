import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/common/Navbar';

export function MainLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      {/* Footer will go here */}
      <footer className="border-t py-8 mt-auto bg-card">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} HireGrid. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
