import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { DashboardLayout } from '@/layouts/DashboardLayout';
import LandingPage from '@/pages/LandingPage';
import JobSearchPage from '@/pages/JobSearchPage';
import JobDetailsPage from '@/pages/JobDetailsPage';
import CandidateDashboard from '@/pages/CandidateDashboard';
import RecruiterDashboard from '@/pages/RecruiterDashboard';
import CandidateProfilePage from '@/pages/CandidateProfilePage';
import CompanyProfilePage from '@/pages/CompanyProfilePage';
import PricingPage from '@/pages/PricingPage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/jobs" element={<JobSearchPage />} />
        <Route path="/jobs/:id" element={<JobDetailsPage />} />
        <Route path="/candidates/:id" element={<CandidateProfilePage />} />
        <Route path="/companies/:id" element={<CompanyProfilePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>

      <Route element={<DashboardLayout />}>
        <Route path="/dashboard/candidate" element={<CandidateDashboard />} />
        <Route path="/dashboard/recruiter" element={<RecruiterDashboard />} />
      </Route>
      
      <Route path="*" element={<div className="flex h-[50vh] items-center justify-center text-2xl font-bold">404 - Not Found</div>} />
    </Routes>
  );
}
