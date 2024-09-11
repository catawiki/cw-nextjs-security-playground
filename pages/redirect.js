// pages/redirect.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Redirect() {
  const router = useRouter();
  const { redirectUrl } = router.query;

  useEffect(() => {
    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  }, [redirectUrl]);

  return (
    <div>
      <h1>Redirecting...</h1>
    </div>
  );
}