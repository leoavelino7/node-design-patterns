class File {
  constructor(limitSize = 1) {
    this.limitSize = limitSize
  }
}

class SmallFile extends File {
  constructor() {
    super(2)
  }
}

class MediumFile extends File {
  constructor() {
    super(4)
  }
}

class BigFile extends File {
  constructor() {
    super(8)
  }
}

function createFile(type){
  const supportedFileTypes = {
    small: SmallFile,
    medium: MediumFile,
    big: BigFile,
  }

  return new (supportedFileTypes[type] || File)();
}

module.exports = createFile