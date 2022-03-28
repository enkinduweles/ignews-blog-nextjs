import Link from 'next/link';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
// import { linkResolver, repositoryName } from '../services/prismicio';

import { AppProps } from 'next/app';
import { SessionProvider as NextAuthProvider } from 'next-auth/react';
import { Header } from '../components/Header';
import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <PrismicProvider
    //   linkResolver={linkResolver}
    //   internalLinkComponent={({ href, children, ...props }) => (
    //     <Link href={href}>
    //       <a {...props}>{children}</a>
    //     </Link>
    //   )}
    // >
    // {/* </PrismicProvider> */}
    <NextAuthProvider session={pageProps.session}>
      <Header />
      {/* <PrismicPreview repositoryName={repositoryName}> */}
      <Component {...pageProps} />
      {/* </PrismicPreview> */}
    </NextAuthProvider>
  );
}

export default MyApp;
