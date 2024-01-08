export interface BaseResponse<T> {
  success: boolean;
  data: T;
}

export type MaintenanceResponse = BaseResponse<{
  event: Event;
  guarantees: Guarantee[];
  maintenance: Maintenance;
  principles: Guarantee[];
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

// export interface MaintenanceEvents {
//   firstImagePath: string;
//   secondImagePath: string;
//   title?: string;
//   subtitle?: string;
//   text?: string;
// }

// export interface MaintenanceRegister {
//   title?: string;
//   name: string;
//   phone: string;
//   mail: string;
//   message?: string;
//   phoneService: string;
//   phoneSale: string;
// }

// export interface MaintenanceWarranty {
//   id: number;
//   title: string;
//   description: string;
// }

// export interface MaintenanceService {
//   id: number;
//   title: string;
//   description: string;
//   subtitle: string;
//   accordion: {
//     id: number;
//     name: string;
//     text: string;
//   }[];
//   userGuideTitle: string;
//   tableHead: {
//     year: string;
//     type: string;
//     state: string;
//     name: string;
//     createdAt: string;
//     downloadLink: string;
//   };
//   tableContent: {
//     id: number;
//     year: string;
//     type: string;
//     state: string;
//     name: string;
//     createdAt: string;
//     downloadLink: string;
//   }[];
// }

// export interface MaintenanceMap {
//   title: string;
//   tableHead: {
//     models: string;
//     map: string;
//   };
//   models: {
//     id: number;
//     name: string;
//   }[];
//   downloadLink: string;
// }

// export interface MaintenanceResponsibility {
//   title: string;
//   subtitle: string;
//   text: string;
//   listItems: {
//     id: number;
//     listText: string;
//   }[];
// }

export interface Stock {
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
