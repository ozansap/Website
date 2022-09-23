const markdown = (text: string) => {
  return text.replaceAll("[", "<span>").replaceAll("]", "</span>");
}

export default markdown;