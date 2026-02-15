import { SystemEvent } from '../types';

export const sendCommandToVnc = async (command: string): Promise<{ success: boolean; message: string }> => {
  return new Promise((resolve) => {
    console.log(`[Mock API] Sending command to VNC: ${command}`);
    
    // Simulate network delay
    setTimeout(() => {
      // Simulate 90% success rate
      const isSuccess = Math.random() > 0.1;
      
      if (isSuccess) {
        resolve({
          success: true,
          message: `Command executed: "${command.substring(0, 20)}${command.length > 20 ? '...' : ''}"`
        });
      } else {
        resolve({
          success: false,
          message: "Failed to establish connection with VNC server."
        });
      }
    }, 800);
  });
};

export const sendSystemEvent = async (event: SystemEvent): Promise<void> => {
  // Fire and forget for system events, usually lower latency requirements
  console.log(`[Mock API] System Event: ${event.type} [${event.code}] Modifiers: ${event.ctrlKey ? 'CTRL ' : ''}${event.altKey ? 'ALT ' : ''}`);
  return Promise.resolve();
};