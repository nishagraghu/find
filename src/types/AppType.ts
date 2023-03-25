
export interface AppType {

  phonnumber: string;
  jwt: string;
  isLoggedIn: boolean;

}
export interface UserInfoType {

  name: string,
  email: string,
  address1: string,
  address2: string,
  city: string,
  state: string,
  pincode: string,



}

export interface FilterType {
  loading: boolean,
  selectedbroand: {
    id: number,
    value: string,
    logo?: string

  },
  selectedModel: {
    id: number
    value: string,
  },
  selectedyearofmake: {
    id: number,
    value: string
  },
  selectedvariant: {
    id: number,
    value: string,
  }
  models: {
    id: number
    value: string,
  }[],
  brands: {
    id: number,
    value: string,
    logo?: string
  }[],
  yearofmakes: {
    id: number,
    value: string,

  }[],
  variants: {
    id: number,
    value: string,
  }[]
  // parts:{

  // }[]




}