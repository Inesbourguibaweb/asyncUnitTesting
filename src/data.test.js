import { it, expect, describe, vi } from 'vitest';
import { generateReportData } from './data';

describe('generateReportData()', () => {
  it('should execute log', () => {
    // spy function
    const logger = vi.fn();

    generateReportData(logger);

    expect(logger).toBeCalled();
  });
});
