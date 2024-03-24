export type Entry = {
  hashtag: String;
  entryTitle: String;
  entryCreatorAddress: String;
  comments: Array<EntryComment>;
};

export type EntryComment = {
  commentString: String;
  commentCreatorAddress: String;
};
