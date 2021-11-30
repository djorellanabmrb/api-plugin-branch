import SimpleSchema from "simpl-schema";

export const Point = new SimpleSchema({
  type: {
    type: String,
    allowedValues: "Point"
  },
  coordinates: {
    type: [Number]
  }
});

export const ScheduleDetail = new SimpleSchema({
  openedHour: {
    type: String
  },
  closedHour: {
    type: String
  }
});

export const schedule = new SimpleSchema({
  sunday: ScheduleDetail,
  monday: ScheduleDetail,
  tuesday: ScheduleDetail,
  wednesday: ScheduleDetail,
  thursday: ScheduleDetail,
  friday: ScheduleDetail,
  saturday: ScheduleDetail
});

export const Polygon = new SimpleSchema({
  type: {
    type: String,
    allowedValues: "Polygon"
  },
  coordinates: {
    type: [[[Number]]]
  }
});

export const Branch = new SimpleSchema({
  name: {
    type: String
  },
  address: {
    type: String
  },
  phone: {
    type: String
  },
  thirdCode: {
    type: String
  },
  deliveryCode: {
    type: String
  },
  distanceDelivery: {
    type: Number
  },
  polygon: Polygon,
  point: Point,
  shopId: String
});
