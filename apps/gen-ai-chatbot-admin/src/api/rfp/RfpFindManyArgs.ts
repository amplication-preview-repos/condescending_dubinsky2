import { RfpWhereInput } from "./RfpWhereInput";
import { RfpOrderByInput } from "./RfpOrderByInput";

export type RfpFindManyArgs = {
  where?: RfpWhereInput;
  orderBy?: Array<RfpOrderByInput>;
  skip?: number;
  take?: number;
};
