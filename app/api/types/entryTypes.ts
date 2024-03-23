export type Entry = {
  hashtag: String;
  entryTitle: String;
  entryCreatorAddress: String;
  comments: Map<String, EntryComment>;
};

export type EntryComment = {
  commentString: String;
  commentCreatorAddress: String;
};
