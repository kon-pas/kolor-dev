import { MiscTags } from "@enums";

const isMiscTag = (element: any): element is MiscTags => element in MiscTags;

export default isMiscTag;
