import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import Contact from './Contact';
import React from 'react';
import { toast } from 'sonner';

// Mock the framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, whileInView, viewport, ...props }: any) => <div {...props}>{children}</div>,
    a: ({ children, whileInView, viewport, ...props }: any) => <a {...props}>{children}</a>,
    nav: ({ children, whileInView, viewport, ...props }: any) => <nav {...props}>{children}</nav>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

// Mock sonner
vi.mock('sonner', () => ({
  toast: {
    success: vi.fn(),
  },
}));

describe('Contact Component', () => {
  it('should prevent default form submission behavior', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    
    const submitButton = screen.getByText(/Send Message/i);
    const form = submitButton.closest('form');
    
    if (!form) {
      throw new Error('Form not found');
    }

    await user.click(submitButton);

    // Check if our handler ran and called toast.success
    expect(toast.success).toHaveBeenCalledWith("Message sent successfully!");
  });
});
