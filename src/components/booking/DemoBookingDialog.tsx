'use client';

import { useState } from 'react';
import DemoBookingForm from './DemoBookingForm';

interface DemoBookingDialogProps {
  locale: string;
  children: (openDialog: () => void) => React.ReactNode;
}

export default function DemoBookingDialog({ locale, children }: DemoBookingDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <>
      {children(openDialog)}
      {isOpen && <DemoBookingForm onClose={closeDialog} locale={locale} />}
    </>
  );
}
