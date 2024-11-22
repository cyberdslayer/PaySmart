
import {  useRouter } from 'next/router';
import React from 'react';
import { redirect } from 'next/navigation';

const HomePage = () => {
  redirect("/dashboard")
};


export default HomePage;