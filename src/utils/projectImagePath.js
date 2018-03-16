const projectImagePath = (imagePath, path, name) => {
  if (imagePath) {
    return imagePath
  } else {
    return `/images/projects${path}${name}.png`
  }
}

export default projectImagePath