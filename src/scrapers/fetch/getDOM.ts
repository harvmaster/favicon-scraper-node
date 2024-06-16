export const getHTML = async (url: string, agent: string): Promise<{ dom: string, res: Response }> => {
  const res = await fetch(`https://${url}`, {
    headers: {
      'User-Agent': agent
    }
  })

  return { dom: await res.text(), res }
}

export default getHTML