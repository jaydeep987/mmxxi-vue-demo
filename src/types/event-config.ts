export interface EventConfig {
  // When event list retrieved
  handlerId?: string;

  // Target
  targetImsi?: string;
  targetGroupId?: string;
  targetTag?: string;
  targetOperatorId?: string;

  // name & description
  name: string;
  description?: string;

  // rule config
  ruleConfig: {
    type: string;
    properties: {
      [key: string]: string | number | boolean | undefined;
    };
  };

  // actions
  actionConfigList: ActionConfigList[];

  // status
  status: string | 'active' | 'inactive';
}

export interface ActionConfigList {
  type: string;
  properties: KeyValue<string | undefined>;
}

export interface KeyValue<T> {
  [key: string]: T;
}

export enum EventTargetOptionIds {
  targetImsi = 'targetImsi',
  targetGroupId = 'targetGroupId',
  targetSimId = 'targetSimId',
  targetOperatorId = 'targetOperatorId',
}
