export interface MaintenanceEvents {
  firstImagePath: string;
  secondImagePath: string;
  title?: string;
  subtitle?: string;
  text?: string;
}

export interface MaintenanceRegister {
  title?: string;
  name: string;
  phone: string;
  mail: string;
  message?: string;
  phoneService: string;
  phoneSale: string;
}
