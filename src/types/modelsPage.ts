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

export interface RangedOption {
  id: number;
  name: string;
  from: number;
  to: number;
}

export interface FrameModel {
  id: number;
  name: string;
  models: ModelWithEquipment[];
}

export interface ModelWithEquipment {
  id: number;
  name: string;
  link: string;
  imagePath: string;
  eBrochurePath: string;
  equipments: Equipment[];
  seat: string | null;
}

export interface Equipment {
  id: number;
  name: string;
}

export type ModelsResponse = BaseResponse<{
  options: Option[];
  rangedOptions: RangedOption[];
  frameModels: FrameModel[];
}>;
