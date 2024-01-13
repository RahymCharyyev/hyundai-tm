export interface BaseResponse {
  success: boolean;
  data: Contacts;
}

export interface Contacts {
  callCenter: string;
  phone: string;
  serviceDepartmentPhone: string;
  salesDepartmentPhone: string;
  email: string;
  address: string;
}
