export function formatBlogDate(dateString: string) {
    const postDate = new Date(dateString)
    const currentDate = new Date()

    const formattedDate = postDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

    const timeDifference: number = currentDate.getTime() - postDate.getTime()
    const minutesAgo = Math.floor(timeDifference / (1000 * 60))
    const hoursAgo = Math.floor(minutesAgo / 60)
    const daysAgo = Math.floor(hoursAgo / 24)
    const monthsAgo = Math.floor(daysAgo / 30)
    const yearsAgo = Math.floor(monthsAgo / 12)

    let timeAgoString

    if (minutesAgo < 1) {
        timeAgoString = 'Just now'
    } else if (minutesAgo === 1) {
        timeAgoString = '1 min ago'
    } else if (minutesAgo < 60) {
        timeAgoString = `${minutesAgo} mins ago`
    } else if (hoursAgo === 1) {
        timeAgoString = '1 hour ago'
    } else if (hoursAgo < 24) {
        timeAgoString = `${hoursAgo} hours ago`
    } else if (daysAgo === 1) {
        timeAgoString = '1 day ago'
    } else if (daysAgo < 30) {
        timeAgoString = `${daysAgo} days ago`
    } else if (monthsAgo === 1) {
        timeAgoString = '1 month ago'
    } else if (monthsAgo < 12) {
        timeAgoString = `${monthsAgo} months ago`
    } else if (yearsAgo === 1) {
        timeAgoString = '1 year ago'
    } else {
        timeAgoString = `${yearsAgo} years ago`
    }

    return {
        formattedDate,
        timeAgoString,
    }
}
