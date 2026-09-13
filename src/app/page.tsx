'use client';

import React, { useState } from 'react';
import { SmoothScroll } from '../components/SmoothScroll';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { WhyUsSection } from '../components/WhyUsSection';
import { PhilosophySplit } from '../components/PhilosophySplit';
import { ArenaGrid } from '../components/ArenaGrid';
import { RecoverySanctuary } from '../components/RecoverySanctuary';
import { CoachesSection } from '../components/CoachesSection';
import { GroupXSchedule } from '../components/GroupXSchedule';
import { PlanQuizSection } from '../components/PlanQuizSection';
import { TransformationVault } from '../components/TransformationVault';
import { PricingMatrix } from '../components/PricingMatrix';
import { ReviewsSection } from '../components/ReviewsSection';
import { FaqSection } from '../components/FaqSection';
import { ClubDirectory } from '../components/ClubDirectory';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { TrialModal } from '../components/TrialModal';
import { WhatsAppConcierge } from '../components/WhatsAppConcierge';

export default function Home() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [modalPreselectedItem, setModalPreselectedItem] = useState<string | undefined>();
  const [selectedCity, setSelectedCity] = useState<string>('All');

  const handleOpenTrialModal = (preselected?: string) => {
    setModalPreselectedItem(preselected);
    setIsTrialModalOpen(true);
  };

  const handleCloseTrialModal = () => {
    setIsTrialModalOpen(false);
    setModalPreselectedItem(undefined);
  };

  return (
    <SmoothScroll>
      <main style={{ minHeight: '100vh', background: '#050507', position: 'relative' }}>
        {/* Global Navigation with Authentic Logo */}
        <Navbar
          onOpenTrialModal={() => handleOpenTrialModal()}
          selectedCity={selectedCity}
          onSelectCity={setSelectedCity}
        />

        {/* Hero Section with Cinematic Background & Copy */}
        <HeroSection onOpenTrialModal={() => handleOpenTrialModal()} />

        {/* Why Us Section (Discipline, Equipment, Saunas, Founder-Led) */}
        <WhyUsSection />

        {/* Coaches & Mentors (Madhu Gowda, Coach Punith, Coach Anil, Coach Lingraj) */}
        <CoachesSection onOpenTrialModal={() => handleOpenTrialModal('Coach Consultation')} />

        {/* Personalized Plan Assessment Quiz (Dispatches to WhatsApp) */}
        <PlanQuizSection />

        {/* Dual Philosophy (Primal Strength & Bio-Recovery) */}
        <PhilosophySplit />

        {/* Arenas & Technical Equipment Showcase */}
        <ArenaGrid onOpenTrialModal={() => handleOpenTrialModal()} />

        {/* Bio-Recovery Suites (Finnish Saunas, Steam, Cryo) */}
        <RecoverySanctuary onOpenTrialModal={() => handleOpenTrialModal()} />

        {/* GroupX Curriculums & Class Timings */}
        <GroupXSchedule onOpenTrialModal={(clsName) => handleOpenTrialModal(clsName)} />

        {/* Transformation Vault & Science Protocols */}
        <TransformationVault onOpenTrialModal={() => handleOpenTrialModal('Transformation Protocol')} />

        {/* Transparent Membership Architecture (Starter, Pro, Elite, Annual All-Access) */}
        <PricingMatrix onOpenTrialModal={(planName) => handleOpenTrialModal(planName)} />

        {/* Verified Google Member Reviews */}
        <ReviewsSection />

        {/* FAQ & Support Accordion */}
        <FaqSection />

        {/* Club Footprints (Prestige Falcon City Flagship) */}
        <ClubDirectory
          onOpenTrialModal={(hubName) => handleOpenTrialModal(hubName)}
          selectedCity={selectedCity}
        />

        {/* Physical Location, Directions & Contact Card */}
        <ContactSection />

        {/* Authentic Footer */}
        <Footer />

        {/* VIP Sanctuary Tour & Consultation Modal */}
        <TrialModal
          isOpen={isTrialModalOpen}
          onClose={handleCloseTrialModal}
          preselectedItem={modalPreselectedItem}
        />

        {/* Floating Concierge Action */}
        <WhatsAppConcierge onOpenTrialModal={() => handleOpenTrialModal()} />
      </main>
    </SmoothScroll>
  );
}
