import { BaseResponse } from './mainPage';

export interface Option {
  id: number;
  name: string;
  availableOptions: AvailableOption[];
}

export interface AvailableOption {
  id: number;
  name: string;
}

export interface FrameModel {
  id: number;
  name: string;
  models: ModelWithEquipment[];
}

export interface ModelWithEquipment {
  id: number;
  name: string;
  image: string;
  link: string;
  imagePath: string;
  equipments: Equipment[];
}

export interface Equipment {
  id: number;
  name: string;
}

export type ModelsResponse = BaseResponse<{
  options: Option[];
  rangedOptions: any[];
  frameModels: FrameModel[];
}>;
