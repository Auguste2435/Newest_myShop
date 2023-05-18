import { AppProps } from 'next/app'

import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

function Auth({ children, adminOnly }) {
    const router = useRouter();
    const { status, data: session } = useSession({
        required: true,
        onUnauthenticated() {
            router.push('/unauthorized?message=login required');
        },
    });
    if (status === 'loading') {
        return <div>Loading...</div>;
    }
    if (adminOnly && !session.user.isAdmin) {
        router.push('/unauthorized?message=admin login required');
    }

    return children;
}

export default Auth;