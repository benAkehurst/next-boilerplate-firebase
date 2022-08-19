import type { NextPage } from 'next';
import Header from '../components/UI/Header';
import Footer from '../components/UI/Footer';
import React from 'react';
import Link from 'next/link';
import { useAuth } from '../store/AuthContext';

const Home: NextPage = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <main className="d-flex flex-column min-vh-100">
      <Header />
      <div className="align-self-center vh-100">
        <div style={{ padding: '40px' }}>
          <p>{`User ID: ${user ? user.uid : 'no user signed in'}`}</p>

          <p>
            <Link href="/authenticated">
              <a>Go to authenticated route</a>
            </Link>
          </p>
          <p>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
