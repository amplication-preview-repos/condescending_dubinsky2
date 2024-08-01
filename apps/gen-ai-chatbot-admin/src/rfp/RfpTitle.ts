import { Rfp as TRfp } from "../api/rfp/Rfp";

export const RFP_TITLE_FIELD = "title";

export const RfpTitle = (record: TRfp): string => {
  return record.title?.toString() || String(record.id);
};
