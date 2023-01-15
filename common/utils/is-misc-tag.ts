import { MiscTag } from "@enums";

/**
 * Type guard for `MiscTag`
 */
const isMiscTag = (element: any): element is MiscTag => element in MiscTag;

export default isMiscTag;
