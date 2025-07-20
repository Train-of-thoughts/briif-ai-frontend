'use client';

import { submitDemoRequest } from '@/app/actions/demoBooking';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getDemoBookingSchema, DemoBookingFormData, MAX_MESSAGE_LENGTH } from '@/schema/booking/demo-booking-schema';
import FormInput from "@/components/common/FormInput";
import FormTextArea from "@/components/common/FormTextArea";
import SubmitButton from "@/components/common/SubmitButton";

interface DemoBookingFormProps {
  onClose: () => void;
  locale: string;
}

export default function DemoBookingForm({ onClose, locale }: DemoBookingFormProps) {
  const t = useTranslations('booking');
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const schema = getDemoBookingSchema(t);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DemoBookingFormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      locale: locale
    }
  });

  const onSubmit: SubmitHandler<DemoBookingFormData> = async (data) => {
    setIsSubmitting(true);
    setFormStatus('idle');

    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('company', data.company || '');
      formData.append('message', data.message || '');
      formData.append('locale', data.locale);

      await submitDemoRequest(formData);
      setFormStatus('success');
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-8 rounded-xl max-w-md w-full relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          aria-label="Close"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-6 text-white">{t('title')}</h2>

        {formStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-800 bg-opacity-30 border border-green-700 rounded-lg text-green-300">
            {t('success')}
          </div>
        )}

        {formStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-800 bg-opacity-30 border border-red-700 rounded-lg text-red-300">
            {t('error')}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input type="hidden" {...register('locale')} />

          <FormInput
            id="name"
            label={t('form.name')}
            placeholder={t('form.name')}
            register={register}
            name="name"
            error={errors.name?.message}
            className="mb-4"
          />

          <FormInput
            id="email"
            label={t('form.email')}
            placeholder={t('form.email')}
            type="email"
            register={register}
            name="email"
            error={errors.email?.message}
            className="mb-4"
          />

          <FormInput
            id="company"
            label={t('form.company')}
            placeholder={t('form.company')}
            register={register}
            name="company"
            error={errors.company?.message}
            className="mb-4"
          />

          <FormTextArea
            id="message"
            label={t('form.message')}
            placeholder={t('form.message')}
            register={register}
            name="message"
            error={errors.message?.message}
            className="mb-6"
            rows={4}
            maxLength={MAX_MESSAGE_LENGTH}
            maxLengthText={`(${t('validation.maxChars', { max: MAX_MESSAGE_LENGTH })})`}
            disabled={formStatus === 'success'}
          />

          <SubmitButton
            text={t('form.submit')}
            loadingText="Sending..."
            isSubmitting={isSubmitting}
            className="mt-6"
          />
        </form>
      </div>
    </div>
  );
}
