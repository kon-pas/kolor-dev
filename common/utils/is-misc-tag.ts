import { MiscTag } from "@enums";

const isMiscTag = (element: any): element is MiscTag => element in MiscTag;

export default isMiscTag;
