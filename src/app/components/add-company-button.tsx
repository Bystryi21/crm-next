'use client';

import React, { useState } from 'react';
import Button from './button';
import dynamic from 'next/dynamic';
// import CompanyFormModal from './company-modal-form';
const CompanyFormModal = dynamic(() => import('./company-modal-form'), {
  ssr: false,
});
// export interface AddCompanyButtonProps {}

export default function AddCompanyButton() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Button onClick={() => setShow(true)}>Add company</Button>
      <CompanyFormModal
        onSubmit={console.log()}
        show={show}
        onClose={() => setShow(false)}
      />
    </div>
  );
}
