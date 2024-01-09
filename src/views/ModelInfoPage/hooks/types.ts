interface HairServiceRecord {
  hairServiceTerm: string;
  hairService: string;
}

interface ApplicationInfo {
  applicationId: number;
  modelImgUrl: string;
  hairLength: string;
  preferHairstyles: string[];
  hairServiceRecords: HairServiceRecord[];
  hairDetail: string;
  isSend: boolean;
}

interface ModelInfo {
  modelId: number;
  name: string;
  age: string;
  gender: string;
  preferRegions: string[];
  instagramId: string;
}

export interface ModelInfoPageProps {
  data: {
    applicationInfo: ApplicationInfo;
    modelInfo: ModelInfo;
  };
}
