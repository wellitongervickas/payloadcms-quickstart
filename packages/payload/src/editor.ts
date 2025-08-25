import {
  lexicalEditor,
  FixedToolbarFeature,
  UnderlineFeature,
  UnorderedListFeature,
  AlignFeature,
  BoldFeature,
  ChecklistFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  IndentFeature,
  InlineCodeFeature,
  ItalicFeature,
  OrderedListFeature,
  ParagraphFeature,
  StrikethroughFeature,
  LinkFeature,
  UploadFeature,
  BlocksFeature,
} from "@payloadcms/richtext-lexical";

import { Block } from "payload";

const formatFeatures = [
  StrikethroughFeature(),
  AlignFeature(),
  BoldFeature(),
  ChecklistFeature(),
  HeadingFeature(),
  HorizontalRuleFeature(),
  IndentFeature(),
  InlineCodeFeature(),
  ItalicFeature(),
  OrderedListFeature(),
  ParagraphFeature(),
  UnderlineFeature(),
  UnorderedListFeature(),
  LinkFeature(),
];

const editorFeatures = [
  FixedToolbarFeature({
    applyToFocusedEditor: true,
  }),
  UploadFeature(),
];

export type EditorOptions = {
  blocksFeatures?: Block[] | undefined;
};

export const editor = (
  options?: EditorOptions,
): ReturnType<typeof lexicalEditor> => {
  const { blocksFeatures = [] } = options || {};
  return lexicalEditor({
    features({ rootFeatures, defaultFeatures }) {
      const features = [
        ...defaultFeatures,
        ...rootFeatures,
        ...formatFeatures,
        ...editorFeatures,
      ];

      if (!blocksFeatures) return features;

      return [
        ...features,
        BlocksFeature({
          blocks: blocksFeatures,
        }),
      ];
    },
  });
};

export default editor;
