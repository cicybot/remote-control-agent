export interface Position {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface VncProfile {
  id: string;
  name: string;
  url: string;
}

export interface AppSettings {
  panelPosition: Position;
  panelSize: Size;
  profiles: VncProfile[];
  activeProfileId: string | null;
  forwardEvents: boolean;
  lastDraft?: string;
  showPrompt: boolean;
  showVoiceControl: boolean;
  voiceButtonPosition: Position;
}

export interface SystemEvent {
  type: 'keydown' | 'keyup';
  key: string;
  code: string;
  ctrlKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
  metaKey: boolean;
}

export interface CommandLog {
  id: string;
  text: string;
  timestamp: Date;
  status: 'sending' | 'sent' | 'error';
}