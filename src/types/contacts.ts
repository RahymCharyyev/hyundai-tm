export interface BaseResponse {
  success: boolean;
  data: Contacts;
}

export interface Contacts {
  phone: Phone;
  serviceDepartmentPhone: ServiceDepartmentPhone;
  salesDepartmentPhone: SalesDepartmentPhone;
  email: Email;
  companyName: CompanyName;
  workingDays: WorkingDays;
  address: Address;
  Instagram: Instagram;
  Telegram: Telegram;
  Youtube: Youtube;
  callCenter: CallCenter;
}

export interface Phone {
  value: string;
  icon: string;
}

export interface ServiceDepartmentPhone {
  value: string;
  icon: string;
}

export interface SalesDepartmentPhone {
  value: string;
  icon: string;
}

export interface Email {
  value: string;
  icon: string;
}

export interface CompanyName {
  value: string;
  icon: string;
}

export interface WorkingDays {
  value: string;
  icon: string;
}

export interface Address {
  value: string;
  icon: string;
}

export interface Instagram {
  value: string;
  icon: string;
}

export interface Telegram {
  value: string;
  icon: string;
}

export interface Youtube {
  value: string;
  icon: any;
}

export interface CallCenter {
  value: string;
  icon: any;
}
