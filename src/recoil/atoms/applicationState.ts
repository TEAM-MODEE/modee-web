import { atom } from 'recoil';

export interface applyStepType {
  current: number;
  total: number;
}

export const applyStepState = atom<applyStepType>({
  key: 'applyStep',
  default: {
    current: 1,
    total: 4,
  },
});

export interface hairStyleType {
  length: string;
  preference: Array<string>;
  lengthStatus: Array<boolean>;
  verifyStatus: boolean;
}

export const hairStyleState = atom<hairStyleType>({
  key: 'hairStyle',
  default: {
    length: '',
    preference: [],
    lengthStatus: [false, false, false, false],
    verifyStatus: false,
  },
});

export interface stringInputType {
  data: string;
}

export const deatiledStyleState = atom<stringInputType>({
  key: 'detailedStyle',
  default: {
    data: '',
  },
});

export interface historyDetailProps {
  service: string;
  period: string;
}

export interface historyType {
  hairServiceRecords: Array<historyDetailProps>;
  hairService: string;
  hairServiceTerm: string;
}

export const historyState = atom<historyType>({
  key: 'history',
  default: {
    hairServiceRecords: [],
    hairService: '',
    hairServiceTerm: '',
  },
});

export interface profileType {
  modelImgUrl: string;
  instagramId: string;
  verifyStatus: boolean;
}

export const profileState = atom<profileType>({
  key: 'profile',
  default: {
    modelImgUrl: '',
    instagramId: '',
    verifyStatus: false,
  },
});

export const applicationCaptureImgUrlState = atom<stringInputType>({
  key: 'applicationCaptureImgUrl',
  default: {
    data: '',
  },
});