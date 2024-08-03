// components/ImageModal.tsx
import React, { useEffect } from 'react';

type ImageModalProps = {
  isOpen: boolean;
  imageSrc: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, imageSrc, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight') {
        onNext();
      } else if (event.key === 'ArrowLeft') {
        onPrev();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div className="relative max-w-sm max-h-sm animate-fade-in">
        <button
          className="absolute top-0 right-0 m-2 text-white text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <button
          className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 text-white text-4xl"
          onClick={onPrev}
          aria-label="Previous"
        >
          &#8249;
        </button>
        <img src={imageSrc} alt="Enlarged" className="max-w-full max-h-full rounded shadow-lg" />
        <button
          className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 text-white text-4xl"
          onClick={onNext}
          aria-label="Next"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default ImageModal;