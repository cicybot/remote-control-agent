import React from 'react';

interface VncFrameProps {
  url: string;
  isInteractingWithOverlay: boolean;
}

export const VncFrame: React.FC<VncFrameProps> = ({ url, isInteractingWithOverlay }) => {
  // We disable pointer events on the iframe when dragging/resizing the overlay
  // to prevent the iframe from capturing mouse events (which breaks dragging).
  
  return (
    <div className="absolute inset-0 z-0 bg-black flex items-center justify-center overflow-hidden">
      {url ? (
        <iframe
          src={url}
          title="VNC Viewer"
          className={`w-full h-full border-none transition-opacity duration-300 ${isInteractingWithOverlay ? 'pointer-events-none opacity-90' : 'pointer-events-auto opacity-100'}`}
          allowFullScreen
        />
      ) : (
        <div className="text-gray-500 flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-4 opacity-50">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
          <p className="text-xl">No VNC URL configured</p>
          <p className="text-sm mt-2 opacity-60">Use the settings panel to add a URL</p>
        </div>
      )}
    </div>
  );
};