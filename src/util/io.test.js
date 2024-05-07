import { it, expect, vi } from 'vitest';
import { promises as fs } from 'fs';

import writeData from './io';

vi.mock('fs');

it('should execute the writeData', async () => {
  const inputTest = 'Test';

  const testFileName = 'text.txt';

  writeData(inputTest, testFileName);

  return expect(fs.writeFile).toBeCalled();
});
