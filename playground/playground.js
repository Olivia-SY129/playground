console.log(
  'aaabbccdd'.replace(/(([\w])\2+)/g, (match, p1, p2) => p1[0] + p1.length),
);

console.log(
  'ab'.replace(/.+/, match =>
    match.length > 2
      ? match
      : match + match[match.length - 1].repeat(3 - match.length),
  ),
);
