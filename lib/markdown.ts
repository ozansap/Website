const markdown = (text: string) => {
  return text.replaceAll("[", "<span class='white'>").replaceAll("]", "</span>");
}

export default markdown;