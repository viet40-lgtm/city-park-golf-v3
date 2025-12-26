
import { prisma } from '../lib/prisma'

async function main() {
    try {
        // Try to count events to see if table exists
        const count = await prisma.event.count()
        console.log(`Event table exists. Count: ${count}`)
    } catch (e) {
        console.error("Error accessing Event table:", e)
    } finally {
        await prisma.$disconnect()
    }
}

main()
