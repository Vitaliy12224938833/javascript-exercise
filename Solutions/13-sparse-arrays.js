"use strict";

const matchingStrings = (stringList, queries) => {
  return queries.map(
    (elQueries) =>
      stringList.filter((elString) => elString === elQueries).length
  );
};
console.log(
  matchingStrings(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"])
);
