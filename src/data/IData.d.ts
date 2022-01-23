export declare module IGarbageCollector {
  export interface ActionDescriptions {
    [key: string]: string;
  }

  export interface Observation {
    [key: string]: string;
  }

  export interface ImmediateAlerts {
    [key: string]: string;
  }

  export interface Asset {
    [key: string]: string;
  }

  export interface Performance {
    [key: string]: string;
  }

  export interface TypeDetail {
    observation: Observation;
    vcr: string;
    immediate_alerts: ImmediateAlerts;
    incident: string;
    cleancity: string;
    asset: Asset;
    performance: Performance;
  }

  export interface Medium {
    url: string;
    type: string;
  }

  export interface Action {
    comment?: string;
    task_id?: string | null;
    title?: string;
    user?: string;
    date?: any;
    action_taken?: boolean;
    action_id?: number;
  }

  export interface Extras {
    new: boolean;
    vehicle_id: number;
    driver_id: string;
  }

  export interface Detail {
    format: string;
    value: any;
    title: string;
    link?: string | undefined;
  }

  export interface Location {
    latitude: number;
    type: string;
    longitude: number;
  }

  export interface IListItem {
    media: Medium[];
    actions: Action[];
    extras: Extras;
    details: Detail[];
    type: string;
    id: number;
    location: Location;
    isSelected?: boolean;
  }

  export interface RootObject {
    last_update_time: number;
    timezone: string;
    action_descriptions: ActionDescriptions;
    success: boolean;
    type_detail: TypeDetail;
    msg: string;
    data: IListItem[];
    type: string;
  }
}
