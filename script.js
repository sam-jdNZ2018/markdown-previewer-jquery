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

  function handleResize(e) {
    let width = e.target.innerWidth;
    let height = e.target.innerHeight;
    if(e.target.innerWidth < 800){
      view = "stack";
      makeStack();
      $("#view-switch").attr("disabled",true);
    }
    else{
      $("#view-switch").attr("disabled",false);
    }
  }

  function handleInput(e) {
    markdown = e.target.value;
    convertMarkdown();
  }

  function convertMarkdown() {
    $("#preview").html(marked(markdown));
  }

  function switchView() {
    if (view == "stack") {
      view = "aside";
      $("#app-inner").css({
        "display": "grid", "grid-template-rows": "auto",
        "grid-template-columns": "1fr 1fr", "grid-row-gap": "0px",
        "grid-column-gap": "10px"
      });
      $("#editor-outer").css({ "height": "100%", "width": "100%" });
      $("#preview-outer").css({ "height": "100%", "width": "100%" });
    }
    else {
      makeStack();
    }
  }

  function makeStack(){
    view = "stack";
    $("#app-inner").css({
      "display": "grid", "grid-template-rows": "auto 1fr",
      "grid-template-columns": "auto", "grid-row-gap": "20px",
      "grid-column-gap": "0px"
    });
    $("#editor-outer").css({ "height": "100%", "width": "100%" });
    $("#preview-outer").css({ "height": "100%", "width": "100%" });
  }

  function clearEditor() {
    markdown = "";
    $("#editor").val(markdown);
    $("#preview").empty();
  }
$(window).on("resize", handleResize);
  $("#editor").on("input",handleInput);
  $("#clear").click(clearEditor);
  $("#view-switch").click(switchView);
  $("#editor").val(markdown);
  convertMarkdown();
}
);