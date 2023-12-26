class IllinoisStatute {
  constructor(chapter, act) {
    this.chapter = chapter;
    this.act = act;
    this.sections = [];
  }

  addSection(sect, txt) {
    this.section.push({
      section: sect,
      text: txt
    });
  }
}
