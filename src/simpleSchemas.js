import SimpleSchema from "simpl-schema";

export const Point = new SimpleSchema({
  "type": {
    type: String,
    allowedValues: "Point"
  },
  "coordinates": {
    type: Array
  },
  "coordinates.$": {
    type: Number
  }
});

export const Polygon = new SimpleSchema({
  "type": {
    type: String,
    allowedValues: "Polygon"
  },
  "coordinates": {
    type: Array
  },
  "coordinates.$": {
    type: Array
  },
  "coordinates.$.$": {
    type: Array
  },
  "coordinates.$.$.$": {
    type: Number
  }
});

export const GeneralDataBranch = new SimpleSchema({
  name: {
    type: String
  },
  address: {
    type: String
  },
  phone: {
    type: String
  },
  invoiceCode: {
    type: String
  },
  deliveryCode: {
    type: String
  }
});

export const ScheduledDataBranch = new SimpleSchema({
  isClosed: {
    type: Boolean
  },
  sheduledOpenString: {
    type: String
  },
  scheduledOpenNumber: {
    type: Number
  },
  scheduledCloseString: {
    type: String
  },
  scheduledClosedNumber: {
    type: Number
  }
});

export const GeographyDataBranch = new SimpleSchema({
  point: {
    type: Point
  },
  polygon: {
    type: Polygon
  },
  distance: {
    type: Number
  }
});

export const Branch = new SimpleSchema({
  "generalData": GeneralDataBranch,
  "scheduleData": {
    type: Array
  },
  "scheduleData.$": {
    type: ScheduledDataBranch
  },
  "shopId": {
    type: String
  },
  "geographyData": GeographyDataBranch
});
