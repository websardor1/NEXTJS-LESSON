import { cookies } from 'next/headers'
import { Suspense } from 'react'

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProfileContent />
        </Suspense>
    )
}

// Component (not cached) reads runtime data
async function ProfileContent() {
    const session = (await cookies()).get('session')?.value
    return <CachedContent sessionId={session} />
}

// Cached component receives extracted value as a prop
async function CachedContent({ sessionId }: { sessionId: string }) {
    'use cache'
    // sessionId becomes part of the cache key
    const data = await fetchUserData(sessionId)
    return <div>{data}</div>
}