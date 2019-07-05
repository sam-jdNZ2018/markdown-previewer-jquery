const OPTIONS = { breaks: true };
const placeholder =
  `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

$(document).ready(function () {
  let markdown = placeholder;
  let view = "stack";
  let disabledView = false;

  function convert(){
    return marked(markdown);
  }

  function switchView() {
    if (view == "stack") {
      view = "aside";
      $("#app-inner").css({ "display": "grid", "grid-template-rows": "auto",
      "grid-template-columns": "auto 1fr","grid-row-gap": "0px",
      "grid-column-gap": "10px" });
      $("#editor-outer").css({ "height": "100%", "width": "100%" });
      $("#preview-outer").css({ "height": "100%", "width": "100%" });
    }
    else {
      view = "stack";
      $("#app-inner").css({ "display": "grid", "grid-template-rows": "1fr 1fr", 
      "grid-template-columns": "auto", "grid-row-gap": "20px",
      "grid-column-gap": "0px" });
      $("#editor-outer").css({ "height": "auto", "width": "auto" });
      $("#preview-outer").css({ "height": "auto", "width": "auto" });
    }
  }

  $("#view-switch").click(switchView);
  $("#preview").html(convert(markdown));
});