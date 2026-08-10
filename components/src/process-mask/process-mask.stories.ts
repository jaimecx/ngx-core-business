import { moduleMetadata } from '@storybook/angular-vite';
import type { Meta, StoryObj } from '@storybook/angular-vite';

import { NgBizProcessMaskModule } from './process-mask.module';
import { ProcessMaskComponent } from './process-mask.component';

const meta: Meta<ProcessMaskComponent> = {
  title: 'Components/ProcessMask',
  tags: ['autodocs'],
  component: ProcessMaskComponent,
  decorators: [
    moduleMetadata({
      imports: [NgBizProcessMaskModule],
    }),
  ],
};

export default meta;

type Story = StoryObj<ProcessMaskComponent>;

// Stories
export const Default: Story = {
};
