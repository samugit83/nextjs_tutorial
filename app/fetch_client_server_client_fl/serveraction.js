'use server'

export const serverAction = async () => {

    const res = await fetch('https://catfact.ninja/fact', {next: {revalidate: 0}})
    const data = await res.json()

    return data

}
