export interface BaseResponse<T> {
  success: boolean;
  data: T;
}

export type MaintenanceResponse = BaseResponse<{
  event: Event;
  guarantees: Guarantee[];
  maintenance: Maintenance;
  principles: Guarantee[];
  models: Model[];
}>;

export interface Maintenance {
  id: number;
  title1: string;
  text: string;
  title2: string;
}

export interface Guarantee {
  title: string;
  text: string;
  id: number;
}

export interface Event {
  id: number;
  title: string;
  text: string;
  contactText: string;
  image1Path: string;
  image2Path: string;
}

export interface Model {
  id: number;
  name: string;
  image: string;
  link: string;
  eBrochure: string;
  userGuide: string;
  maintainGuide: string;
  year: number;
  status: string;
  imagePath: string;
  userGuidePath: string;
  maintainGuidePath: string;
  eBrochurePath: string;
  createdAt: string;
  frame: string;
}

export interface Promotions {
  id: number;
  imagePath: string;
}

export interface DetailedStock {
  id: number;
  title: string;
  imagePath: string;
  description: string;
}

export interface OffersTestDrive {
  title: string;
  subtitle: string;
  imagePath: string;
  formTitle: string;
  name: string;
  phone: string;
  mail: string;
  message: string;
  phoneService: string;
  phoneSale: string;
}

export interface OffersContacts {
  title: string;
  companyName: string;
  workingDays: string;
  phoneService: string;
  phoneSale: string;
}
