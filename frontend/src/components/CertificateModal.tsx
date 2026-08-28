'use client';

import { createPortal } from 'react-dom';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';

export interface CertificateData {
  image: string;
  description: string;
  title?: string;
}

interface CertificateModalProps {
  activeCertificate: CertificateData | null;
  onClose: () => void;
  /** Must be true before rendering (set via useEffect) to avoid SSR document access */
  isMounted: boolean;
}

export default function CertificateModal({
  activeCertificate,
  onClose,
  isMounted,
}: CertificateModalProps) {
  if (!isMounted || !activeCertificate) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] w-screen h-screen flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300 select-none cursor-auto"
      onClick={onClose}
    >
      {activeCertificate.title === 'Poster Details' ? (
        <div
          className="relative w-full h-full flex items-center justify-center p-4 md:p-12 animate-page-in"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-8 md:right-8 p-3 bg-black/60 hover:bg-black/90 border border-white/20 text-white rounded-full transition-colors z-[110] hover:scale-105 flex items-center justify-center cursor-pointer shadow-xl"
          >
            <FaTimes size={20} />
          </button>
          <Image
            src={activeCertificate.image}
            alt="Poster"
            width={1200}
            height={1600}
            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>
      ) : (
        <div
          className="relative max-w-2xl w-full bg-black/90 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl animate-page-in transform flex flex-col justify-center m-4 max-h-[95vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors z-[110] hover:scale-105 flex items-center justify-center cursor-pointer"
          >
            <FaTimes size={16} />
          </button>

          <div className="p-1 overflow-hidden flex justify-center items-center bg-black/50">
            <Image
              src={activeCertificate.image}
              alt={activeCertificate.title || 'Certificate'}
              width={800}
              height={1000}
              className="max-w-full max-h-[75vh] object-contain rounded-t-xl opacity-100"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>

          <div className="p-5 bg-gradient-to-b from-transparent to-slate-900/50 overflow-y-auto">
            <h4 className="text-lg font-bold bg-gradient-to-r from-slate-300 via-white to-slate-400 bg-clip-text text-transparent mb-2">
              {activeCertificate.title || 'Certificate Details'}
            </h4>
            <p className="text-slate-300 text-[13px] whitespace-pre-wrap leading-relaxed">
              {activeCertificate.description}
            </p>
          </div>
        </div>
      )}
    </div>,
    document.body
  );
}
